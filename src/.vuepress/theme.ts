import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "docs.beink.cn/",
  repoLabel: "GitHub",
  repo: "ToTryEveryThing/my-docs",
  repoDisplay: true,
  author: {
    name: "mishu",
    url: "https://github.com/ToTryEveryThing/my-docs",
  },

  plugins: {
    icon: {
      assets: "iconify"
    },
    components: {
      components: ["SiteInfo", "PDF"]
    },
    blog: true,
    git: true,
  },

  darkmode: "switch",

  breadcrumb: true,

  changelog: true,

  logo: "logo.svg",


  docsDir: "src",

  // catalog: false,

  // navbar
  navbar,

  lastUpdated: true,

  // sidebar
  sidebar,


  displayFooter: true,

  footer: `
  <a href="https://theme-hope.vuejs.press/zh/">vuepress-home-theme</a>

  `,


  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },
  navbarLayout: {
    start: ["Brand"],
    end: ["Links", "Outlook", "Repo", "Search"],
  },

  markdown: {
    highlighter: {
      type: "shiki",
      collapsedLines: true,
      themes: {
        light: "one-light",
        dark: "github-dark",
      }
    },
    // codeTabs:true,
    align: false,
    attrs: false,
    // codetabs: true,
    demo: false,
    echarts: false,
    // figure: true,
    flowchart: false,
    gfm: true,
    // imgLazyload: true,
    // imgSize: true,
    include: true,
    // katex: false,
    mark: false,
    mermaid: true,
    playground: {
      presets: ["ts", "vue"],
    },
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: false,
    sup: false,
    // tabs: false,
    vPre: false,
    vuePlayground: false,
    codeTabs: true,
  },

});
