import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

import pkg from "./package.json";

const config = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    json(),
    external(),
    nodeResolve({
      preferBuiltins: true
    }),
    typescript(),
    commonjs()
    // commonjs({
      // include: ["node_modules/**"],
      // namedExports: {
      //   'node_modules/react/index.js': [
      //     'cloneElement',
      //     'createContext',
      //     'Component',
      //     'createElement',
      //   ],
      //   'node_modules/react-dom/index.js': ['render', 'hydrate'],
      //   'node_modules/react-is/index.js': [
      //     'isElement',
      //     'isValidElementType',
      //     'ForwardRef',
      //     'Memo',
      //   ],
      // }
    // })
  ]
};

export default config