const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/app.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dev-build',
        hot: true
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dev-build')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }, 
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ]
}