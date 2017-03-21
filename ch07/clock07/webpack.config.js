var WebpackBrowserPlugin = require('webpack-browser-plugin');
var webpack = require('webpack');

module.exports = {
    devtool : 'source-map',
    entry : __dirname + '/app/App.js',
    output : {
        path : __dirname + '/public',
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            { test:/\.js$/, exclude:/node_modules/, loader:'babel-loader' }
        ]
    },
    plugins : [
       new WebpackBrowserPlugin(),
       new webpack.BannerPlugin("Date : 2016.09.02"),
       new webpack.BannerPlugin("Author : Stephen Won"),
       new webpack.BannerPlugin("Copyright OpenSG inc."),
       new webpack.HotModuleReplacementPlugin()
    ],
    devServer : {
        contentBase : './public',
        inline:true,
        historyApiFallback : true,
        port : 7777
    }
}