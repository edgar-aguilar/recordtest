// eslint.config.mjs
import eslintPluginReact from 'eslint-plugin-react';

export default [
  {
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
