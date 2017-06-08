module.exports = {
  devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  entry: __dirname+"/src/main/js/app.js",
  output:{
    path: __dirname+"/src/main/resources/static",
    filename: "bundle.js"
  },
  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        }
      }
    ]
  },

    devServer: {
      contentBase: "./src/main/resources",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,
      inline: true,//实时刷新
      port: 8081
    }
}
