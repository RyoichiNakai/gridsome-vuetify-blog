<template>
  <Layout>
    <h1>Blog</h1>
    <p>記事の一覧</p>
    <article class="blog-article" v-for="article in $page.allArticle.edges" :key="article.node.id">
      <h2>{{ article.node.title }}</h2>
      <span v-for="tag in article.node.tags" :key="tag.id">
        <g-link class="blog-article-glink" :to="tag.path">
          #{{ tag.title }}
        </g-link>
      </span>
      <div>
        {{ article.node.description }}
      </div>
      <div>
        <g-link :to="article.node.path">本文を読む</g-link>
      </div>
    </article>
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
          description
          content
          date (format: "YYYY/MM/DD")
          tags {
            id
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
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    Pager
  }
}
</script>

<style>

</style>