const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../config');

const isProdEnv = process.env.NODE_ENV === 'production';

function assetsPath(_path) {
  const assetsSubDirectory = isProdEnv ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
}

function cssLoaders(options = {}) {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: isProdEnv,
      sourceMap: options.sourceMap,
    },
  };

  const px2remLoader = {
    loader: 'px2rem-loader',
    options: {
      remUnit: config.base.remUnit,
    },
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = config.base.useFlexible ? [cssLoader, px2remLoader] : [cssLoader];

    if (loader) {
      loaders.push({
        loader: `${loader}-loader`,
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap,
        }),
      });
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        fallback: 'vue-style-loader',
        use: loaders,
      });
    }
    return ['vue-style-loader'].concat(loaders);
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus'),
  };
}

// Generate loaders for standalone style files (outside of .vue)
function styleLoaders(options) {
  const loaders = cssLoaders(options);
  const output = Object.entries(loaders).map(([ext, loader]) => ({
    test: new RegExp(`\\.${ext}$`),
    use: loader,
  }));
  return output;
}

module.exports = {
  assetsPath,
  cssLoaders,
  styleLoaders,
};
