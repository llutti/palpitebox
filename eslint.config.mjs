import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat(
  {
    baseDirectory: import.meta.dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
  });


const eslintConfig = [
  ...compat.extends('next', 'next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'react/display-name': 'off',

      semi: 'error',
      'no-self-assign': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',

      '@typescript-eslint/no-unused-expressions': ['warn', {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      }],

      quotes: ['warn', 'single', { avoidEscape: true }],

      'new-parens': 'warn',
      eqeqeq: ['error', 'always'],

      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'off',

      //       'no-unused-vars': 'off',

      '@typescript-eslint/prefer-for-of': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-indexed-object-style': 'off', // ['warn', 'index-signature'],

      'no-cond-assign': ['error', 'always'],
    },
  }
];

export default eslintConfig;
