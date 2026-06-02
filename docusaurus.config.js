// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OpenATS",
  tagline: "The future of hiring should be open.",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",

  organizationName: "openats",
  projectName: "openats-docs",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Embeds the Figtree font directly into the HTML <head>
  headTags: [
    {
      tagName: "style",
      attributes: {},
      content: `@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');`,
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "OpenATS",
        logo: {
          alt: "OpenATS Logo",
          src: "img/logo.svg",
          width: 32,
          height: 32,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Docs",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "right",
          },
          {
            href: "https://github.com/OpenATS",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            to: "/docs/intro",
            label: "Get started",
            position: "right",
            className: "navbar-cta-btn",
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
