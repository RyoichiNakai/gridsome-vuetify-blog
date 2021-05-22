<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        @{{ new Date().getFullYear() }} — <strong>{{ siteName }}</strong>
      </v-card-text>
    </v-card>
  </v-footer>

</template>

<script>
  export default {
    name: 'Footer',
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
    }),
  }
</script>

<style>

</style>