<template>
  <Layout>
    <article>
      <aside>
        <span v-for="tag in $page.article.tags" :key="tag.id">
          <g-link class="blog-article-glink" :to="tag.path">
            #{{ tag.title }}
          </g-link>
        </span>
      </aside>
      <p v-html="$page.article.content" />
    </article>
  </Layout>
</template>

<page-query>
query Article($path: String) {
  article (path: $path) {
    title
    description
    content
    date (format: "YYYY-MM-DD")
    tags {
      id
      title
      path
    }
    path
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.article.title,
      meta: [
        { name: 'description', content: this.$page.article.description }
      ]
    }
  }
}
</script>

<style>

</style>