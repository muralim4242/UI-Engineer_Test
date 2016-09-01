var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'bootstrap-loader',
        './app/app.js'
    ],
    externals: {
        jquery: 'jQuery'
    },
    module: {
   loaders: [
     // the url-loader uses DataUrls.
     // the file-loader emits files.
     { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
     { test: /\.ttf$/,    loader: "file-loader" },
     { test: /\.eot$/,    loader: "file-loader" },
     { test: /\.svg$/,    loader: "file-loader" }
   ]
 },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: ['node_modules', './app', './app/controllers','./app/views']
        alias: {
            app: "app",
            login:"app/views/login"
        },
        extensions: ['', '.js', '.jsx','html']
    },
    devtool: 'cheap-module-eval-source-map'
};
