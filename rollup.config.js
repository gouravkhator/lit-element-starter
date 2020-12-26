import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/components/main.js',
    output: {
        file: 'build/main.js',
        format: 'es',
        sourcemap: false
    },
    plugins: [
        resolve()
    ]
};
