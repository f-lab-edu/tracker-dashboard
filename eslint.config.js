// import js from '@eslint/js';
// import {
//   default as eslintConfigPrettier,
//   default as prettier,
// } from 'eslint-config-prettier';
// import eslintPluginPrettier from 'eslint-plugin-prettier';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import globals from 'globals';
// import tseslint from 'typescript-eslint';
// import eslintPluginReact from 'eslint-plugin-react';

// export default tseslint.config(
//   { ignores: ['dist'] },
//   {
//     extends: [
//       js.configs.recommended,
//       ...tseslint.configs.recommended,
//       prettier,
//       'plugin:prettier/recommended',
//       'plugin:react/recommended',
//       eslintConfigPrettier,
//     ],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//       react: eslintPluginReact,
//       prettier: eslintPluginPrettier,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       ...eslintPluginReact.configs.recommended.rules,
//       ...tseslint.configs.recommended.rules,
//       ...eslintConfigPrettier.rules,
//       'prettier/prettier': 'error',
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//   }
// );
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      sourceType: 'module',
    },
    plugins: {
      react: eslintPluginReact,
      '@typescript-eslint': tseslint,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'prettier/prettier': ['error', { semi: true }],
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
