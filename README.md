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
  * 打开webpack.config.dev module添加 第149行
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
### vscode 支持装饰器
  * 设置->工作区设置
```
{
    "javascript.implicitProjectConfig.experimentalDecorators": true
}
```
### alias配置common文件的路径
  * 打开webpack.config.dev.js 在alias添加（86行）
  ```
   common: path.resolve(__dirname, '../src/common/'),
  ```
### 配置反向代理
  * 打开webpackDevServer.config proxy（89行）:注 mock数据是用的json-server
```
proxy: {
      '/mock': {
        target: 'http://localhost:3001/test',
        changeOrigin: true,
        pathRewrite:{
          "^/mock" : ""
        }
      }
    },
```
### 启动json-server
  * npm install json-server -g
  * 切换到mock数据的位置mock文件夹，执行
  ```
  json-server --watch db.json -p 3001
  ```
### mobx api
  * observable, computed, autorun, action, configure, runInAction
  * observable
    * observable追踪状态变化
  * computed
    * 计算机属性，依赖变化才计算，返回值
  * autorun
    * 依赖变化，执行附加操作
  * action
    * 定义方法，mobx推荐在action中改变状态
    * action只能影响正在运行的函数，而无法影响当前函数调用的异步操作
    ```
    //no use strict
    @action queryTest = async (params) => {
      const data = await queryTest();
      this.data = data.data;
      console.log(data);
    }

    //use strict
    @action queryTest = async (params) => {
    const data = await queryTest();
    runInAction(()=>{
      this.data = data.data;
      console.log(data);
    })
  }
    ```
  * configure
    * 配置
      * 严格模式
      ```
      configure({ enforceActions: true });
      ```
  * runInAction
    * 