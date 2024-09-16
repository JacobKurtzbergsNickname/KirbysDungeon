import tsParser from "@typescript-eslint/parser"; // Import the TypeScript parser

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    rules: {
      quotes: ["error", "double"], // Enforce double quotes
    },
  },
];