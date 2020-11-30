var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/mongoose_test");

mongoose.connection.once("open", function(){
    console.log("连接成功！！");
});

var Schema = mongoose.Schema;

var stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: "female"
    },
    address: String
});

//通过schema来创建model
var StuModel = mongoose.model("student", stuSchema);

StuModel.create({
    name: "孙悟空",
    age: 18,
    gender: "male",
    address: "花果山"
}, function(err){
    if(!err){
        console.log("插入成功！");
    }
});