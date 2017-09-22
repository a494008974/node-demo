/*
var path = require('path');

module.exports = {
  entry: {
	  index:'./views/index.jsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,"build")
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
		loader: 'babel-loader',
		query:{
			presets:['es2015','react'] //必须先安装babel-preset-es2015和babel-preset-react
		}
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'], //必须先安装css-loader和style-loader
      },
	  {
		test: /\.(png|jpg|gif)$/,
		loader: 'file?name=[name].[ext]?[hash]'
	  },
	  {
		test: /\.(eot|woff|svg|ttf|woff2)$/, 
		loader: "file-loader" 
	  }
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname,"build")
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  plugins: [
       
  ]
};
*/

var path = require('path')

module.exports = {
  entry:  {
    index:'./views/index.jsx',
    },
  output: {
    path: path.resolve(__dirname, './build/'),
    publicPath: '/public/',
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  plugins: [
   
  ],
   resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
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
