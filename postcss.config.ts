const postCssConfig = require('../files/postcss.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = (isCssModule: any) => ([
  process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
  {
    loader: 'css-loader',
    options: {
      importLoaders: 3,
      modules: isCssModule
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: postCssConfig
    }
  },
  'resolve-url-loader',
  'sass-loader'
]);