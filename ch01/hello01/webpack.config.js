module.exports = {
    entry :  __dirname + '/source/App.js',
    output : {
        path : __dirname + '/public',
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            { test:/\.js$/, exclude:/node_modules/, loader:'babel-loader' },
        ]
    },
    devServer : {
        contentBase : __dirname + '/public',
        historyApiFallback :true,
        inline:true,
        port : 7777
    }
}