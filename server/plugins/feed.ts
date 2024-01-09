import type { Feed, NitroCtx } from 'nuxt-module-feed'
import fg from 'fast-glob'
import fs from 'fs-extra'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const DOMAIN = 'localhost:3000/p'
const AUTHOR = {
  name: 'Lowies-ke',
  email: 'huangcache1118@gmail.com',
  link: DOMAIN,
}
const markdown = MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('feed:generate', async ({ feed, options }: NitroCtx) => {
    switch (options.path) {
      case '/feed.xml': {
        await createTestFeed(feed)
        break
      }
    }
  })

  async function createTestFeed(feed: Feed) {
    feed.options = {
      title: 'Lowies-ke',
      description: 'Lowies-ke\'s Blog',
      id: 'https://antfu.me/',
      link: 'https://antfu.me/',
      copyright: 'CC BY-NC-SA 4.0 2022 © Lowies-ke',
      generate: null,
    }

    const files = await fg('content/*/*.md')

    const posts: any[] = (
      await Promise.all(
        files.filter(i => !i.includes('404' || 'me'))
          .map(async (i) => {
            const raw = await fs.readFile(i, 'utf-8')

            const { data, content } = matter(raw)

            const html = markdown.render(content)
              .replace('src="/', `src="${DOMAIN}/`)

            if (data.image?.startsWith('/'))
              data.image = DOMAIN + data.image

            return {
              ...data,
              date: new Date(data.date),
              content: html,
              author: [AUTHOR],
              link: DOMAIN + i.replace(/^content(.+)\.md$/, '$1').toLocaleLowerCase(),
            }
          }),
      ))
      .filter(Boolean)

    posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

    posts.forEach((post) => {
      feed.addItem(post)
    })
  }
})
