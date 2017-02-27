var path =require('path');

var assetsPath = path.join(__dirname,"public",'assets');
var serverPath = path.join(__dirname,"server");

module.exports = [
	{
		name: "broswer",
		entry: "./app/entry.js",
		output: {
			path: assetsPath,
			filename: 'entry.generator.js'
		},
		module: {
			loaders: [
				{test: /\.js/, loader:'jsx-loader'}
			]
		}
	},
	{
		name: "server-side",
		entry: './server/page.js',
		output: {
			path: serverPath,
			filename: 'page.generator.js',
			/*因为用到page.generator.js 的是nodejs,所以要转换成CMD*/
			library: 'page',
			libraryTarget: 'commonjs',
		},
		module: {
			loaders: [
				{test: /\.js$/,loader: 'jsx-loader'},
				{ test: /\.css$/, loader: 'style-loader!css-loader' }
			]
		}
	}
]