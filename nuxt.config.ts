// https://nuxt.com/docs/api/configuration/nuxt-config
import { siteConfig } from './site.config'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/stylelint-module',
    'nuxt-module-feed',
  ],
  app: {
    rootId: 'nuxt-root',
    head: {
      meta: [
        { name: 'description', content: siteConfig.description },
        { name: 'author', content: siteConfig.author },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { charset: 'UTF-8' },
        { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
      noscript: [
        { children: 'JavaScript is required' },
      ],
      htmlAttrs: {
        lang: siteConfig.lang,
      },
      bodyAttrs: {
        class: 'font-sans',
      },
    },
  },
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'vitesse-light',
        // Theme used if `html.dark`
        dark: 'vitesse-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
      preload: [
        'c',
        'cpp',
        'java',
      ],

    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/styles/global.scss',
    '@/assets/styles/theme.css',
    '@/assets/styles/transition.css',
    '@/assets/styles/markdown.scss',
  ],
  stylelint: {
    /* module options */
    lintOnStart: false,
  },
  devtools: {
    enabled: true,
  },
  feed: {
    sources: [
      {
        path: '/feed.xml', // The route to your feed.
        type: 'rss2', // Can be: rss2, atom1, json1
        cacheTime: 60 * 15, // How long should the feed be cached
      },
    ],
  },
})
