### less、sass支持
  * 安装 less、less-load、sass-loader
  ```
  npm i less less-loader sass-loader -D
  ```
  * webpack.config.dev module（212行）行添加如下配置
```
{
	test: /\.scss$/,
	loaders: ['style-loader', 'css-loader', 'sass-loader'],
},
{
	test: /\.less$/,
	loaders: ['style-loader', 'css-loader', 'less-loader'],
}
```
### antd 按需自动引入样式
  * 安装babel-plugin-import
  ```
  yarn add babel-plugin-import --dev   
  或者
  npm i babel-plugin-import --save-dev
  ```
  * 打开webpack.config.dev添加 第149行
```
plugins: [
	["import", [{
			"libraryName": "antd",
			"libraryDirectory": "es",
			"style": "css"
		},
		{
			"libraryName": "antd",
			"libraryDirectory": "es",
			"style": true
		}
	]] // `style: true` 会加载 less 文件
],
```
### create-react-app 配置mobx支持
  * 安装 babel-plugin-transform-decorators-legacy
```
npm i babel-plugin-transform-decorators-legacy --save-dev
```
  * 打开package.json 添加配置plugins
```
  "babel": {
    "plugins": [
      "transform-decorators-legacy"
    ],
    "presets": [
      "react-app"
    ]
  },
```