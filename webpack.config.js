var DashboardPlugin = require('webpack-dashboard/plugin')
var getConfig = require('hjs-webpack')

var config = getConfig({
  in: 'src/index.js',
  out: 'public',
  clearBeforeBuild: '!(favicon.ico)'
})

config.plugins.push(new DashboardPlugin({ port: 3002 }))

module.exports = config
