var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + '/app/main.js', 
    output: { 
        path: __dirname + '/public', 
        filename: '[name]-[hash].js' 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader?modules",
                  use: "css-loader?modules"
                })
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : 'webpack 샘플 페이지', 
            template : __dirname + '/app/index.ejs', 
            filename : 'index.html',
            mystring : '<div id="key1">Hello</div>'       
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.BannerPlugin("Date : 2017.09.02"),
        new webpack.BannerPlugin("Author : Stephen Won"),
        new webpack.BannerPlugin("Copyright OpenSG inc."),
        new ExtractTextPlugin("[name]-[hash].css"),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
 };
 
