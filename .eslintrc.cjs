{
  "env": {
    "browser": true,
    "jest": true,
    "node": true
  },
  "extends": ["plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "ignorePatterns": [
    "docs/*",
    "util(ities)?/*",
    "dist/",
    "*.d.ts"
  ],
  "plugins": [
    "@typescript-eslint/eslint-plugin",
    "eslint-plugin-tsdoc",
    "import"
  ],
  "root": true
}
