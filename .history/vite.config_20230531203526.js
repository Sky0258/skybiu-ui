import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // 解决发布包之后安装使用出错，有一个 vue 的依赖不需要打包上去
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    },
    lib: {
      entry: './packages/index.js',
      name: 'skybiu-ui'
    }
  }
})

