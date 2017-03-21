var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool : 'source-map',
    entry : __dirname + '/app/main.js',
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ "css-loader?modules", "postcss-loader" ]
                })
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
       new webpack.BannerPlugin("Date : 2016.09.02"),
       new webpack.BannerPlugin("Author : Stephen Won"),
       new webpack.BannerPlugin("Copyright OpenSG inc."),
       new webpack.HotModuleReplacementPlugin(),
       new ExtractTextPlugin("[name]-[hash].css"),
       new webpack.optimize.OccurrenceOrderPlugin(true),
       new webpack.optimize.UglifyJsPlugin()
    ],
    devServer : {
        contentBase : './public',
        inline:true,
        historyApiFallback : true,
        port : 7777
    }
}