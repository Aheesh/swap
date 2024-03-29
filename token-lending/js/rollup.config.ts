import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { RollupOptions } from 'rollup';
import pkg from './package.json' assert { type: 'json' };

const config: RollupOptions = {
    input: 'src/index.ts',
    output: [
        { file: pkg.main, format: 'cjs', sourcemap: true },
        { file: pkg.module, format: 'es', sourcemap: true },
    ],
    external: ['@solana/spl-token', '@solana/web3.js', 'assert', 'buffer', 'fs', 'path'],
    watch: {
        include: 'src/**',
    },
    plugins: [typescript(), commonjs(), nodeResolve()],
};
export default config;
