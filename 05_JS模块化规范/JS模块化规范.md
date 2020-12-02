# JS模块化

## 1.简介

- 模块化的好处
  - 避免命名冲突，减少命名空间污染
  - 更好的分离，按需加载
  - 更高复用性
  - 高可维护性
- 问题
  - 请求过多
  - 依赖模糊
  - 难以维护

- 模块化规范
  - CommonJS
  - AMD
  - CMD //了解
  - ES6

## 2.CommonJS

- 每个文件（js）都可当作一个模块

- 在服务器端：模块的加载时运行时同步加载的

- 在浏览器端：模块需要提前编译打包处理

- 暴露模块

  - exports.xxx / module.exports = value
  - 暴露的本质是exports对象

- 引入模块

  - require(xxx)

- 服务器端实现：Node.js

- nodejs模块化教程

  - 下载安装node.js

  - 创建项目结构

  - ```
    |-modules
    	|-module1.js
    	|-module2.js
    	|-module3.js
    |-app.js
    |-package.json
    	{
    		"name": "commonJS-node",
    		"version": "1.0.0"
    	}
    ```

  - 下载第三方模块

    - npm install uniq --save

- Browserify模块化教程（浏览器端）

  - 为CommonJS的浏览器端的打包工具

  - 创建项目结构

  - ```
    |-js
    	|-dist //打包生成文件的目录
    	|-src //源码所在目录
    		|-module1.js
    		|-module2.js
    		|-module3.js
    		|-app.js //应用主源文件
    |-index.html
    |-package.json
    ```

  - 下载browserify

    - 全局：npm install browserify -g
    - 局部：npm install browserify --save-dev
      - 开发依赖：只在开发的时候依赖它 -dev
      - 运行依赖：上线的时候的依赖

  - 打包处理js

    - browserify js/src/app.js -o js/dist/bundle.js //o:output

  - 页面引入

    - <script type='text/javascript' src="./js/dist/bundle.js"></script>



## 3.AMD

- 异步模块定义

- 专门用于浏览器端，模块的加载是异步的

- 定义暴露模块
  - 没有依赖
    - define(function(){ 
      	return 模块
      })
  - 有依赖
    - define(['module1', 'module2'], function(m1,m2){
      	return 模块
      })
  
- 引入使用模块
  - require(['module1', 'module2'], function(m1,m2){
    	使用m1/m2
    })

- 浏览器端实现
  
  - requireJS
  
- require.js使用教程

  - 下载require.js, 并引入

  - 创建目录结构

  - ```
    |-js
    	|-libs
    		|-require.js
    	|-modules
    		|-alerter.js
    		|-dataService.js
    	|-main.js
    |-index.html
    ```

  - 在main.js中配置文件

    - ```
          requirejs.config({
              baseUrl: 'js/', //基本路径， 出发点在根目录
              paths:{ //配置路径
                  dataService: './modules/dataService',
                  alerter: './modules/alerter'
              }
          })
      
      ```

  - jQuery引入时需使用jquery

  - angular引用时，需在main.js require.config下添加：

    - ```
      shim: {
      	angular: {
      		exports: 'angular'
      	}
      }
      ```

## 4.CMD

- 专门用于浏览器端，模块的加载是异步的
- 模块使用时才会加载执行
- ![image-20201202174521701](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20201202174521701.png)



## 5.ES6

- 依赖模块需要编译打包处理

- 导出模块：export

- 引入模块：import

- 浏览器端实现：

  - babel

- ES6-Babel-Browserify使用教程

  - 定义package.json文件

    - ```json
      {
          "name": "es6-babel-browserify",
          "version": "1.0.0"
      }
      ```

  - 安装babel-cli, babel-preset-es2015和browserify     // cli: command line interface(命令行接口)

    - npm install babel-cli browserify -g
    - npm install babel-preset-es2015 --save-dev
    - preset 预设（将es6转换成es5的所有插件打包）

  - 定义 .babelrc 文件    //    run control 运行时控制文件

    - ```json
      {
          "presets": ["es2015"]
      }
      ```

  - 编码

    - js/src/module1.js

  - 编译

    - 使用Babel将ES6编译为ES5代码（但包含CommonJS语法）： babel js/src -d js/lib
    - 使用Browserify编译js：browserify js/lib/main.js -o js/lib/bundle.js

  - 常规暴露

    - 统一、分别暴露

  - 默认暴露 

    - export default
    - 可以暴露任意数据类型，暴露什么数据接收到的就是什么数据

