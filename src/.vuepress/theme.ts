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

  darkmode: "switch",

  breadcrumb: true,

  iconAssets: "iconify",

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



  plugins: {
    shiki: {
      lineNumbers: true,
      collapsedLines: 20,
      themes: {
        light: "github-light",
        dark: "one-dark-pro",
      }
    },
    components: {
      components: ["SiteInfo", "PDF"]
    },
    markdownTab: {
      codeTabs: true,
    },
    blog: true,
    git: true,
    // You should generate and use your own comment service
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },
    // All features are enabled for demo, only preserve features you need here
    // markdown  用不到的false
    mdEnhance: {
      // codeTabs:true,
      align: false,
      attrs: false,
      chart: false,
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
      // presentation: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
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
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
