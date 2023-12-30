// rollup.config.js
// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import babel from 'rollup-plugin-babel';
// import typescript from "rollup/plugin-typescript";
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
// const replace = require("@rollup/plugin-replace");
const typescript = require("@rollup/plugin-typescript");
const babel = require("@rollup/plugin-babel");
const postcss = require("rollup-plugin-postcss");
// const filesize = require("rollup-plugin-filesize");

const pkg = require("./package.json");

const basePlugins = [commonjs({ requireReturnsDefault: "preferred" })];

const external = [
  "react/jsx-runtime",
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.devDependencies),
  ...Object.keys(pkg.peerDependencies),
];

const baseConfig = { input: "src/index.ts", external };

module.exports = {
  ...baseConfig,
  input: "src/index.tsx", // 入口文件
  output: [
    {
      dir: "dist",
      exports: "named",
      format: "cjs",
      inlineDynamicImports: true,
      interop: "auto",
    },
  ],
  plugins: [
    resolve(), // 解析外部依赖
    commonjs({ requireReturnsDefault: true }), // 将 CommonJS 转换为 ES6
    postcss({
      extract: true, // 将 CSS 提取到独立文件
    }),
    babel({
      exclude: "node_modules/**",
    }),
    // babel({ exclude: 'node_modules/**' }), // 使用 Babel 转译
    typescript({ tsconfig: "./tsconfig.json" }),
    // filesize(),
  ],
};
