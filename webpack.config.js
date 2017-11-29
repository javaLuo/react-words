var path = require('path');
var webpack = require('webpack');       // webpack核心
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: path.join(__dirname, 'example', 'src', 'index.js'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-3', 'react']
      },
      include: [
        path.join(__dirname, 'example')
      ]
    },
    {   // .css 解析
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            // fallback: 'style-loader',
            use: ['style-loader', 'css-loader', 'postcss-loader']
        })
    },
    {   // .scss 解析
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            // fallback: 'style-loader',
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
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
  devServer: {
    contentBase: path.join(__dirname, 'example')
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
    ]
}