var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : __dirname + '/source/App.js',
    output : {
        path : __dirname + '/public',
        filename : '[name]-[hash].js'
    },
    module : {
        loaders : [
            { test:/\.json$/, loader : 'json-loader' },
            { test:/\.js$/, exclude:/node_modules/, loader:'babel-loader' },
            {
                test: /\.css$/,
                use: [
                    'style-loader?modules',
                    'css-loader?modules',
                    {
                        loader : 'postcss-loader',
                        options : {
                            plugins : function() {
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins : [
       new webpack.BannerPlugin("Date : 2016.09.02"),
       new webpack.BannerPlugin("Author : Stephen Won"),
       new webpack.BannerPlugin("Copyright OpenSG inc."),
       new ExtractTextPlugin("[name]-[hash].css"),
       new webpack.optimize.OccurrenceOrderPlugin(true),
       new webpack.optimize.UglifyJsPlugin()
    ]
}