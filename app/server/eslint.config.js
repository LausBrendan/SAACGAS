export default [
  {
    // Apply to all files
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        process: "readonly",
        TextDecoder: "readonly",
        global: "readonly",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off", // allow console.log
    },
  },

  // ESLint recommended rules
  {
    ignores: ["node_modules/**"],
    rules: {},
    languageOptions: {
      parserOptions: {},
    },
    // enable eslint:recommended
    linterOptions: {},
    settings: {},
  },

  // Overrides for test files
  {
    files: ["*.test.js", "*.spec.js"],
    rules: {
      "no-unused-vars": "off",
    },
  },
];