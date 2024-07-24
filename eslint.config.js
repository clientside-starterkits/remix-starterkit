import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettiereslint from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier/recommended';
import reacteslint from 'eslint-plugin-react';

export default tseslint.config(
  {
    ignores: ['**/build/**'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  reacteslint.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn', // or "error"
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'react/react-in-jsx-scope': 'off',
    },
  },
  prettiereslint,
  prettier,
);
