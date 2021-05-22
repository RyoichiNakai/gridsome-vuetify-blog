<template>
  <v-card>
    <v-container>
      <v-row
        justify="center"
      >
        <h2>About Me</h2>
      </v-row>
      <v-row
        :class="spacer"
        justify="center"
      >
        <v-avatar size="192">
          <img
            :src="src"
            alt="Me"
          >
        </v-avatar>
      </v-row>
      <v-divider :class="spacer"/>
      <v-row justify="center">
        <p class="pa-5 mb-0">{{ introduction }}</p>
      </v-row>
      <v-row justify="end">
        <g-link to="/about/" class="mt-n6 pr-4">
          プロフィール詳細
        </g-link>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import ProfileImage from "@/assets/site-meta/profile-img.jpeg"
export default {
  name: "Profile",
  data() {
    return {
      src: ProfileImage,
      introduction: '関西に住む大学院生。研究分野はネットワーク関連です。主に技術やガジェット類について赴くままに、ブログに投稿しています。',
      spacer: 'mt-8'
    }
  }
}
</script>

<style>

</style>