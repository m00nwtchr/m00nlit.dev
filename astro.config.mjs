// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
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
});
