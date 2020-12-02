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

var StuModel = mongoose.model("student", stuSchema);

// StuModel.create([
//     {
//         name: "猪八戒",
//         age: 28,
//         gender: "male",
//         address: "高老庄"
//     },{
//         name: "唐僧",
//         age: 16,
//         gender: "male",
//         address: "女儿国"
//     }
// ], function(err){
//     if(!err){
//         console.log("插入成功！");
//     }
// });

//直接获取
// StuModel.find({name: "唐僧"}, function(err, docs){
//     if(!err){
//         console.log(docs);
//     }
// });

//投影获取字段
// StuModel.find({},{name:1, _id:0}, function(err, docs){
//     if(!err){
//         console.log(docs);
//     }
// });

//skip：跳过的数量    limit：显示的数量
// StuModel.find({},"name age -_id",{skip: 3, limit: 1}, function(err, docs){
//     if(!err){
//         console.log(docs);
//     }
// });

StuModel.updateOne({name:"唐僧"},{$set:{age:20}}, function(err){});
