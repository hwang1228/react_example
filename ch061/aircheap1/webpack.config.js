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
       new WebpackBrowserPlugin(),
       new webpack.HotModuleReplacementPlugin()
    ],
    devServer : {
        contentBase : './public',
        inline:true,
        historyApiFallback : true,
        port : 8888
    }
}