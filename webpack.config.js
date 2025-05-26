const defaults = require('@wordpress/scripts/config/webpack.config')
const path = require('path')

module.exports = {
	...defaults,
	entry: {
		...defaults.entry(),
		frontend: path.resolve(process.cwd(), 'src/js', 'frontend.ts'),
	},
	output: {
		filename: '[name].js',
		path: path.resolve(process.cwd(), 'build'),
	},
	module: {
		...defaults.module,
		rules: [
			...defaults.module.rules,
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: 'tsconfig.json',
							transpileOnly: true,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [
			'.ts',
			'.tsx',
			...(defaults.resolve
				? defaults.resolve.extensions || ['.js', '.jsx']
				: []),
		],
	},
}
