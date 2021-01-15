module.exports = {
	mount: {
		public: {url: '/', static: true},
		src: {url: '/dist'},
	},

	plugins: [
	  '@snowpack/plugin-react-refresh',
	  '@snowpack/plugin-postcss'
	],

	routes: [],

	optimize: {},

	packageOptions: {},

	devOptions: {},

	buildOptions: {}
};
