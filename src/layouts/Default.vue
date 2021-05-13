<template>
  <v-app>
    <Header :siteName="$static.metadata.siteName" />
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
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
import Header from '@/components/Header';
export default {
  name: "Default",
  components: {
    Header
  }
}
</script>


<style>

</style>
