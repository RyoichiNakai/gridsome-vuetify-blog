<template>
  <v-app-bar
    app
    absolute
    flat
    hide-on-scroll
    scroll-target
  >
    <v-toolbar-title>
      {{ siteName }}
    </v-toolbar-title>
    <v-spacer />
    <v-btn 
      icon
      v-for="icon in icons"
      :key="icon"
    >
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
    <template v-slot:extension>
      <v-tabs>
        <v-tab to="/">
          Home
        </v-tab>
        <v-tab to="/about">
          About
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  props: {
    siteName: String
  },
  data: () => ({
    icons: [
      'fab fa-facebook-square',
      'fab fa-linkedin',
      'fab fa-twitter-square',
      'fab fa-github-square'
    ]
  })
}
</script>

<style>

</style>