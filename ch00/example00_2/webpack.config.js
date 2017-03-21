var WebpackBrowserPlugin = require('webpack-browser-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    devtool : 'source-map',
    entry : __dirname + '/app/main.js',
    output : {
        path : __dirname + '/public',
        filename : 'bundle.js'
    },
    module : {
        rules : [
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
       new HtmlWebpackPlugin({
           title : 'webpack 샘플 페이지', 
           template : __dirname + '/app/index.ejs', 
           filename : 'index.html',
           mystring : '<div id="key1">Hello</div>'
       }),
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