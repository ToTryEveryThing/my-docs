import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("book-1", defineAsyncComponent(() => import("E:/c/my-docs/src/.vuepress/components/book-1.vue")))
  },
}
