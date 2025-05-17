// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';
import { paraglideVitePlugin } from '@inlang/paraglide-js';

export default defineConfig({
	site: 'https://m00nlit.dev',
	integrations: [sitemap(), icon()],
	vite: {
		plugins: [
			tailwindcss(),
			paraglideVitePlugin({
				project: './project.inlang',
				outdir: './src/paraglide',
				strategy: ['url', 'baseLocale'],
			}),
		],
		css: {
			transformer: 'lightningcss',
		},
		build: {
			cssMinify: 'lightningcss',
		},
		server: {
			watch: {
				ignored: /(^|[\/\\])\../, // Ignore dotfiles
			},
		},
	},
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'pl'],
	},
	// output: 'server',
	// adapter: node({ mode: 'standalone' }),
});
