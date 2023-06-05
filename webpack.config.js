const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const path = require('path');


 module.exports = {
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    
  ],
  mode: "development",
  devtool: 'inline-source-map',
   output: {
    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
    rules: 
    [

      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins : [
              ["@babel/plugin-transform-react-jsx", {
                "pragma": "h",
                "pragmaFrag": "Fragment",
              }]
            ]
          },
        },
      },
      // css 
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type:'asset/resource'
     },
    ],
  },
 };

