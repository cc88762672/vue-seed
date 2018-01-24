// This is the webpack config used for unit tests.

const webpack = require('webpack');
const merge = require('webpack-merge');
const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');

// 有些loader的loaderUtils.parseQuery()方法有问题，需要修改为使用loaderUtils.getOptions()方法
// 然而仍有不少loader没改，会导致报错，所以此处禁止错误提示
process.noDeprecation = true;

const webpackConfig = merge(baseWebpackConfig, {
  devtool: config.test.devtool,
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader',
    },
  },
  module: {
    rules: utils.styleLoaders(),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.test.env,
    }),
  ],
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
