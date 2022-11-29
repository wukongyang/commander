// rollup.watch.js
const typescript =require('typescript')
const json =require('@rollup/plugin-json')
const{terser}=require('rollup-plugin-terser')
const typescript2=require('rollup-plugin-typescript2')
const babel =require("rollup-plugin-babel")
const rollup = require('rollup');

const watchOptions = {
    input: './src/index.ts',
    output: {
        file: './test/lib/index.js',
        format: 'cjs',
        banner: '#!/usr/bin/env node',
    },
    plugins: [
        typescript2({
            exclude: 'node_modules/**',
            useTsconfigDeclarationDir: true,
            typescript,
            tsconfig: './tsconfig.json'
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        json(),
        terser()
    ]
}
const watcher = rollup.watch(watchOptions);

console.log('Rollup is watching for changes...');

watcher.on('event', event => {
    switch (event.code) {
        case 'START':
            console.info('Rebuilding...');
            break;
        case 'BUNDLE_START':
            console.info('Bundling...');
            break;
        case 'BUNDLE_END':
            console.info('Bundled!');
            break;
        case 'END':
            console.info('Done!');
            break;
        case 'ERROR':
        case 'FATAL':
            console.error("Rollup error: ", event);
    }
});

process.on('exit', () => {
    // 停止监听
    watcher.close();
});