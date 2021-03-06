module.exports = {
	mount: {
		public: { url: '/', static: true },
		app: { url: '/dist' },
	},

	plugins: [
		'@snowpack/plugin-webpack',
		'@snowpack/plugin-react-refresh',
		'@snowpack/plugin-babel',
		[ 'snowpack-plugin-svgr', {
			include: [ 'app/components/images/**/*.svg' ],
			svgrOptions: { svgo: false }
		} ]
	],

	routes: [],

	optimize: {},

	packageOptions: {
		knownEntrypoints: [
			'@emotion/react/jsx-runtime',
			'@emotion/styled/base'
		]
	},

	devOptions: {},

	buildOptions: {}
};
