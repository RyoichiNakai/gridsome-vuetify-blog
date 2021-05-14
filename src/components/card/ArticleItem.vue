<template>
  <v-card>

    <v-img
      :src="item.thumbnail"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="item.title"></v-card-title>
    </v-img>

    <v-card-actions>
      <!-- リンクを入れる -->
      <div>
        <p class="mb-0">{{ item.category }}</p>
      </div>
      <v-spacer />
      {{ item.date }}
      <!-- リンクを入れる -->
    </v-card-actions>

    <v-card-actions>
      <p class="mb-0"> {{ item.description }} </p>
    </v-card-actions>

    <v-divider/>

    <v-card-actions>
      <p
        class="pl-2 mb-0"
        v-for="tag in item.tags"
        :key="tag.id"
      >
        {{ tag.title }}
      </p>
      <v-spacer />
        <v-btn depressed >
          <g-link :to="item.path" style="text-decoration: none;">
              Read More
          </g-link>
        </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ArticleItem",
  props: {
    item: Object
  },
  mounted: function(){
    console.log(this.item)
  }
}
</script>

<style>

</style>