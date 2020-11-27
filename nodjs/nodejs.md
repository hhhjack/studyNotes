# Nodejs

## 1.命令行窗口

- 小黑屏、cmd窗口、终端、shell

- win+R -> cmd -> enter
- 常用指令
  - dir  ：列出当前目录下所有文件
  - cd 目录名：进入到指定目录	
  - md 目录名：创建一个文件夹
  - rd 目录名：删除一个文件夹
- 目录
  - .  当前目录
  - ..  上一级目录
- 环境变量（windows系统中变量）
  - path
  - 当我们在命令行窗口打开一个文件，或调用一个程序时，系统会首先在当前目录下寻找文件程序；如果找到了则直接打开，如果没有则会依次到环境变量path的路径中寻找，直到找到为止；若没有找到则报错
  - 所以我们可以将一些经常需要访问的程序和文件的路径添加到path中，这样就可以在任意位置访问这些文件



## 2.进程和线程

- 进程
  - 进程负责为程序的运行提供必备的环境
  - 进程相当于工厂中的车间
- 线程
  - 线程时计算机中的最小的计算单位，线程负责执行进程中的程序
  - 线程相当于工厂中的工人
- 单线程
  - js时单线程
- 多线程
  - 主流java都是多线程



## 3.node.js

- 它是一个能够在服务器端运行JavaScript的开放源代码、跨平台JavaScript运行环境
- Node
  - 是对ES标准一个实现，Node也是一个JS引擎
  - 通过Node可以使js代码在服务器端执行
  - Node仅仅对ES标准进行了实现，所以在Node中不包含 DOM 和 BOM
  - Node 中可以使用所有的内建对象
    - String	Number 	Boolean	Math	Date	RegExp	Function	Object	Array
    - 而 BOM 和 DOM 都不能使用
    - 但是可以使用 console 也可以使用定时器（setTimeout() setInterval())
  - Node 可以在后台来编写服务器
    - Node 编写服务器都是单线程的服务器
  - 传统的服务器都是多线程的
    - 每进来一个请求，就创建一个线程取处理请求
  - Node 的服务器单线程的
    - Node 处理请求时是单线程，但是在后台有一个 I/O 线程池



## 4.commonjs规范（模块化简介）

### 4.1.简介

- 为了弥补当前JavaScript没有标准的缺陷
- 对模块的定义
    - 模块引用
    - 模块定义
    - 模块标识
- 在Node中，一个js文件就是一个模块
- 在Node中，每一个js文件中的js代码都是独立运行在一个函数中，而非全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
- 通过require()函数来引入外部的模块
    - reuqire()可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
    - 这里路径，如果使用相对路径，必须使用.或..开头
    - 使用require()引入模块以后，该函数会返回一个对象，代表引入的模块
- 可以通过exports来向外部暴露变量和方法
    - 只需要将需要暴露给外部的变量或方法设置为exports的属性即可
- 使用require()引入外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块

### 4.2.模块

- 模块分为两大类
    - 核心模块
        - 由node引擎提供的模块
        - 核心模块的标识就是，模块的名字
    - 文件模块
        - 用户自己创建的模块
        - 文件模块的标识就是文件的路径（绝对、相对路径）
    
- 在node中有一个全局对象 global ，它的作用和网页中window类似
    - 在全局中创建的变量都会作为global的属性保存
    - 在全局中创建的函数都会作为global的方法保存
    - 当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码
        - function (exports, require, module, __filename, __dirname) {
    - 在代码底部添加如下代码
        - }
    - 实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递了5个实参
        - exports 
            - 该对象用来将变量或函数暴露到外部
        - require
            - 函数，用来引入外部的模块
        - module
            - module代表的是当前模块本身
            - exports就是module的属性
            - 既可以使用 exports 导出，也可以使用 module.exports 导出
        - __filename
            - 当前模块的完整路径 
        - __dirname
            - 当前模块所在文件夹的完整路径
    
- exports 和 module.exports
    - 通过 exports 只能使用.的方式来向外暴露内部变量
      
        - exports.xxx = xxx
    - module.exports 既可以使用.的形式，也可以直接赋值
        - module.exports.xxx = xxx
        
        - module.exports = {}
        
### 4.3.包结构

- 实际上就是一个压缩文件，解压以后还原为目录。符合规范的目录，应该包含如下文件：
    - package.json  描述文件 //必须
        - 参数
            - dependencies： 依赖
            - descriprion：  描述包的作用
            - devDependencies：  开发依赖
            - license：  开发协议
            - main： 主文件
            - maintainers：  主要贡献者
            - name： 包名
            - script：   命令
            - repositories： 仓库
        - 是一个json格式的文件，位于根目录下
        - json文件中不能写注释
    - bin   可执行二进制文件
    - lib   js代码
    - doc   文档
    - test  单元测试
- NPM（Node Package Manager）
    - 帮助完成第三方模块的发布、安装和依赖等
    - 命令
        - npm -v //查看版本
        - npm //帮助说明
        - npm search 包名 //搜索包模块
        - npm install //下载当前项目所依赖的包
        - npm install 包名 //在当前目录安装包
        - npm install 包名 --save //在当前目录安装包并添加依赖
        - npm install 包名 -g //全局模式安装包
        - npm remove 包名 //删除一个模块
        - npm install 文件路径 //从本地安装
        - npm install 包名 -registry=地址 //从镜像源安装
        - npm config set registry 地址 //设置镜像源
        - npm init //初始化
    - 淘宝镜像 cnpm
        - npm install -g cnpm --registry=https://registry.npm.taobao.org
    - 下载的包都将放到node_modules文件夹中
    - 通过npm下载的包，直接通过包名引入即可
    - node在使用模块名字来引入模块时，它会首先在当前目录的node_modules中寻找是否有该模块
        - 如果有则直接使用，若没有则去上一级寻找，一直往上一级寻找直至磁盘根目录，若仍未找到则报错



