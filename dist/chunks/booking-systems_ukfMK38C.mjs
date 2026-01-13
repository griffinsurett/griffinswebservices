import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$SolutionsSection } from './SolutionsSection_DC94-o7k.mjs';
import 'clsx';

const frontmatter = {
  "title": "Booking & Scheduling",
  "description": "Custom booking systems for appointments, reservations, or resource scheduling that integrate with your calendar and workflows.",
  "heading": {
    "before": "Booking systems",
    "text": "that fill your calendar",
    "after": "without the back-and-forth."
  },
  "order": 20,
  "icon": "fa6-solid:calendar-check",
  "parent": "web-applications"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "We build booking flows that convert visitors into appointments—with smart availability, automated confirmations, and zero double-bookings."
    }), "\n", createVNode($$SolutionsSection, {
      icon: frontmatter.icon,
      features: [{
        title: "Real-time availability",
        description: "Show only open slots based on your actual calendar and rules."
      }, {
        title: "Automated confirmations",
        description: "Email and SMS reminders reduce no-shows automatically."
      }, {
        title: "Calendar sync",
        description: "Two-way sync with Google Calendar, Outlook, or your existing system."
      }, {
        title: "Payment integration",
        description: "Collect deposits or full payment at booking time."
      }, {
        title: "Custom booking rules",
        description: "Buffer times, capacity limits, and service-specific availability."
      }],
      quickFacts: [{
        title: "Timeline",
        description: "4-8 weeks"
      }, {
        title: "Includes",
        description: "Booking flow, admin panel, notifications"
      }, {
        title: "Integrations",
        description: "Calendars, payments, CRM"
      }],
      contentHeading: {
        title: "Bookings should be easy for everyone",
        before: "Phone tag and email chains",
        text: "cost you appointments.",
        after: "Automate the process.",
        description: "Every back-and-forth message is a chance for a customer to give up. A smooth booking flow converts interest into confirmed appointments instantly."
      },
      sidebar: {
        title: "Fill your schedule automatically",
        eyebrow: "Outcomes",
        description: "More bookings, fewer no-shows, and no more manual scheduling headaches.",
        footIcon: "📅",
        footTitle: "Always accurate",
        footDescription: "Real-time availability means no double-bookings or scheduling conflicts."
      },
      textContent: ["Off-the-shelf booking tools work for simple use cases, but real businesses have rules. Service durations, staff availability, location constraints, capacity limits—generic tools can't handle it all.", "We build booking systems tailored to your business logic. Whether you're scheduling consultations, classes, rentals, or appointments, customers see exactly what's available and book in seconds.", "Behind the scenes, you get an admin panel to manage bookings, adjust availability, and track performance—plus integrations with your calendar and CRM to keep everything in sync."],
      benefitsHeading: "Why Custom Booking Works Better",
      ctaTitle: "Ready to automate your bookings?",
      ctaHeading: {
        before: "Let's build your",
        text: "booking system",
        after: "."
      },
      ctaDescription: "Convert more visitors into appointments with a booking flow built for your business."
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
  }) : _createMdxContent();
}

const url = "src/content/solutions/booking-systems.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/booking-systems.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/booking-systems.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
