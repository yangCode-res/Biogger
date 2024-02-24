// vite.config.js
import { createSvgIconsPlugin } from "file:///D:/vue/Biogger/node_modules/.store/vite-plugin-svg-icons@2.0.1/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { defineConfig } from "file:///D:/vue/Biogger/node_modules/.store/vite@5.0.12/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/vue/Biogger/node_modules/.store/@vitejs+plugin-vue@4.6.2/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import WindiCSS from "file:///D:/vue/Biogger/node_modules/.store/vite-plugin-windicss@1.9.3/node_modules/vite-plugin-windicss/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\vue\\Biogger";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/api/, "")
      }
    }
  },
  plugins: [
    vue(),
    WindiCSS(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]"
      /**
       * 自定义插入位置
       * @default: body-last
       */
      // inject?: 'body-last' | 'body-first'
      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      // customDomId: '__svg__icons__dom__',
    })
  ],
  resolve: {
    alias: {
      "~": path.resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx2dWVcXFxcQmlvZ2dlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcdnVlXFxcXEJpb2dnZXJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Z1ZS9CaW9nZ2VyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBXaW5kaUNTUyBmcm9tICd2aXRlLXBsdWdpbi13aW5kaWNzcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOntcbiAgICAgIHByb3h5OntcbiAgICAgICAgJy9hcGknOiB7XG4gICAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFdpbmRpQ1NTKCksY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgLy8gXHU2MzA3XHU1QjlBXHU5NzAwXHU4OTgxXHU3RjEzXHU1QjU4XHU3Njg0XHU1NkZFXHU2ODA3XHU2NTg3XHU0RUY2XHU1OTM5XG4gICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2ljb25zJyldLFxuICAgICAgLy8gXHU2MzA3XHU1QjlBc3ltYm9sSWRcdTY4M0NcdTVGMEZcbiAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxuXG4gICAgICAvKipcbiAgICAgICAqIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjNEMlx1NTE2NVx1NEY0RFx1N0Y2RVxuICAgICAgICogQGRlZmF1bHQ6IGJvZHktbGFzdFxuICAgICAgICovXG4gICAgICAvLyBpbmplY3Q/OiAnYm9keS1sYXN0JyB8ICdib2R5LWZpcnN0J1xuXG4gICAgICAvKipcbiAgICAgICAqIGN1c3RvbSBkb20gaWRcbiAgICAgICAqIEBkZWZhdWx0OiBfX3N2Z19faWNvbnNfX2RvbV9fXG4gICAgICAgKi9cbiAgICAgIC8vIGN1c3RvbURvbUlkOiAnX19zdmdfX2ljb25zX19kb21fXycsXG4gICAgfSksXG5cblxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICd+JzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcInNyY1wiKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLDRCQUE0QjtBQUNyQyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sVUFBVTtBQUxqQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFPO0FBQUEsSUFDSCxPQUFNO0FBQUEsTUFDSixRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUM5QztBQUFBLElBQ0Y7QUFBQSxFQUNKO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFBRSxTQUFTO0FBQUEsSUFBRSxxQkFBcUI7QUFBQTtBQUFBLE1BRXBDLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsV0FBVyxDQUFDO0FBQUE7QUFBQSxNQUVuRCxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWFaLENBQUM7QUFBQSxFQUdIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVSxLQUFLO0FBQUEsSUFDbkM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
