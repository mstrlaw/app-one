const path = require('path');
const fs = require('fs');
const EventHooksPlugin = require('event-hooks-webpack-plugin');

module.exports = {
  chainWebpack: (config) => {
    config.devServer.headers({
      'Access-Control-Allow-Origin': '*',
    });
    config.devServer.set('disableHostCheck', false);
    config.devServer.set('sockPort', 8080);
    config.devServer.set('sockHost', 'localhost');
    config.devServer.set('port', 8080);
    config.devServer.set('inline', false);
    config.devServer.set('hot', true);

    config.output.filename('[name].js');
    config.output.publicPath('/');

    config.externals([
      'vue',
      'vue-router'
    ]);
  },
  lintOnSave: true,
  filenameHashing: false,
  configureWebpack: {
    plugins: [
      new EventHooksPlugin({
        done: () => {
          if (process.env.NODE_ENV !== 'development') {
            const buildDir = path.join(__dirname, '/dist');
            fs.unlinkSync(`${buildDir}/index.html`);
          }
        },
      }),
    ],
  },
};

