<template>
  <Layout>
    <article>
      <VueRemarkContent />
      <aside>
        <span v-for="tag in $page.post.tags" :key="tag.id">
          <g-link class="blog-article-glink" :to="tag.path">
            #{{ tag.title }}
          </g-link>
        </span>
      </aside>
    </article>
  </Layout>
</template>

<page-query>
  query Post ($id: ID!) {
    post(id: $id) {
      title
      description
      content
      path
      date (format: "yyyy-MM-dd")
      tags {
        id
        title
        path
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this$page.post.title,
      meta: [
        { name: 'description', content: this.$page.post.description }
      ]
    }
  }
}
</script>

<style>

</style>