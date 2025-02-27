// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt' // 自动导入 Element Plus
  ],
  css: ['~/assets/scss/main.scss'],
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://sunsunblog.top', // 目标服务器地址
          changeOrigin: true, // 允许跨域
        },
      },
    },
  },
})
