import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
   {
    languageOptions: {
      globals: {
        ...globals.node, // Добавляем поддержку Node.js
      },
      sourceType: "module", // Разрешаем `import/export`
    },
  },
  pluginJs.configs.recommended,
];
