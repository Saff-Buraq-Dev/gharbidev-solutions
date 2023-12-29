module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "standard",
    "plugin:vue/vue3-essential"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        ".eslintrc.{js,cjs}"
      ],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "vue"
  ],
  rules: {
    // Enforce semicolons at the end of statements
    semi: ["error", "always"],

    // Enforce no space between function name and opening parenthesis
    "space-before-function-paren": ["error", "never"],

    // Enforce strings to be in double quotes
    quotes: ["error", "double"],

    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off"
  }
};
