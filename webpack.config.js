const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),

	entry: {
		main: './index.js',
		player: './player.js'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'public')
	},

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
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader'],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 2000,
						name: '[path][name].[ext]',
						outputPath: 'img/'
					} 
				}
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('styles.css')
		//создаем новый плагин
	]
};