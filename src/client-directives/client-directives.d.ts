type ClientClickDirectiveValue =
  | boolean
  | string
  | {
      selector?: string;
      events?: string | string[];
      once?: boolean;
      replay?: boolean;
    };

declare global {
  namespace Astro {
    interface ClientDirectives {
      'client:click'?: ClientClickDirectiveValue;
    }
  }
}

export {};
