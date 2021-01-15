module.exports = {
	plugins: [
		require('postcss-nested'),
		require('postcss-preset-env')({
			browsers: [
				'last 4 versions'
			],
			stage: 0
		})
	]
};
