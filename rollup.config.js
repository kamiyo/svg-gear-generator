import typescript from 'rollup-plugin-ts';
import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            typescript: require('typescript'),
            tsconfig: './src/tsconfig.json'
        }),
    ],
}