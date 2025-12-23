import { a as createComponent, c as createAstro, m as maybeRenderHead, b as addAttribute, r as renderSlot, e as renderTemplate, f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CDqnDASo.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$GradientLine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GradientLine;
  const { className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative pl-6 ${className}`.trim(), "class")}> <div class="absolute left-0 top-0 bottom-0 w-px rounded-full primary-gradient"></div> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/GradientLine.astro", void 0);

const frontmatter = {
  "title": "Our Philosophy",
  "order": 5
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$GradientLine, {
      className: "italic text-heading font-medium text-xl",
      children: createVNode(_components.p, {
        children: "“A website should do two things extremely well: be easy for your customers to use and be structured in a way that search engines are confident recommending.”"
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "— Griffin Surett, Founder & CEO"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/about-us/our-philosophy.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/about-us/our-philosophy.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/about-us/our-philosophy.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
