import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'any-app',
  },
  publicPath: isDev ? '/' : 'https://wukongyang.github.io/commander/',
});
