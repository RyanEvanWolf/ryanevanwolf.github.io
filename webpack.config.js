const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const CopyPlugin = require("copy-webpack-plugin");

const fs   = require('fs');
const path = require('path');
// 


// Take all the json files for the careers section,
// and merge them into one file for easy importing
const CareersInDir = "configs/Careers";
const CareersList = fs.readdirSync(CareersInDir).filter(file => path.extname(file) === '.json');


var vlist= [];


CareersList.forEach(file => {
  console.log(file)
  const fileData = fs.readFileSync(path.join(CareersInDir, file));
  const json = JSON.parse(fileData);
  vlist.push(json)
});


fs.writeFileSync("src/static/Careers.json",JSON.stringify({list:vlist}));






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
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets" },
      ],
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
        test: /\.(js|jsx)$/i,
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

