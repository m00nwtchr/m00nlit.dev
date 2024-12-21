// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://m00nlit.dev',
	integrations: [sitemap(), icon()],
	vite: {
		plugins: [tailwindcss()],
		css: {
			transformer: 'lightningcss',
		},
		build: {
			cssMinify: 'lightningcss',
		},
	},
	i18n: {
		locales: ['en', 'pl'],
		defaultLocale: 'en',
	},
	experimental: {
		svg: true,
	},
});
