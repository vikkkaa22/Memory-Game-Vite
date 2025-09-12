import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

export default defineConfig(() => {
    return {
        plugins: [
            ViteImageOptimizer({
                png: {
                    // https://sharp.pixelplumbing.com/api-output#png
                    quality: 60,
                },
                jpeg: {
                    // https://sharp.pixelplumbing.com/api-output#jpeg
                    quality: 60,
                },
                jpg: {
                    // https://sharp.pixelplumbing.com/api-output#jpeg
                    quality: 60,
                },
                tiff: {
                    // https://sharp.pixelplumbing.com/api-output#tiff
                    quality: 60,
                },
                // gif does not support lossless compression
                // https://sharp.pixelplumbing.com/api-output#gif
                gif: {},
                webp: {
                    // https://sharp.pixelplumbing.com/api-output#webp
                    lossless: false,
                },
                avif: {
                    // https://sharp.pixelplumbing.com/api-output#avif
                    lossless: false,
                },
            }),
        ],
    };
});