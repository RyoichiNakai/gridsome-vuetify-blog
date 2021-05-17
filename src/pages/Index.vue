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
      class="mt-8"
      no-gutters
    >
      <!-- 最近の投稿 -->
      <v-col
        cols="12"
        lg="9"
        xl="9"
      >
        <v-row>
          <v-col
            cols="12"
            v-for="item in $page.allArticle.edges.slice(0, 2)"
            :key="item.node.id"
            sm="6"
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
            sm="6"
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
        lg="3"
        xl="3"
      >
        <div class="mt-8 mt-lg-0 ml-10 mr-10 ml-lg-0 mr-10 mr-lg-0">
          <Profile/>
        </div>
        <div class="mt-8 ml-10 mr-10 ml-lg-0 mr-10 mr-lg-0">
          <Calendar/>
        </div>
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
import ArticleItem from "@/components/ArticleItem";
import Profile from "@/components/sidebar/Profile";
import Calendar from "@/components/sidebar/Calendar";

export default {
  name: "Index",
  components: {
    ArticleItem,
    Profile,
    Calendar
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
