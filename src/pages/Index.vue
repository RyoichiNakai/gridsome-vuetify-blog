<template>
  <Layout>
    <v-responsive
    :aspect-ratio="16/9"
    style="max-height: 400px">
      <div class="sample_box"/>
    </v-responsive>
    <!-- <v-btn @click="showItem">
        Itemの中身を見る
    </v-btn> -->
    <v-row
      class="mt-10"
      no-gutters
    >
      <!-- 最近の投稿 -->
      <v-col
        cols="12"
        md="9"
        lg="9"
        xl="9"
      >
        <v-row>
          <v-col cols="12">
            <h2>投稿一覧</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            v-for="item in $page.allArticle.edges.slice(0, 2)"
            :key="item.node.id"
            md="6"
            lg="6"
            xl="6"
          >
            <ArticleItem
              class="mx-4"
              :item="item.node"
            />
          </v-col>
          <v-col
            cols="12"
            v-for="item in $page.allArticle.edges.slice(2)"
            :key="item.node.id"
            md="6"
            lg="4"
            xl="4"
          >
            <ArticleItem
              class="mx-4"
              :item="item.node"
            />
          </v-col>
        </v-row>
      </v-col>

      <!-- サイドバー -->
      <v-col
        cols="12"
        md="4"
        lg="4"
        xl="4"
      >
      </v-col>
    </v-row>
  </Layout>
</template>

<page-query>
  query ($page: Int) {
    allArticle (perPage: 5, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          thumbnail
          category
          description
          date (format: "YYYY-MM-DD")
          tags {
            title
            path
          }
          path
        }
      }
    }
  }
</page-query>

<script>
import ArticleItem from "@/components/card/ArticleItem";
export default {
  name: "Index",
  components: {
    ArticleItem
  },
  metaInfo: {
    title: 'Hello, world!'
  },
  methods: {
    showItem(){
      console.log(this.$page.allArticle.edges[0].node)
    }
  }

}
</script>

<style lang="scss" scoped>
.sample {
  &_box {
    height: 100%;
    background-color: indigo;
  }
}

</style>
