<template>
  <Layout>
    <v-card>
      <v-sheet class="pa-12">
        <h1>{{ $page.about.title }}</h1>
        <div v-html="$page.about.content" />
      </v-sheet>
    </v-card>
  </Layout>
</template>

<page-query>
query About($path: String) {
  about (path: $path) {
    title
    path
    content
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: ''
  }
}
</script>

<style lang="scss" scoped>

::v-deep h2 {
  position: relative;
  padding: 1rem 2rem;
  border-bottom: 6px solid rgb(0, 122, 153);

  &::before {
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 20%;
    height: 6px;
    content: '';
    background: #00c5cc;
  }
}

::v-deep h3 {
  position: relative;
  margin-top: 1rem;
  padding: 1rem 2rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 7px;
    background: -webkit-repeating-linear-gradient(-45deg, #6ad1c8, #6ad1c8 2px, #fff 2px, #fff 4px);
    background: repeating-linear-gradient(-45deg, #6ad1c8, #6ad1c8 2px, #fff 2px, #fff 4px);
  }
}

::v-deep p {
  margin-top: 1rem;
}

::v-deep ul {
  margin-top: 1rem;
  margin-bottom: 1rem;

  li {
    position: relative;
    list-style: none;

    &::after {
      display: block;
      content: '';
      position: absolute;
      top: .5em;
      left: -1em;
      width: 5px;
      height: 5px;
      background-color: #fff;
      border: 1px solid #3498db;
      border-radius: 100%;
    }
  }
}

::v-deep table{
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-collapse: collapse;
  border-spacing: 0;

  th, td {
    padding: 1rem 3rem;
    text-align: center;
  }

  tr:nth-child(odd) {
    background-color: #eee
  }
}

::v-deep blockquote {
  position: relative;
  margin: 1rem;
  padding: 0.1rem 4rem;
  border-top: 0.5rem solid #0f9fb3;
  border-radius: 0.2rem;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),
              0 2px 2px 0 rgba(0,0,0,.14),
              0 1px 5px 0 rgba(0,0,0,.12);
  &::before {
    position: absolute;
    top: 0.8rem;
    left: 1.5rem;
    font-family: "Font Awesome 5 Free";
    font-size: 1.4rem;
    font-weight: 900;
    content: '\f05a';
    color: #0f9fb3;
  }
}

::v-deep code {
  padding: 0;
}

::v-deep .language-inline-text {
  padding: 0.2rem 0.4rem;
}

</style>
