var path = require('path')

module.exports = {
  entry:  {
    react_index:'./public/js/react_index.jsx',
    vue_index:'./public/js/vue_index.js',
    },
  output: {
    path: path.resolve(__dirname, './build/'),
    publicPath: '/build/',
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  plugins: [
   
  ],
   resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
   },
   module: {
     rules: [
     {
        test: /\.vue$/,
        use: [
           'vue-loader'
         ]
     },
     {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        query:{
          presets:['es2015','react'] //必须先安装babel-preset-es2015和babel-preset-react
        }
     },
     {
        test: /\.html$/,
        use: [
           'vue-html-loader'
         ]
       },
       {
         test: /\.css$/,
         use: [
           'style-loader', 'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       }
     ]
   }
}
