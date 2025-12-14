type ClientClickDirectiveValue =
  | boolean
  | string
  | {
      selector?: string;
      events?: string | string[];
      once?: boolean;
      replay?: boolean;
      handlerKey?: string;
    };

type ClientScrollDirectiveValue =
  | boolean
  | number
  | {
      threshold?: number;
    };

type ClientHoverDirectiveValue =
  | boolean
  | string
  | {
      selector?: string;
      events?: string | string[];
      once?: boolean;
      includeFocus?: boolean;
    };

declare global {
  namespace Astro {
    interface ClientDirectives {
      'client:click'?: ClientClickDirectiveValue;
      'client:scroll'?: ClientScrollDirectiveValue;
      'client:hover'?: ClientHoverDirectiveValue;
    }
  }
}

export {};
