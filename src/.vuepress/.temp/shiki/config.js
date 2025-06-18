import "D:/study/ToTryEveryThing/my-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "D:/study/ToTryEveryThing/my-docs/node_modules/@vuepress/plugin-shiki/lib/client/styles/shiki.css"
import "D:/study/ToTryEveryThing/my-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "D:/study/ToTryEveryThing/my-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "D:/study/ToTryEveryThing/my-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "D:/study/ToTryEveryThing/my-docs/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
