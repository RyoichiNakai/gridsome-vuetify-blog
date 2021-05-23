// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'elmo-dev',
  icon: './assets/site-meta/favicon.png',
  plugins: [
    // @todo;サイトマップの変更
    // {
    //   use: '@gridsome/plugin-sitemap',
    //   options: {
    //     cacheTime: 600000,
    //     exclude: ['/exclude-me'],
    //     config: {
    //       '/blog/*': {
    //         changefreq: 'weekly',
    //         priority: 0.5
    //       },
    //       '/about': {
    //         changefreq: 'monthly',
    //         priority: 0.7
    //       },
    //       '/term': {
    //         changefreq: 'monthly',
    //         priority: 0.7
    //       }
    //     }
    //   }
    // },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Article', // GraphQKスキーマタイプ
        baseDir: './content/article', // Markdownファイルの配置場所
        pathPrefix: '/articles',
        path: '*.md',
        refs: {
          tags: { // タグを使用する
            typeName: 'Tag',
            create: true // tagsからタグのコレクション名を生成
          }
        },
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'About', // GraphQKスキーマタイプ
        baseDir: './content/about', // Markdownファイルの配置場所
        pathPrefix: '/',
        path: '*.md',
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        ['gridsome-plugin-remark-prismjs-all', {
          showLineNumbers: true
        }]
      ]
    }
  },
  templates: {
    Tag: '/tags/:id'
  }
}
