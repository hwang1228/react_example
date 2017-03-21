var webpack = require('webpack');

module.exports = {
  devtool : 'source-map',
  entry: [
    './index.js'
  ],
  output: {
    path: '../../../../../build/resources/main/static/scripts/',
    filename: 'bundle.js'
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
       new WebpackBrowserPlugin()
    ],
    devServer : {
        contentBase : './public',
        inline:true,
        historyApiFallback : true,
        port : 7777
    }
};
