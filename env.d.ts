/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_DOMAIN: string;
  readonly PUBLIC_FORMSPREE_CONTACT_ID?: string;
  readonly PUBLIC_FORMSPREE_QUOTE_ID?: string;
  readonly PUBLIC_GOOGLE_TRANSLATE_KEY?: string;
  readonly OPENAI_API_KEY: string;
  readonly SUPABASE_URL?: string;
  readonly SUPABASE_ANON_KEY?: string;
  readonly SUPABASE_SERVICE_ROLE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "pdf-parse" {
  function pdf(dataBuffer: Buffer, options?: any): Promise<{
    text: string;
    numpages: number;
    numrender: number;
    info: any;
    metadata: any;
    version: string;
  }>;
  export = pdf;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}
