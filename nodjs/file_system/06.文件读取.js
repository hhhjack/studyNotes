
var fs = require('fs');

// 简单文件读取

// fs.readFile("hello3.txt", function(err, data){
//     if(!err){
//
//         // console.log(data.toString());
//         //将data写入到文件中
//         fs.writeFile("hello.txt", data, function(err){
//             if(!err){}
//             console.log("文件写入成功！");
//         })
//     }
// })

//流式文件的读取
var rs = fs.createReadStream("hello.txt");
var ws = fs.createWriteStream("hello_copy.txt");

//监听
rs.once("open", function(){
    console.log("可读流打开了！");
});

rs.once("close", function(){
    console.log("可读流关闭了！");
    //数据读取完毕，关闭可写流

    ws.end();
});

ws.once("open", function(){
    console.log("可写流打开了！");
});

ws.once("close", function(){
    console.log("可写流关闭了！");
});

// rs.on("data", function(data){
//     console.log(data);
//     ws.write(data);
// });

//流式文件简化 pipe()

rs.pipe(ws);
