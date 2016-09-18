module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './src',
        port: 8101
    },
    module: {
        loaders: [
            {   test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel' 
            },
            {   test: /\.css$/, 
                loader: "style-loader!css-loader" 
            },
            {   test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: 'file'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',

            }
        ]
    }
}