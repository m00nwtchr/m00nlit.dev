// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';
import { paraglideVitePlugin } from '@inlang/paraglide-js';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
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
		routing: {
			prefixDefaultLocale: false,
		},
	},
	experimental: {
		fonts: [
			{
				provider: fontProviders.fontsource(),
				name: 'Inter',
				cssVariable: '--font-inter',
				fallbacks: ['sans-serif'],
			},
			{
				provider: fontProviders.fontsource(),
				name: 'Crimson Pro',
				cssVariable: '--font-crimson-pro',
				fallbacks: ['serif'],
			},
		],
	},
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
