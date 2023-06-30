import { defineConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';
export default defineConfig({
  themeConfig: {
    name: 'any-app',
  },
   // hash: true,
  history: {
    type: 'hash',
  },
  publicPath: isDev ? '/' : 'https://wukongyang.github.io/commander/',
});
