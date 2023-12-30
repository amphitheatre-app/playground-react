const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const babel = require("@rollup/plugin-babel");
const postcss = require("rollup-plugin-postcss");

const pkg = require("./package.json");

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
    typescript({ tsconfig: "./tsconfig.json" }),
  ],
};
