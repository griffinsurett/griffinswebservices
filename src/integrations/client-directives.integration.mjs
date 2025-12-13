const customClientDirectives = [
  {
    name: 'click',
    entrypoint: './src/client-directives/click.ts',
  },
];

export default function clientDirectivesIntegration() {
  return {
    name: 'gws-client-directives',
    hooks: {
      'astro:config:setup'({ addClientDirective }) {
        for (const directive of customClientDirectives) {
          addClientDirective(directive);
        }
      },
    },
  };
}
