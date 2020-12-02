# MongoDB

## 1.Database

- 数据库分类
  - 关系型数据库(RDBMS)
    - MySQL, Oracle, DB2， SQL Server...
    - 该数据库中全都是表
  - 非关系型数据库(No SQL)
    - MongoDB, Redis...
    - 键值对数据库
    - 文档数据库MongoDB

- MongoDB是为快速开发互联网web应用而设计的数据库系统
- MongoDB的数据模型时面向文档的(BSON)



## 2.MongoDB

### 2.1.安装MongoDB

- 安装

- 配置环境

- 在c盘根目录创建data文件夹，在data中创建文件夹db

- 运行mongodb

  - cmd：mongod //启动mongodb服务器，不要关闭
  - 另一个cmd：mongo //连接mongodb，出现>

- 如果想更改文件目录（不在c盘下，但仍需data+db)

  - mongod --dbpath 文件路径\data\db [--port 123 //更改端口]

- database

  - 服务器：
    - 服务器用来保存数据
    - mongod 用来启动服务器
  - 客户端：
    - 客户端用来操作服务器，对数据进行增删查改的操作
    - mongo 用来启动客户端

- 将mongodb设置为系统服务，可以自动在后台启动，不需要每次都手动启动

  - 在C盘根目录创建目录data

    - mkdir c:\data\db
    - mkdir c:\data\log

  - 创建配置文件

    - 在bin同目录下添加一个配置文件 mongod.cfg

  - 以管理员身份运行cmd

  - 执行如下命令

    - ```
      sc.exe create MongoDB binPath="\"D:\MongoDB\Server\4.0\bin\mongod.exe\" --service --config=\"D:\MongoDB\Server\4.0\mongod.cfg\"" DisplayName="MongoDB" start="auto"
      ```



- 启动mongodb服务
- 如果启动失败，证明操作有误
  - 在控制台输入 sc delete MongoDB 删除之前的操作
  - 重新再来一次

### 2.2.基本概念

- 数据库
  - 是一个仓库，可以存放集合
- 集合
  - 类似于数组，在集合中可以存放文档
- 文档
  - 文档数据库中最小单位，我们存储和操作的内容都是文档
- 在mongodb中，数据库和集合都不需要手动创建，当创建文档时，如果文档所在的集合或数据库不存在则会自动创建
- 当一个文档的属性值是一个文档时，内部的文档称为 内嵌文档，mongoDB支持通过内嵌文档的属性进行查询，如果要查询内嵌文档则可以通过.的形式来匹配，此时必须使用引号
  - eg:  db.users.find({'hobby.movies':'hero'})
- 数据库的方法能少调用尽量少调用，因为会降低性能

### 2.3.基本指令

- 显示当前所有数据库：show dbs|databases
- 进入到指定的数据库中：use tes
- 当前所处数据库：db
- 显示数据库中所有集合：show collections

### 2.4.数据库的CRUD的操作

#### 2.4.1数据库中插入文档

- db.collection_name.insert(doc)

  - 向集合中插入一个或多个文档

  - eg: 向test数据库中，stus集合中插入一个新的学生对象

    {name: "www", age: 18, gender: 男}

    db.stus.insert({name: "www", age: 18, gender: "男"})
    
  - 当我们向集合中插入文档时，如果没有给文档指定_id属性，则数据库自动为文档添加该属性，该属性用来作为文档唯一标识；如果自己 _id属性，需要注意该属性的唯一性

- db.collection_name.insertOne()

  - 插入一个文档

- db.collection_name.insertMany()

  - 插入多个文档

#### 2.4.2数据库中查找文档

- db.collection_name.find()

  - 查询所有文档
  - 可以接受一个对象作为条件参数
  - find()返回一个数组
- db.conllection_name.find("hello");
- db.conllection_name.find("hello");
- eg: db.stus.find({idb."hello})'
- db.collection_name.findOne({{}});
- db.conllection_name.find("hello").count()|length(); //f返回数量

#### 2.4.3数据中更改文档

- db.collection_name.update(查询条件， 新对象)
  - update()默认情况下会自动使用新对象替换就旧对象
  - 如果需要指定属性，而不是替换则需要使用修改操作符
    - $set：可以用来修改文档中的指定属性
      - db.stuts.update(匹配条件, {$set: {修改属性键值对}})
    - $unset: 删除属性，用法同set
    - $push: 用于向数组中添加一个新的元素
    - $addToSet: 向数组中添加一个新元素，如果数组中已经存在了该元素则添加失败
  - update()默认只会修改一个，可以更改multi属性
- db.collection_name.updateMany()
  - 同时修改多个符合条件的文档
- db.collection_name.updateOne()
  - 修改一个符合条件的文档

#### 2.4.4数据库文档删除

- db.collection_name.remove()

  - remove可以根据条件删除文档，传递条件的方式同find一样
  - 默认会删除符合条件的所有文档
  - 如果传递第二个参数，值为true，则只会删除一个
  - 如果传递一个空对象，则会删除所有文档，性能较差，此时可删除集合：
    - db.collection_name.drop()

- db.collection_name.deleteOne()

  - 删除一个文档

- db.collection_name.deleteMany()

  - 删除多个文档

- db.collection_name.drop() 删除集合

- db.dropDatabase() 删除数据库

- 一般数据库中的数据都不会删除，所以删除的方法很少调用

  一般会在数据中添加一个字段，来表示数据是否被删除

### 2.5.文档之间的关系

#### 2.5.1 一对一

- MongoDB中，可以通过内嵌文档的形式来体现出一对一的关系

- ```database
  db.wifeAndHusband.insert([
      {
          name: "huangrong",
          husband: {
              name: "guojing"
          }
       },
       {
       name: "panjinlian",
          husband: {
          name: "wudalang"
          }
       },
  ]);
  ```

#### 2.5.2 一对多/多对一

- 用户 - 订单

- 映射

- ```
  db.users.insert([
      {username: 'swk'},
      {username: 'zbj'}
  ]);
  
  db.order.insert({
      list: ['apple','banana'],
      user_id: ObjectId("5fc49a3d759231f39f683f4d")
  });
  
  ```

#### 2.5.3 多对多

- 分类 - 商品
- 同为映射，把上列user_id改为数组即可



### 2.6 补充内容

- 排序
  - 查询文档时，默认情况按_id值进行排序（升序）
  - sort() 可以用来指定文档排序的规则，需要传递一个对象指定排序规则（属性名：1|-1）
  - limit skip sort 可以以任意的顺序进行调用
- 投影
  - 在查询时，可以在第二个参数的位置来设置查询结果的投影
  - {属性名：0|1}



## 3.Mongoose

- Mongoose是一个让我们可以通过Node来操作mongoDB的模块
- Mongoose是一个对象文档模型（ODM）
- 好处
  - 可以为文档创建一个模式结构（Schema） - **约束**
  - 可以对模型中的对象/文档进行验证
  - 数据可以通过类型转换为对象模型
  - 可以使用中间件来应用业务逻辑挂钩

- mongoose提供的新对象
  - Schema 模式对象
    - schema对象定义约束了数据库中的文档结构
  - Model
    - Model对象作为集合中的所有文档的表示，相当于mongodb数据库中的集合collection
  - Document
    - Document表示集合中的具体文档，相当于集合中的一个具体的文档

- 使用
  - 下载安装
    - npm i mongoose --save
  - 在项目中引入mongoose
    - var mongoose = require("mongoose")
  - 连接mongodb数据库
    - mongoose.connect('mongodb://数据库的ip地址:端口号/数据库名', {useMongoClient: true})
    - 如果端口号默认可以省略不写
  - 断开数据库连接（一般不需要）
    - mongdb数据库，一般情况下只需连接一次，之后除非项目停止服务器关闭，否则连接一般不会断开
    - mongoose.disconnect()
- 监听MongoDB数据库的连接状态
  - 在mongoose对象中，有一个属性叫做connection，该对象表示的就是数据库连接
  - 通过监视该对象的状态，可以来监听数据库的连接与断开
  - 数据库连接成功的事件
    - mongoose.connection.once("open", function(){});
  - 数据库断开的事件
    - mongoose.connection.once("close", function(){});

- 连接数据库
  - 创建schema

    ```js
      var mongoose = require('mongoose');
      var Schema = mongoose.Schema;
    
      var blogSchema = new Schema({
        title:  String,
        author: String,
        body:   String,
        comments: [{ body: String, date: Date }],
        date: { type: Date, default: Date.now },
        hidden: Boolean,
        meta: {
          votes: Number,
          favs:  Number
        }
      });
    ```

  - 通过schema创建model

    - model代表的是数据库中的集合，通过model才能对数据库进行操作
    - mongoose.model(modelName, schema);
      - modelName: 要映射的集合(mongoose会自动将集合变为复数)
      - schema: 约束
    - stuModel.create(doc, function(err){});

- 有了model，就可以对数据库进行增删改查的操作了

### model

- 增加
  - Model.create(doc(s), [callback])
    - 用来创建一个或多个文档并添加到数据库中
    - 参数：
      - doc(s) 可以是一个文档对象，也可以是一个文档对象的数组
      - callback 当操作完成以后调用的回调函数

- 查找

  - Model.find()

    - ```js
      //直接获取
      StuModel.find({name: "唐僧"}, function(err, docs){
          if(!err){
              console.log(docs);
          }
      });
      
      //投影获取字段
      StuModel.find({},{name:1, _id:0}, function(err, docs){
          if(!err){
              console.log(docs);
          }
      });
      
      //skip：跳过的数量    limit：显示的数量
      StuModel.find({},"name age -_id",{skip: 3, limit: 1}, function(err, docs){
          if(!err){
              console.log(docs);
          }
      });
      ```

    - 通过find()查询的结果，返回的对象，就是document，文档对象

    - document对象就是model的实例

  - Model.findById()

    - 通过id寻找

  - Model.findOne()

    - 只返回第一个

- 修改

  - Model.update(conditions, doc[, options] [, callback])

  - Model.updateMany(conditions, doc[, options] [, callback])

  - Model.updateOne(conditions, doc[, options] [, callback])

    - 参数：
      - conditions 查询条件
      - doc 修改后的对象
      - options 配置参数
      - callback 回调函数

  - ```js
    StuModel.updateOne({name:"唐僧"},{$set:{age:20}}, function(err){});
    ```

- 删除

  - Model.remove(conditions [, callback])

  - Model.deleteOne(conditions [, callback])

  - Model.deleteMany(conditions [, callback]

- 统计文档数量

  - Model.count(conditions [,callback])

### Document

- save()

  - Model#save([options], [fn])

  - ```js
    stu.save(function(err){
        if(!err){
            console.log("保存成功");
        }
    })
    ```

- update(update, [options], [callback])

  - 修改对象

  - ```js
    StuModel.findOne({}, function(err, doc){
        if(!err){
            doc.update({$set:{age:28}}, function(err){
                console.log("修改成功");
            });
            // console.log(doc);
        }
    });
    ```

- remove([callback])

  - 删除对象

  - ```js
    StuModel.findOne({}, function(err, doc){
        if(!err){
            doc.remove(function(err){
                if(!err){
                    console.log("大师兄再见");
                }
            });
        }
    });
    ```

- get(name)

  - 获取文档中的指定属性值

- set(name, value)

  - 设置文档的指定的属性值s

- id

  - 获取文档的_id 属性值

- toObject()
  - 将document对象转换为普通的js对象
  - 转换以后所有的document对象的方法都不能使用了