const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'src'),

	entry: './index.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},

	mode: 'development',

	watch: true,

	devtool: 'source-map',

	module: {
		rules: [
			{
				test:/\.js$/,
				exclude: /node_modules/, 
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'stage-0']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};