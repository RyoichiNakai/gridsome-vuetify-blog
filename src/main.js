// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from "vuetify"
import 'vuetify/dist/vuetify.min.css';

import 'prismjs/themes/prism.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, appOptions, head, isClient }) {
  // Set default layout as a global component
  // Googlr Fontの追加
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.15.3/css/all.css',
    integrity: 'sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk',
    crossorigin: 'anonymous'
  })

  const opts = {
    icons: {
      iconfont: "fa",
    },
  };

  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify(opts);

  Vue.component('Layout', DefaultLayout)
}
