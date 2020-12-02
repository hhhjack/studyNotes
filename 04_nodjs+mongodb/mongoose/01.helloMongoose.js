var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/mongoose_test");

mongoose.connection.once("open", function(){
    console.log("连接成功！！");
});

mongoose.connection.once("close", function(){
    console.log("已经断开！！");
});

//断开连接
mongoose.disconnect();