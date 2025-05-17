// @ts-check
import { defineConfig } from 'astro/config';
import { paraglideVitePlugin } from '@inlang/paraglide-js';
import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://m00nlit.dev',
	integrations: [sitemap(), icon()],
	vite: {
		plugins: [
			tailwindcss(),
			paraglideVitePlugin({
				project: './project.inlang',
				outdir: './src/paraglide',
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
