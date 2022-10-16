module.exports = {
  rules: {
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    'consistent-return': 'off',
    'import/no-useless-path-segments': 'off',
    'no-unused-expressions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'no-await-in-loop': 'off',
    'no-constant-condition': ['warn', { checkLoops: false }],
  },
  plugins: ['react-hooks'],
  parserOptions: {
    // release in lerna
    // project: './packages/**/tsconfig.json',
  },
};
