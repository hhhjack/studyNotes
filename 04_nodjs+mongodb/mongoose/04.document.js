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

var stu = new StuModel({
    name: "奔波霸",
    age: 48,
    gender: "male",
    address: "碧波谭"
});

console.log(stu);

// stu.save(function(err){
//     if(!err){
//         console.log("保存成功");
//     }
// })

StuModel.findOne({}, function(err, doc){
    if(!err){
        // doc.update({$set:{age:28}}, function(err){
        //     console.log("修改成功");
        // });
        // console.log(doc);
        doc.remove(function(err){
            if(!err){
                console.log("大师兄再见");
            }
        });
    }
});