## 5.文件系统

### 5.1.Buffer缓冲区

- buffer的结构和数组很像，操作方法也和数组类似        
- 数组中不能存储二进制文件，，而buffer就是专门用来存储二进制数据
- 使用buffer不需要引入模块，直接使用即可
- 在buffer中存储的都是二进制数据，但是显示时都是以16进制的形式显示的
    - buffer中每一个元素的范围是从00-ff 0-255
- buffer构造函数都是不推荐使用的
- Buffer.from(str) //将一个字符串转换为buffer
- Buffer.alloc() //创建指定大小的数据
- Buffer.allocUnsafe(size) //创建一个指定大小的buffer，但是buffer中可能含有敏感数据（分配空间的时候没有清空数据）
- buffer的大小一旦确定，则不能修改，buffer实际上是对底层内容直接修改

### 5.2.文件系统_fs

- 文件系统简单来说就是通过node来操作系统中的文件
- 使用文件系统，需要引入fs模块，fs是核心模块，直接引入无需下载
- fs模块中所有的操作都有两种形式可供选择：同步(Sync)和异步
  - 同步文件会阻塞程序的执行，除非操作完毕，否则不会向下执行代码
  - 异步文件不会阻塞，再操作完成时通过回调函数将结果返回（import）
    - 异步调用的方法都是通过回调函数返回的，本身不返回值
- 同步文件的写入
  - 打开文件：fs.openSync(path, flags[, mode])
    - path：要打开的文件路径
    - flags：打开文件要进行操作的类型
      - r 只读的
      - w 可写的
    - mode：设置文件的操作权限，一般不传参
    - 返回值：该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作
  - 写入文件：fs.writeSync(fd, string[, position[, encoding]])
    - fd：文件描述符，需要传递要写入的文件的描述符
    - string：要写入的内容
    - position：开始写的位置，可选
    - encoding：写入的编码，一般为utf-8
  - 保存关闭文件：fd.closeSync(fd)
    - fd：要关闭的文件描述符

- 异步文件写入
  - 打开文件：fs.open(path, flags[, mode], callback)
    - 回调函数两个参数：
      - err 错误参数，如果没有错误则为null
      - fd 文件的描述符
  - 写入文件：fs.write(fd, string[, position[, encoding]], callback)
    - 异步写入一个文件
  - 关闭文件：fd.close(fd, callback)

- 简单文件写入
  - fs.writeFile(file, data[, options], callback);
  - fs.writeFileSync(file, data[, options]);
    - file：要操作的文件的路径
    - data：要写入的数据
    - options：选项，可以写入进行一些设置，一般需要对象作为参数
      - flag：操作模式
        ![image-20201127163717786](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20201127163717786.png)
    - callback：当写入完成以后执行的函数

- 流式文件写入
  - 同步、异步、简单文件的写入都不适合大文件，性能较差，容易导致内存溢出
  - fs.createWritesStream(path[, options])
    - 可以用来创建一个可写流
    - path：文件路径
    - options：配置的参数
  - 可以通过监听流的open和close事件来监听流的打开和关闭
    - on(事件字符串， 回调函数) 
      - 可以为对象绑定一个事件
      - 一直打开
    - once(事件字符串， 回调函数) 
      - 可以为对象绑定一个一次性的事件，该事件会在触发一次以后自动失效
  - 使用end()来关闭流

- 同步文件读取
- 异步文件读取
- 简单文件读取
  - fs.readFile(path[, options], callback)
  - fs.readFileSync(path[, options], callback)
    - path 要读取的文件路径
    - options 读取的选项
    - callback 回调函数，通过回调函数将读取到的内容返回
      - err 错误对象
      - data 读取到的数据，会返回一个buffer，因为读取的数据不仅仅是文本文件

- 流式文件读取

  - 也适用于一些比较大的文件，可以分多次将文件读取到内存中
  - 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据

- 其他方法

  - fs.existsSync(path)
    - 检查一个文件是否存在
    - 此方法异步调用已弃用，因为同步已经足以满足需求

  - fs.statSync(path)
  - fs.stat(path, callback)
    - 获取文件状态
    - 它会给我们返回一个对象stats，这个对象保存了当前对象状态的相关信息
      - size 文件的大小
      - isFile()

  - fs.unlinkSync(path)
  - fs.unlink(path, callback)
    - 删除文件
  - fs.readdirSync(path[, options])
  - fs.readdir(path[, options], callback)
    - 读取一个目录的目录结构
    - files是一个字符串数组，每一个元素就是一个文件夹或文件的名字
  - fs.truncateSync(path, len)
  - fs.truncate(path, len, callback)
    - 截断文件
  - fs.mkdirSync(path[, mode])
  - fs.mkdir(path[, mode], callback)
    - 创建目录
  - fs.rmdirSync(path)
  - fs.rmdir(path,  callback)
    - 删除目录
  - fs.renameSync(oldPath, newPath)
  - fs.rename(oldPath, newPath, callback)
    - 重命名文件和目录
  - fs.watchFile(filename[, options], listener)
    - 监视文件的修改
    - 参数
      - filename 要监视的文件的名字
      - options 配置选项
        - interval：传递间隔时间
      - listener 回调函数，当文件发生变化，回调函数会执行
        - 回调函数的两个参数
          - curr 当前文件的状态
          - prev 修改前文件的状态
        - 这两个都是stats对象