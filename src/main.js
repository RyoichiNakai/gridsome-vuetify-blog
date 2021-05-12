// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from "vuetify"
import "./assets/style/index.scss"

import 'prismjs/themes/prism.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, appOptions, head, isClient }) {
  // Set default layout as a global component
  // Googlr Fontの追加
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto'
  })

  const opts = {
    icons: {
      iconfont: "mdi",
    },
  };

  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify(opts);

  Vue.component('Layout', DefaultLayout)
}
