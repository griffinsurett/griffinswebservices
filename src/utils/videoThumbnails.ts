// src/utils/videoThumbnails.ts
/**
 * Video Thumbnail Utilities
 *
 * Generates highly optimized poster frames for videos during build.
 * Uses ffmpeg (via @ffmpeg-installer/ffmpeg) to extract the first frame,
 * caches the raw frame to avoid repeated work, and exposes helpers for
 * downstream optimization pipelines (astro:assets, sharp, etc.).
 */

import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { mkdir, stat } from "node:fs/promises";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

const execFileAsync = promisify(execFile);

const PROJECT_ROOT = process.cwd();
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const CACHE_DIR = path.join(PROJECT_ROOT, ".cache", "video-thumbnails");

export interface VideoThumbnailOptions {
  /**
   * Force cache busting when you need to re-generate the poster without
   * touching the source video (e.g., after tweaking timecode extraction).
   */
  cacheBuster?: string;
  /**
   * Optional custom timecode (in seconds) to sample instead of the very
   * first frame. Useful if the first frame is typically black.
   */
  timecodeSeconds?: number;
  /**
   * Absolute filesystem path override. If provided, src is ignored.
   */
  absolutePath?: string;
}

export interface VideoThumbnailResult {
  /** Absolute path to the cached frame */
  filePath: string;
  /** File URL pointing to the cached frame (for astro:assets consumption) */
  fileUrl: URL;
  /** Capture width/height (raw frame before further optimization) */
  width: number;
  height: number;
  /** Unique hash derived from the video path + metadata */
  cacheKey: string;
  /** Original, resolved absolute video path */
  videoPath: string;
}

/**
 * Resolves the on-disk path for a static video asset.
 * Supports public imports ("/video.mp4") as well as relative paths.
 */
function resolveVideoPath(src: string, absoluteOverride?: string): string {
  if (absoluteOverride) {
    return absoluteOverride;
  }

  if (!src || typeof src !== "string") {
    throw new Error(`[videoThumbnails] Invalid video source: ${src}`);
  }

  if (src.startsWith("/")) {
    return path.join(PUBLIC_DIR, src.slice(1));
  }

  if (path.isAbsolute(src)) {
    return src;
  }

  return path.join(PROJECT_ROOT, src);
}

/**
 * Ensures the cache directory exists.
 */
async function ensureCacheDir() {
  if (!fs.existsSync(CACHE_DIR)) {
    await mkdir(CACHE_DIR, { recursive: true });
  }
}

/**
 * Generate (or fetch from cache) a video thumbnail frame.
 *
 * @param videoSrc Path as referenced in components ("/speed-site.mov", etc.)
 * @param options Additional cache/timecode controls
 */
export async function ensureVideoThumbnail(
  videoSrc: string,
  options: VideoThumbnailOptions = {}
): Promise<VideoThumbnailResult> {
  const absoluteVideoPath = resolveVideoPath(videoSrc, options.absolutePath);
  const videoStat = await stat(absoluteVideoPath);

  const hash = createHash("sha1")
    .update(absoluteVideoPath)
    .update(videoStat.size.toString())
    .update(videoStat.mtimeMs.toString())
    .update(options.cacheBuster ?? "")
    .digest("hex")
    .slice(0, 16);

  await ensureCacheDir();

  const outputPath = path.join(CACHE_DIR, `${hash}.jpg`);

  if (!fs.existsSync(outputPath)) {
    const ffmpegArgs = [
      "-y",
      "-i",
      absoluteVideoPath,
      "-frames:v",
      "1",
      "-q:v",
      "2",
    ];

    if (typeof options.timecodeSeconds === "number" && options.timecodeSeconds >= 0) {
      ffmpegArgs.unshift("-ss", options.timecodeSeconds.toString());
    }

    // Extract the frame
    await execFileAsync(ffmpegInstaller.path, [...ffmpegArgs, outputPath]);
  }

  const sharp = (await import("sharp")).default;
  const metadata = await sharp(outputPath).metadata();

  if (!metadata.width || !metadata.height) {
    throw new Error(`[videoThumbnails] Unable to read metadata for ${outputPath}`);
  }

  return {
    filePath: outputPath,
    fileUrl: pathToFileURL(outputPath),
    width: metadata.width,
    height: metadata.height,
    cacheKey: hash,
    videoPath: absoluteVideoPath,
  };
}
