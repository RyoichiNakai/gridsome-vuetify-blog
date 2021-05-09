// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'elmo-dev',
  templates: {
    Tag: "/tags/:id" // タグを使用した時のテンプレートファイル名とURLPath
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post', // GraphQKスキーマタイプ
        baseDir: './content/blog', // Markdownファイルの配置場所
        pathPrefix: '/', // URLPathのPrefix
        template: './src/templates/Post.vue', // テンプレートファイル名
        refs: {
          tags: { // タグを使用する
            typeName: 'Tag',
            create: true // tagsからタグのコレクションエオ生成
          }
        }
      },
      plugins: [
        `@gridsome/remark-prismjs`,
      ],
    }

  ]
}
