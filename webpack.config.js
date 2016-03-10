// Configuration Webpack
// =====================

// La configuration de Webpack peut être assez velue…
// Pour simplifier notre propre code de configuration,
// une bonne solution consiste à passer par
// [hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack),
// une surcouche de Henrik Joreteg.  On peut se contenter
// d’indiquer de quel fichier source partir, où publier
// les fichiers de production en cas de build, éventuellement
// si on souhaite du HTTPS, et on est prêts à partir.
// La simple présence des principaux plugins et loaders
// Webpack dans le fichier `package.json` et le dossier
// `node_modules` entraînera leur configuration automatique.

var DashboardPlugin = require('webpack-dashboard/plugin')
var getConfig = require('hjs-webpack')
var OfflinePlugin = require('offline-plugin')

var config = getConfig({
  in: 'src/index.js',
  out: 'public',
  clearBeforeBuild: '!(favicon.ico)'
})

// C’est un plugin non pris en charge automatiquement par
// hjs-webpack, on l’ajoute donc manuellement à la liste
// définie par celui-ci.
config.plugins.push(new OfflinePlugin())
// Idem, plugin custom, qui nous fournit le dashboard Webpack
// en ligne de commande.
config.plugins.push(new DashboardPlugin({ port: 3002 }))

module.exports = config
