const path = require('path');

module.exports = {
  mode: 'development',
  entry: './WebRTSP/WebRTSP.mjs',
  output: {
    filename: 'WebRTSP.js',
    path: __dirname,
    library: 'WebRTSP',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};
