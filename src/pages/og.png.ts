import fs from 'fs/promises';
import satori from 'satori';
import sharp from 'sharp';
import { html } from 'satori-html';
import type { APIRoute } from 'astro';

async function SVG(component: string) {
	return await satori(html(component), {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: 'Inter',
				data: await fs.readFile('./src/assets/Inter-Regular.ttf'),
				weight: 400,
			},
		],
	});
}

async function PNG(component: string) {
	return await sharp(Buffer.from(await SVG(component)))
		.png()
		.toBuffer();
}

export const GET: APIRoute = async function get() {
	const png = await PNG(`<div tw="flex flex-col w-full h-full bg-white">
    <h1 tw="text-6xl text-center">Hello World</h1>
  </div>`);
	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
};
