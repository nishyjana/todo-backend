module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  "extends": [
    "some-other-config-you-use",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/flowtype",
    "prettier/prettier",
    "prettier/react",
    "prettier/standard",
    "prettier/unicorn",
    "prettier/vue"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "beforeBlockComment": true,
    "afterBlockComment": true,
    "beforeLineComment": true,
    "afterLineComment": true,
    "allowBlockStart": true,
    "allowBlockEnd": true,
    "allowObjectStart": true,
    "allowObjectEnd": true,
    "allowArrayStart": true,
    "allowArrayEnd": true,
    "max-len": ["error", {"code": 80, "ignoreUrls": true}]
  },
  
};
