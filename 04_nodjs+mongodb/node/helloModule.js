// exports.name = "孙悟空";
// exports.age = "18";
// exports.sayName = function (){
//     console.log("我是孙悟空");
// };

// module.exports = {
//     name: "猪八戒",
//     age: 28,
//     sayName: function(){
//         console.log("我是猪八戒");
//     }
// };

var obj = {};
obj.a = {};
var a = obj.a;
a.name = "孙悟空";
a = new Object();

console.log(a.name);
console.log(obj.a.name);
