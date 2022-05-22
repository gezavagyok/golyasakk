module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'airbnb',
  ],
  rules: {
    'no-anonymous-exports-page-templates': 'warn',
    'limited-exports-page-templates': 'warn',
  },
};
