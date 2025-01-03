import type { AstroI18nextConfig } from 'astro-i18next';

export default {
	defaultLocale: 'en',
	locales: ['en', 'pl'],
	i18nextServer: {
		// initImmediate: false,
		backend: {
			loadPath: './src/locales/{{lng}}.json',
		},
	},
} satisfies AstroI18nextConfig;
