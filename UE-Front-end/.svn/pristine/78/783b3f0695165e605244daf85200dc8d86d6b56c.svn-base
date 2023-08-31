import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from "vite-plugin-pages";
// import visualizer from 'rollup-plugin-visualizer';

import { resolve } from 'path';
// const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: true,
        // host: '10.219.103.78',
    },
    optimizeDeps: {
        include: ['moment', 'echarts']
    },
    build: {
        sourcemap: true,
    },
    plugins: [
        react(),
        // visualizer(),
        Pages({
            dirs: "src/pages",
            exclude: ['**/components', '**/**/components/*.tsx', '/home/components/*.*'],
        }),
    ],
    resolve: {
        alias: [
            { find: /^~/, replacement: '' },
            { find: '@', replacement: resolve(__dirname, 'src') }
        ]
    },
    css: {
        modules: {
            generateScopedName: '[name]_[local]_[hash:base64:5]',
            hashPrefix: 'prefix'
        },
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
})
