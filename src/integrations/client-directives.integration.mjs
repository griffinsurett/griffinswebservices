import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '../..');

const customClientDirectives = [
  {
    name: 'click',
    entrypoint: resolve(rootDir, 'src/integrations/client-directives/click.ts'),
  },
  {
    name: 'scroll',
    entrypoint: resolve(rootDir, 'src/integrations/client-directives/scroll.ts'),
  },
  {
    name: 'hover',
    entrypoint: resolve(rootDir, 'src/integrations/client-directives/hover.ts'),
  },
];

export default function clientDirectivesIntegration() {
  return {
    name: 'greastro-client-directives',
    hooks: {
      'astro:config:setup'({ addClientDirective }) {
        for (const directive of customClientDirectives) {
          addClientDirective(directive);
        }
      },
    },
  };
}
