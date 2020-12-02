## 初始化
### npm全局安装生成器
npm install express-generator -g

### 查看生成器设置
express --hlep

### 可以直接运行 express 命令，将使用 Jade 视图引擎和纯 CSS 在当前目录中创建项目

### 自定义创建pug模板库
express -v pug

### 添加依赖
npm install

### 运行
npm start


## 文件改动时重启服务
### nodemon工具全局安装
npm install -g nodemon

### 作为开发依赖安装在本地
npm install --save-dev nodemon

### 添加到package.json中，以调用
"scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },

### 重新启动
npm run devstart

### 现在，如果编辑项目中的任何文件，服务器将自动重启（或者可以随时使用 rs 命令来重启） 查看更新后的页面需要点击浏览器的“刷新”按钮


##
### 目录结构
/express-locallibrary-tutorial
    app.js
    /bin
        www     //调用应用入口的启动脚本
    package.json
    /node_modules
        [约 4,500 个子文件夹和文件]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes     //使用不同模块保存应用路由
        index.js
        users.js
    /views      //保存模板
        error.pug
        index.pug
        layout.pug

