module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "plugin:vue/recommended",
    "plugin:gridsome/recommended",
    "plugin:prettier/recommended",
    "prettier/vue"
  ],
  plugins: ["prettier", "gridsome", "vue"],
  rules: {
    "vue/max-attributes-per-line": "off"
  }
};