const devEnv = require('./dev.env');
const merge = require('webpack-merge');

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
});
