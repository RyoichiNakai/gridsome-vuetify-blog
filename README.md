# Gridsomeにて個人ブログの開発

## プレビュー

- トップページが完成次第載せる

## 構成

- バックエンド：[Gridsome(GraphQL)](https://gridsome.org/)
- フロントエンド：Vue.js
  - UIフレームワーク；[Vuetify](https://v2.vuetifyjs.com/ja/)
- ホストティング：Netlify

## パッケージ管理

- [package.json (一部省略)](https://github.com/RyoichiNakai/gridsome-vuetify-blog/blob/main/package.json)

```json:package.json
{
  "dependencies": {
    "@gridsome/remark-prismjs": "^0.5.0",
    "@gridsome/source-filesystem": "^0.6.2",
    "@gridsome/transformer-remark": "^0.6.4",
    "gridsome": "^0.7.0",
    "vuetify": "^2.5.0"
  },
  "devDependencies": {
    "@fortawesome/fontawesome-free": "^5.15.3",
    "@gridsome/plugin-sitemap": "^0.4.0",
    "babel-eslint": "^10.1.0",
    "css-loader": "^5.2.4",
    "eslint": "^7.26.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-gridsome": "^1.6.2",
    "eslint-plugin-prettier": "^3.4.0",
    "eslint-plugin-vue": "^7.9.0",
    "prettier": "^2.2.1",
    "sass": "^1.23.3",
    "sass-loader": "^8.0.0",
    "vue-eslint-parser": "^7.6.0",
    "webpack-node-externals": "^3.0.0"
  }
}
```

- packageのインストール

```bash
yarn add (インストールしたいパッケージ名)
```

## URL構成

### ルーティングテーブル(現在)

|  HTTP Verb  |  URL  |  クエリ説明  |
| ---- | ---- | ---- |
|  GET  |  /  |  トップページ  |
|  GET  |  /about  |  自己紹介  |
|  GET  |  /articles |  投稿記事一覧  |
|  GET  |  /articles/:id  |  投稿記事詳細  |
|  GET  |  /tags |  タグ一覧  |
|  GET  |  /tags/:id  |  タグ詳細  |

### ルーティングテーブル(目標)

記事を投稿していき、随時更新

### ルーティング設定

- [gridsome.config.js](https://github.com/RyoichiNakai/gridsome-vuetify-blog/blob/main/gridsome.config.js)

```javascript:gridsome.config.js
module.exports = {
  plugins: [
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
        }
      }
    }
  ],
  templates: {
    Tag: '/tags/:id'
  }
}
```

## GraphQL構成

後日記述

## 開発環境

### ローカルホスト起動

```bash
gridsome develop
```

### 静的ファイル出力

```bash
gridsome build
```

## インストール

```bash
git clone https://github.com/RyoichiNakai/gridsome-vuetify-blog
yarn install
yarn develop
```

※ ローカルホストの起動は、`yarn develop`もしくは`gridsome develop`のどちらでも可能
