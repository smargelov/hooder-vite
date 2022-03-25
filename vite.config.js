import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        createSvgIconsPlugin({
            // Specify the icon folder to be cached
            iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
            // Specify symbolId format
            symbolId: 'icon-[dir]-[name]'
        })
    ],
    css: {
        preprocessorOptions: {
            sass: {
                additionalData: `@import "./src/assets/sass/main"`
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
})
