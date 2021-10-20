import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
import babel from '@rollup/plugin-babel';
import macrosPlugin from "vite-plugin-babel-macros";
// import envCompatible from 'vite-plugin-env-compatible';
import svgrPlugin from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

// https://cn.vitejs.dev/config/
export default () => {
  let rollupOptions = {
    output: {
      manualChunks(id: string[]) {
        // 输出所有包
        // if (id.includes('node_modules')) {
        //   return id.toString().split('node_modules/')[1].split('/')[0].toString();
        // }
        if (id.includes("mapbox-gl")) {
          return "vendor.mapbox-gl";
        }
        if (id.includes("framer-motion")) {
          return "vendor.framer-motion";
        }
        if (id.includes("node_modules")) {
          return "vendor";
        }
      },
    },
  };

  let optimizeDeps = {};

  let alias = [
    // 别名
    {
      find: "@",
      replacement: path.resolve(__dirname, "src"),
    },
    {
      find: /^~/,
      replacement: ""
    },
  ];

  let proxy = {};

  let define = {
    "process.env.APP_IS_LOCAL": true,
  };

  let esbuild = {
    jsxFactory: "jsx",
    jsxInject: "import { jsx } from '@emotion/react'",
  };
  return {
    base: "./", // index.html文件所在位置
    root: "./", // js导入的资源路径，src
    // serve: 'production', // 环境，默认serve 时默认 'development'，build 时默认 'production'，遵循声明大于约定规范
    resolve: {
      alias,
    },
    define,
    server: {
      host: "0.0.0.0",
      port: 9000,
      // 代理
      proxy,
    },
    build: {
      minify: "terser", // 是否进行压缩, boolean | 'terser' | 'esbuild', 默认使用terser
      manifest: false, // 是否产出 manifest.json
      sourcemap: false, // 是否产出 sourcemap.json
      outDir: "dist", // 产出目录
      rollupOptions,
    },
    esbuild,
    optimizeDeps,
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
      },
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        }
      }
    },
    plugins: [
      // 和 webpack 混用
      // envCompatible({
      //   prefix: 'REACT_APP_',
      //   mountedPath: 'process.env',
      // }),
      babel({
        babelHelpers: 'bundled',
        include: ['./src/**'],
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'],
        plugins: ["transform-remove-console"]
      }),
      macrosPlugin(),
      react(),
      reactRefresh(),
      svgrPlugin(),
    ],
  };
};
