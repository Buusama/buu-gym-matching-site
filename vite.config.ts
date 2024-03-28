import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: "window",
    "process.env": {},
  },
  resolve: {
    alias: [
      { find: "components", replacement: path.resolve(__dirname, "src/components") },
      { find: "containers", replacement: path.resolve(__dirname, "src/containers") },
      { find: "shared", replacement: path.resolve(__dirname, "src/shared") },
      { find: "hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "routers", replacement: path.resolve(__dirname, "src/routers") },
      { find: "utils", replacement: path.resolve(__dirname, "src/utils") },
      { find: "assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "images", replacement: path.resolve(__dirname, "src/assets/images") },
      { find: "fonts", replacement: path.resolve(__dirname, "src/assets/fonts") },
      { find: "contains", replacement: path.resolve(__dirname, "src/contains") },
      { find: "pages", replacement: path.resolve(__dirname, "src/pages") },
    ]
  },

})
