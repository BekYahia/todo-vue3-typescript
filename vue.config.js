module.exports = {
	lintOnSave: false,
	devServer: {
		proxy: 'https://jsonplaceholder.typicode.com/'
	},
	publicPath: process.env.NODE_ENV === 'production'
		? '/todo-vue3-typescript/'
		: '/'
  };