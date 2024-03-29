const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, 'dist'),
  publicPath: config.output.publicPath,
  hot: true,
  compress: true,
  port: 8080,
});

server.listen(8080, 'localhost', (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:8080');
});
