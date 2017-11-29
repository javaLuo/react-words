var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
	// 页面入口文件配置
	entry: {
		index: ['./src/index.js']
	},
	// 输出文件配置
	output: {
		path: path.resolve(ROOT_PATH, 'dist'),
		filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        library: ['words'],
        libraryTarget: 'umd'
	},
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
      },
	// 解析器配置
	module: {
		loaders: [
			{
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                	presets: ['es2015', 'stage-3', 'react']
                },
                include: [
                  path.join(__dirname, 'src')
                ]
            },
			{   // .css 解析
                test: /\.css$/,
                //use: ['style-loader', 'css-loader', 'postcss-loader']
                use: ExtractTextPlugin.extract({
                    //fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {   // .scss 解析
                test: /\.scss$/,
                // use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
                use: ExtractTextPlugin.extract({
                    //fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]',
                include: [
                  path.join(__dirname, 'src')
                ]
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|appcache|mp3|pdf)(\?|$)/,
                loader: 'file-loader?name=files/[name].[ext]',
                include: [
                  path.join(__dirname, 'src')
                ]
            }
		]
	},
	// 其他解决方案配置
	resolve: {
        extensions: ['.js', '.jsx', '.less', '.css', '.scss'] //后缀名自动补全
    },
    // 第3方插件配置
    plugins: [
    // http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    //用来优化生成的代码 chunk,合并相同的代码
    new webpack.optimize.AggressiveMergingPlugin(),
    // 配置了这个插件，再配合上面loader中的配置，将所有样式文件打包为一个单独的css文件
    new ExtractTextPlugin({
        filename:'[name].css',  // 生成的文件名
        allChunks: true,        // 从所有chunk中提取
    }),
    //用来保证编译过程不出错
    new webpack.NoEmitOnErrorsPlugin(),
    // Uglify 加密压缩源代码
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false, // 是否保留代码格式和所有注释
        },
        compress: {
            warnings: false, // 删除没有用的代码时是否发出警告
            drop_console: true, // 是否删除所有的console
        },
    }),
    ]
};