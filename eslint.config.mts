import antfu from '@antfu/eslint-config';

export default antfu({
  react: true,
  typescript: true,
  stylistic: {
    semi: true,
    quotes: 'single',
  },
  ignores: [
    './src/components/',
  ],
});
