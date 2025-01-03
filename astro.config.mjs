// @ts-check
import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';
import astroI18nextReloader from './astro-i18next-reloader';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://m00nlit.dev',
	integrations: [astroI18next(), astroI18nextReloader(), , sitemap(), icon()],
	vite: {
		plugins: [tailwindcss()],
		css: {
			transformer: 'lightningcss',
		},
		build: {
			cssMinify: 'lightningcss',
		},
	},
	// i18n: {
	// 	locales: ['en', 'pl'],
	// 	defaultLocale: 'en',
	// },
	experimental: {
		svg: true,
	},
});
