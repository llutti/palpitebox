import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';


const eslintConfig = defineConfig([
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    settings: {
      react: {
        version: '19',
      },
    },
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      ...nextVitals,
      ...nextTs,
    ],
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

      '@typescript-eslint/prefer-for-of': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-indexed-object-style': 'off', // ['warn', 'index-signature'],

      'no-cond-assign': ['error', 'always'],
    },
  }
]);

export default eslintConfig;
