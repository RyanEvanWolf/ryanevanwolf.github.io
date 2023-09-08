const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const path = require('path');


 module.exports = {
  entry: {
    index: './src/index.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 9000,
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
     clean: true,
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
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
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

