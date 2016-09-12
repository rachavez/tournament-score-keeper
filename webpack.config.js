module.export = {
    entry = './src/main.js',
    output = {
        path = './src',
        filename = 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './src',
        port: 8100
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
}