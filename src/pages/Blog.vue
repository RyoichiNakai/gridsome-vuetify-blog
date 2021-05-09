<template>
  <Layout>
    <h1>Blog</h1>
    <p>記事の一覧</p>
    <article class="blog-article" v-for="post in $page.allPost.edges" :key="post.node.id">
      <h2>{{ post.node.title }}</h2>
      <span v-for="tag in post.node.tags" :key="tag.id">
        <g-link class="blog-article-glink" :to="tag.path">
          #{{ tag.title }}
        </g-link>
      </span>
      <div>
        {{ post.node.description }}
      </div>
      <div>
        <g-link :to="post.node.path">本文を読む</g-link>
      </div>
    </article>
  </Layout>
</template>

<page-query>
  query ($page: Int) {
    allPost (perPage: 5, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          description
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