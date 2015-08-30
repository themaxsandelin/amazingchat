var webpack = require("webpack");
var path = require('path');
var chalk = require('chalk');

function outputErrors(errors) {
  errors.forEach(function(err) {
    console.error(chalk.red("\n************** CLIENT BUILD ERROR **************\n" + err + "\n"));
  });
}

function buildDone(err, stats) {
  if(err) throw err;

  var jsonStats = stats.toJson();

  if(jsonStats.errors.length > 0)
    return outputErrors(jsonStats.errors)
  if(jsonStats.warnings.length > 0)
    return outputErrors(jsonStats.warnings)

  console.log(chalk.green("Clientside build ok"))
}

// returns a Compiler instance
var compiler = webpack({
  context: path.resolve(__dirname, "../clientside/src"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "../clientside/dist"),
    filename: "app.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, '../clientside/src')
    }, {
      test: /\.less$|\.css$/,
      loaders: ['style', 'css', 'less'],
      include: path.join(__dirname, '../clientside/src')
    }]
  }

});

compiler.watch({ // watch options:
  aggregateTimeout: 300, // wait so long for more changes
}, buildDone);

module.exports = {};
