# 通用 vue-cli 模板

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

***
## 我应该做什么？
1. 阅读一遍配置
2. 根据要开发的项目进行相对应的修改，此配置并不是完全，只是节省一些通用配置
3. 修改项目名和package.json下的name字段

***
## 默认配置内容如下

>vue-router、vuex、axios、proxy代理、scss、全局scss

* vue-router => src/router/index.js，默认hash模式
* vuex => src/store/index.js
* axios => src/api/config.js, src/api/index.js
	* config.js => 请求前拦截器，请求后拦截器，一些get、post等等方法
	* index.js => 一个接口对应一个方法，从这里导出去使用
	* 开发环境配合proxy代理使用
* proxy代理 => 项目目录/config/dev.env.js, 项目目录/config/prod.env.js
	* dev.env.js 对应开发环境，配置请求头（代理头）BASE_URL、实际转发地址ACTUAL_URL
	* prod.env.js 对应生成环境，配置请求头BASE_URL
* scss
* [全局scss](https://www.cnblogs.com/wuzhendong/p/8078659.html, '全局scss配置') => src/assets/scss/global.scss

***
## 其他配置

>路径别名、公用方法、页面位置

* 已配置路径别名有如下：
	* @api => src/api
	* @util => src/util
	* @img => src/assets/images
	* @scss => src/assets/scss
	* @view => src/views
	* 在各场景下的使用：
		* JS => require('@api')
		* HTML => img src="~@img/xx.jpg"
		* css => background: url('~@img/xx.jpg')
* 公用方法写在 src/util 下
* 页面放在src/views下，通用模板放在components
