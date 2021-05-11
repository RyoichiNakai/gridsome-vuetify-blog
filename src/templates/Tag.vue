<template>
  <Layout>
    <h1>#{{ $page.tag.title }}の一覧</h1>
    <article class="blog-article" v-for="tag in $page.tag.belongsTo.edges" :key="tag.node.id">
      <h2>{{ tag.node.title }}</h2>
      <div>
        {{ tag.node.description }}
      </div>
      <div>
        <g-link :to="tag.node.path">
          本文を読む
        </g-link>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query  Tag($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Article {
            id
            title
            description
            date (format: "YYYY-MM-DD")
            path
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {

}
</script>

<style>

</style>