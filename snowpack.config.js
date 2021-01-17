module.exports = {
	mount: {
		public: {url: '/', static: true},
		src: {url: '/dist'},
	},

	plugins: [
		'@snowpack/plugin-webpack',
		'@snowpack/plugin-react-refresh',
		[ 'snowpack-plugin-svgr', { include: [ 'src/components/images/**/*.svg' ] } ]
	],

	routes: [],

	optimize: {},

	packageOptions: {},

	devOptions: {},

	buildOptions: {}
};
