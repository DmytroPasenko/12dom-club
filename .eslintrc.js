module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    project: "./tsconfig.json",
    sourceType: "module", // Allows for the use of imports
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    quotes: "off",
    "@typescript-eslint/quotes": [
      2,
      "backtick",
      {
        avoidEscape: true,
      },
    ],
    indent: ["error", 2, { SwitchCase: 1 }],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        semi: false,
        singleQuote: false,
        printWidth: 120,
      },
    ],
    "prettier/prettier": "error",
    // this assumes that something that exports one item now will always do so
    "import/prefer-default-export": "off",
    // airbnb considers any loop restricted syntax O_o
    "no-restricted-syntax": "off",
    "no-continue": "off",
    "no-await-in-loop": "off",
    // Until this is resolved:
    // https://github.com/typescript-eslint/typescript-eslint/issues/2077
    "@typescript-eslint/camelcase": "off",
    // "no-console": "off",
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "no-restricted-imports": [
      "error",
      {
        paths: ["lodash"],
      },
    ],
  },
};
