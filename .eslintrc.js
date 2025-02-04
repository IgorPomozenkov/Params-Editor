module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "sonarjs", "@typescript-eslint"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },

  rules: {
    "no-console": "error",
    "prettier/prettier": "warn",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/display-name": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/quotes": [
      "warn",
      "single",
      {
        avoidEscape: true,
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // 'react/prop-types': 'off',
    "no-param-reassign": "warn",
    "no-underscore-dangle": "off",
    "import/no-unresolved": "off",
    "react/react-in-jsx-scope": "warn",
    "react/jsx-props-no-spreading": "warn",

    "sonarjs/cognitive-complexity": "warn",
    "sonarjs/elseif-without-else": "warn",
    "sonarjs/max-switch-cases": "warn",
    "sonarjs/no-all-duplicated-branches": "warn",
    "sonarjs/no-collapsible-if": "warn",
    "sonarjs/no-collection-size-mischeck": "warn",
    "sonarjs/no-duplicate-string": "warn",
    "sonarjs/no-duplicated-branches": "warn",
    "sonarjs/no-element-overwrite": "warn",
    "sonarjs/no-empty-collection": "warn",
    "sonarjs/no-extra-arguments": "warn",
    "sonarjs/no-gratuitous-expressions": "warn",
    "sonarjs/no-identical-conditions": "warn",
    "sonarjs/no-identical-expressions": "warn",
    "sonarjs/no-identical-functions": "warn",
    "sonarjs/no-ignored-return": "warn",
    "sonarjs/no-inverted-boolean-check": "warn",
    "sonarjs/no-nested-switch": "warn",
    "sonarjs/no-nested-template-literals": "warn",
    "sonarjs/no-one-iteration-loop": "warn",
    "sonarjs/no-redundant-boolean": "warn",
    "sonarjs/no-redundant-jump": "warn",
    "sonarjs/no-same-line-conditional": "warn",
    "sonarjs/no-small-switch": "warn",
    "sonarjs/no-unused-collection": "warn",
    "sonarjs/no-use-of-empty-return-value": "warn",
    "sonarjs/no-useless-catch": "warn",
    "sonarjs/non-existent-operator": "warn",
    "sonarjs/prefer-immediate-return": "warn",
    "sonarjs/prefer-object-literal": "warn",
    "sonarjs/prefer-single-boolean-return": "warn",
    "sonarjs/prefer-while": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
