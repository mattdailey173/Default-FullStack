var path = require('path');
var src_dir = path.join(_dirname, './client/src');
var dist_dir = path.join(_dirname, './client/dist');

module.exporets = {
  entry: `${src_dir}/App.jsx`,
  output: {
    filename: 'bundle.js',
    path: dist_dir
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  }
}