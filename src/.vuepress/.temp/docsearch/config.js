
import { DocSearch, injectDocSearchConfig } from "D:/study/ToTryEveryThing/my-docs/node_modules/@vuepress/plugin-docsearch/lib/client/index.js"
import 'D:/study/ToTryEveryThing/my-docs/node_modules/@docsearch/css/dist/style.css'
import 'D:/study/ToTryEveryThing/my-docs/node_modules/@vuepress/plugin-docsearch/lib/client/styles/docsearch.css'
import 'D:/study/ToTryEveryThing/my-docs/node_modules/@vuepress/plugin-docsearch/lib/client/styles/vars.css'

export default {
  enhance({ app }) {
    injectDocSearchConfig(app)
    app.component('SearchBox', DocSearch)
  },
}
