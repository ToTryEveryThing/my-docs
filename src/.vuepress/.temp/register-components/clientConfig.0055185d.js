import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("book-1", defineAsyncComponent(() => import("D:/study/ToTryEveryThing/my-docs/src/.vuepress/components/book-1.vue")))
  },
}
