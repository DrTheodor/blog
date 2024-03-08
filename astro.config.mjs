import { defineConfig } from 'astro/config'
import { remarkReadingTime } from './src/utils/readTime.ts'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	site: 'https://theo.is-a.dev', // Write here your website url
	base: '/blog/',
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				experimentalThemes: {
					light: 'vitesse-light',
					dark: 'material-theme-palenight',
				  },
				wrap: true
			},
			drafts: true
		}),
		sitemap(),
		tailwind()
	]
})
