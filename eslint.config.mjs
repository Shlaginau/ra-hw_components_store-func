import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    settings: {
      react: {
        version: "detect" // Automatically detect the react version
      }
    }
  },
  {
    ignores: ["build/**", "node_modules/**", "dist/**", "coverage/**"]
  }
];