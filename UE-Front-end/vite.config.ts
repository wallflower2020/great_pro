import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from "vite-plugin-pages";
// import path from 'path';
// import visualizer from 'rollup-plugin-visualizer';

import { resolve } from 'path';
// const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    base: '/great_pro/',
    server: {
        open: true,
        host: '10.145.72.168',
    },
    optimizeDeps: {
        include: ['moment', 'echarts']
    },
    build: {
        sourcemap: true,
        outDir: 'docs',
        
        
        // rollupOptions: {
        //     input: path.resolve(__dirname, "../docs/index.html"),
        // },
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
