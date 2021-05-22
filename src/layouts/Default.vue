<template>
  <v-app>
    <Header :siteName="$static.metadata.siteName" />
    <v-main>
      <v-container fluid class="mb-16">
        <v-row>
          <v-col
            cols="12"
            lg="11"
            xl="10"
            class="mx-auto"
          >
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer :siteName="$static.metadata.siteName" />
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';

export default {
  name: "Default",
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
