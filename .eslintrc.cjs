module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    Bun: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'max-len': [
      'warn',
      {
        code: 80,
      },
    ],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
