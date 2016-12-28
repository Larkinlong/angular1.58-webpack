/*
 * Created by pg on 16/6/30.
 */
var path = require('path'); //读取访问系统文件夹
var webpack = require('webpack');
// var jade = require('jade');

// 编译打包的css代码正常情况下会内嵌在目标html文件里面,但是如果用了extract-text-webpack-plugin 这个插件之后会先编译并打包所有的CSS代码。
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //打包css
var HtmlWebpackPlugin = require('html-webpack-plugin'); //打包输出 html文件
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname); // 可以使用__dirname变量获取当前模块文件所在目录的完整绝对路径。
var ENTRY_PATH = path.resolve(ROOT_PATH, './src/entry');
var BUILD_PATH = path.resolve(ROOT_PATH, './dist');

module.exports = {
    // webpack 入口
    entry: {
        app: [path.resolve(ENTRY_PATH, 'app.js')],
        vendor: [path.resolve(ENTRY_PATH,'../lib/angular.js'), path.resolve(ENTRY_PATH,'../lib/angular-route.js')]
    },
    output: {
        path: BUILD_PATH,
        publicPath: '/', //根目录
        filename: 'js/[name].entry.js',
        chunkFilename: 'js/[id].chunk.js'
    },
    module: {
        loaders: [{
            test: /\.tpl$/,
            loader: "tmod",
            query: {
                runtime: "debug/template.js",
                syntax: "simple",
                suffix: ".tpl"
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        }, 
        // {
        //     test: /\.jade$/,
        //     loader: 'jade'
        // }, 
        {
            test: /\.html$/,
            loader: "html?attrs=img:src img:data-src"
        }, {
            test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192&name=img/[name].[ext]'
        }, {
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    },
    devServer: {
        contentBase: 'src/',
        // historyApiFallback: true,
        // progress: true,
        hot: true, //热更新
        inline: true, //在线生产
        port: 8000,
        proxy: [{
                path: '/cc*',
                target: 'https://tcc.taobao.com'
            }]
            // proxy: {      //api 代理
            //     '/blog*': {
            //          changeOrigin: true,
            //          target: 'http://112.74.95.7:3000',
            //       secure: false
            //     }
            // }
    },
    resolve: {
        extensions: ['', '.js', '.css', '.scss', '.webpack.js', '.web.js']
    },
    // devtool: 'eval-source-map',
    plugins: [ //插件
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','manifest'],
        }),
        new ExtractTextPlugin('css/main.css'),
        new HtmlWebpackPlugin( //index页面
            {
                filename: 'index.html',
                template: 'index.html',
                inject: 'body',
                hash: true,
                chunks: ['app']
            }
        )
    ]
};

function getEntry(globPath, pathDir) {
    var files = glob.sync(globPath);
    var entries = {},
        entry, dirname, basename, pathname, extname;

    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        extname = path.extname(entry);
        basename = path.basename(entry, extname);
        pathname = path.join(dirname, basename);
        pathname = pathDir ? pathname.replace(new RegExp('^' + pathDir), '') : pathname;
        entries[pathname] = ['./' + entry];
    }
    return entries;
}
