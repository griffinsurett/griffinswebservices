// src/components/LoopComponents/BlogCard.tsx
import AnimatedBorder from "../AnimatedBorder/AnimatedBorder";

export interface BlogCardAuthor {
  name: string;
  image?: string;
}

export interface BlogCardProps {
  title: string;
  description?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  url?: string;
  publishDate?: string | Date;
  author?: BlogCardAuthor;
  className?: string;
}

function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogCard({
  title,
  description,
  featuredImage,
  featuredImageAlt,
  url,
  publishDate,
  author,
  className = "",
}: BlogCardProps) {
  const hasHref = Boolean(url);

  const hoverLift = "hover:-translate-y-3";
  const wrapperClassName = [
    "group",
    "outer-card-transition",
    hoverLift,
    "!duration-[900ms]",
    "ease-out",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={["h-full", className].filter(Boolean).join(" ")}>
      <AnimatedBorder
        variant="progress-b-f"
        triggers="hover"
        duration={800}
        borderRadius="rounded-3xl"
        borderWidth={2}
        className={wrapperClassName}
        linkProps={hasHref ? { href: url } : undefined}
        innerClassName="card-bg overflow-hidden relative flex flex-col h-full"
      >
        <div className="inner-card-style inner-card-color pointer-events-none opacity-80 z-10" aria-hidden />
        <div className="inner-card-style inner-card-transition inner-card-color pointer-events-none z-20" aria-hidden />

        {/* Featured Image */}
        {featuredImage && (
          <div className="relative w-full aspect-video overflow-hidden z-0">
            <img
              src={featuredImage}
              alt={featuredImageAlt || title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 relative z-30 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-heading text-xl font-semibold mb-2 line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-text text-sm line-clamp-3">{description}</p>
          )}

          {/* Divider & Author/Date - only show if we have author or date */}
          {(author || publishDate) && (
            <>
              {/* Divider */}
              <div className="w-full h-px bg-primary/20 my-4" />

              {/* Author & Date Row */}
              <div className="flex items-center gap-3">
                {/* Author Image */}
                {author?.image && (
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    loading="lazy"
                  />
                )}

                {/* Author Name & Date */}
                <div className="flex flex-col min-w-0">
                  {author?.name && (
                    <span className="text-heading text-sm font-medium truncate">
                      {author.name}
                    </span>
                  )}
                  {publishDate && (
                    <time
                      dateTime={
                        typeof publishDate === "string"
                          ? publishDate
                          : publishDate.toISOString()
                      }
                      className="text-text/70 text-xs"
                    >
                      {formatDate(publishDate)}
                    </time>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </AnimatedBorder>
    </div>
  );
}
