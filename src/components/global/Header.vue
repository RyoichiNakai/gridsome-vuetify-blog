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
    <v-btn icon>
      <v-icon>fab fa-facebook-square</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>fab fa-linkedin</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>fab fa-twitter-square</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>fab fa-github-square</v-icon>
    </v-btn>
    <template v-slot:extension>
      <v-tabs>
        <v-tab to="/">
          Home
        </v-tab>
        <v-tab to="/about">
          About
        </v-tab>
        <v-tab to="/articles/">
          Article
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
}
</script>

<style>

</style>