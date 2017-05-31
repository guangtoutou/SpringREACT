module.exports = {
  entry: __dirname+"/src/main/js/app.js",
  output:{
    path: __dirname+"/src/main/resources/templates/",
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
      contentBase: "./src/main/resources/templates",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,
      inline: true//实时刷新
    }
}
