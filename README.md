# Gridsomeにて個人ブログの開発

## プレビュー

- トップページが完成次第載せる

## 構成

- Gridsome
- GraphQL
- Vuetify
- Netlify

## Features

- [package.json (一部省略)](https://github.com/RyoichiNakai/gridsome-vuetify-blog/blob/main/package.json)

```json:package.json
{
  "dependencies": {
    "@gridsome/remark-prismjs": "^0.5.0",
    "@gridsome/vue-remark": "^0.2.6",
    "gridsome": "^0.7.0"
  },
  "devDependencies": {
    "babel-eslint": "^10.1.0",
    "eslint": "^7.26.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-gridsome": "^1.6.2",
    "eslint-plugin-prettier": "^3.4.0",
    "eslint-plugin-vue": "^7.9.0",
    "prettier": "^2.2.1",
    "vue-eslint-parser": "^7.6.0"
  }
}
```

- packageのインストール

```bash
yarn add (インストールしたいパッケージ名)
```

## URL構成

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
