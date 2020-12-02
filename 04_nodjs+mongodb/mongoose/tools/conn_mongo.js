
//定义一个模块，来连接MongoDB数据库

var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/mongoose_test");

mongoose.connection.once("open", function(){
    console.log("连接成功！！");
});
