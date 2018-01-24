const utils = require('./utils');
const config = require('../config');

const isProdEnv = process.env.NODE_ENV === 'production';

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProdEnv ? config.build.productionSourceMap : config.dev.cssSourceMap,
    extract: isProdEnv,
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href',
  },
};
