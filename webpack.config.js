module.exports = {
    mode: 'production',
    entry: './js/vue.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions:['*', '.js']
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    }
};