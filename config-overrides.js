const {
	override,
	fixBabelImports,
	addPostcssPlugins,
	addWebpackAlias,
	addLessLoader,
} = require('customize-cra')

const path = require('path')

process.env.PORT = 3001

// 生产环境去掉map文件
if (process.env.NODE_ENV === 'production') {
	process.env.GENERATE_SOURCEMAP = 'false'
}

// 跨域配置
const devServerConfig = () => (config) => {
	return {
		...config,
		// 服务开启gzip
		compress: true,
		proxy: {
			// 配置跨域
			'/v1': {
				// target: 'http://10.217.58.161:8082/api', // 这里后台的地址
				target: 'http://10.217.58.161:10086/api',
				ws: false,
				changOrigin: true, // 允许跨域
				pathRewrite: {
					'^/v1': '', // 请求的时候使用这个api就可以
				},
			},
		},
	}
}

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	addWebpackAlias({
		'@': path.resolve(__dirname, 'src'),
	}),
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {
			'@primary-color': '#5478E5',
		},
	}),
)
