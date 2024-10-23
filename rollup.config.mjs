import path from "path";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import { dts } from "rollup-plugin-dts"; // 引入 dts 插件
import { visualizer } from "rollup-plugin-visualizer";

const getPath = (_path) => path.resolve(__dirname, _path);

export default {
  input: getPath("src/index.ts"),
  plugins: [
    resolve({
      browser: true, // 确保浏览器环境下加载 browser 字段指定的模块
    }),
    commonjs({
      namedExports: {
        "node_modules/konva/konva.js": ["canvas"],
      },
    }),
    terser({
      mangle: {
        toplevel: true, // 混淆顶层作用域的变量名和函数名
      },
    }),
    typescript({
      tsconfig: getPath("./tsconfig.json"),
      extensions: ["ts"],
      tsconfigOverride: {
        compilerOptions: {
          module: "ES2015",
        },
      },
      declaration: true,
      declarationDir: "dist/types/",
    }),
    // visualizer({
    //   filename: "stats.html",
    //   open: true,
    // }),
  ],
  // external: ['canvas'], // 将未解析的依赖标记为外部依赖
  external: ["canvas" , "lunar-typescript"], // 将 canvas 模块排除在外
  output: [
    {
      file: "dist/index.esm.js", // 输出 ESM 模块
      format: "esm",
      sourcemap: false, // 生成 sourcemap 方便调试
    },
  ],
};

// // 单独处理类型定义文件输出
// export const dtsConfig = {
//   input: "dist/types/index.d.ts", // 确保使用正确的类型定义文件路径
//   output: {
//     file: "dist/index.d.ts", // 输出 .d.ts 类型定义
//     format: "es",
//   },
//   plugins: [
//     dts(),
//     visualizer({
//       filename: "stats.html",
//       open: true,
//     }),
//   ],
// };
