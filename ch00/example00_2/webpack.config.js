var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackBrowserPlugin = require('webpack-browser-plugin');
var webpack = require('webpack');

module.exports = {
    devtool : 'source-map', 
    entry: __dirname + '/app/main.js', 
    output: { 
        path: __dirname + '/public', 
        filename: 'bundle.js' 
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
                use: [
                    { loader: "style-loader" },
                    { loader: 'css-loader', options: { modules: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                          plugins: (loader) => [
                            require('autoprefixer')(),
                            require('precss')()
                          ]
                        }
                    }
                ]
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
       new webpack.BannerPlugin("Date : 2017.09.02"),
       new webpack.BannerPlugin("Author : Stephen Won"),
       new webpack.BannerPlugin("Copyright OpenSG inc."),
       new webpack.HotModuleReplacementPlugin()       
    ],
    devServer : {
        contentBase : './public',
        inline:true, 
        historyApiFallback :true,
        port : 7777,
        hot : true
    }
 };
 
