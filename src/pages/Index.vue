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
            v-for="item in $page.allArticlePerPage.edges.slice(0, 2)"
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
            v-for="item in $page.allArticlePerPage.edges.slice(2)"
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
        <v-row justify="center" class="mt-8">
          <Pager
            linkClass="v-btn mx-2 v-pagination__item primary"
            :info="$page.allArticlePerPage.pageInfo"
            :showNavigation="false"
            showLinks
          />
        </v-row>
      </v-col>

      <!-- サイドバー -->
      <v-col
        cols="12"
        lg="3"
        xl="3"
      >
        <div class="mt-8 mt-lg-0 ml-16 mr-16 ml-lg-0 mr-lg-0">
          <Profile />
        </div>
        <div class="mt-8 ml-16 mr-16 ml-lg-0 mr-lg-0">
          <Calendar :items="$page.allArticle.edges"/>
          <!-- 現状はallArticlesを渡しておくことにする、あとで全ページに渡せるように設定 -->
        </div>
      </v-col>
    </v-row>
  </Layout>
</template>

<page-query>
  query ($page: Int) {
    allArticle: allArticle {
      edges {
        node {
          date (format: "YYYY-MM-DD")
        }
      }
    }
    allArticlePerPage: allArticle (perPage: 5, page: $page) @paginate {
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
import { Pager } from "gridsome"

export default {
  name: "Index",
  components: {
    ArticleItem,
    Profile,
    Calendar,
    Pager
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
