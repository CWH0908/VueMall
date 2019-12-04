const path = require('path')

const webpack = require('webpack')

//导入在内存中生成HTML页面的插件html-webpack-plugin
//只要是插件都一定要放到配置插件的plugin节点中去
const htmlWebpackPlugin = require('html-webpack-plugin')

//此版本vue-loader需要导入
const {
	VueLoaderPlugin
} = require('vue-loader')


//通过Node中的模块操作，向外暴露一个配置对象
module.exports = {

	entry: path.join(__dirname, './src/main.js'), //入口，表示要使用webpack打包哪个文件

	output: { //输出文件相关的配置
		path: path.join(__dirname, './dist'), //指定打包好的文件输出到哪个目录
		filename: 'bundle.js' //指定输出文件的名称
	},

	plugins: [ //配置插件的节点
		new htmlWebpackPlugin({ //创建一个在内存中生成HTML页面的插件
			template: path.join(__dirname, './src/index.html'), //指定模板页面，将来根据此页面路径去生成内存中的页面
			filename: 'index.html' //指定生成的页面的名称,但是由于默认打开index页面，所以需要更改打开页面路径或者直接将filename的内存页面名称命名为index.html，即可在浏览器自动打开内存页面。
		}),
		//new VueLoaderPlugin(),//配置vue，至此vue组件可用
	],

	module: { //此节点用于配置所有的第三方模块加载器
		rules: [ //所有第三方模块的规则
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}, //正则表达式匹配css后缀的文件
			{
				test: /\.(jpg|jpeg|png|gif|bmg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 200,
					}
				}]
			}, //正则表达式匹配图片后缀的文件
			//			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//配置babel来转换高级的ES6语法
			{
				test: /\.vue$/,
				use: 'vue-loader'
			}, //正则表达式匹配vue后缀的文件
			{
				test: /\.ttf$/,
				use: 'url-loader'
			}, //正则表达式匹配css后缀的文件
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader'
			}
		]
	}
}