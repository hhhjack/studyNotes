var fs = require('fs');

var ws = fs.createWriteStream("hello3.txt");

ws.once("open", function(){
   console.log("流打开了")
});

ws.once("close", function(){
    console.log("流关闭了")
});

ws.write("通过可写流写入文件的内容");
ws.write("通过可写流写入文件的内容");
ws.write("通过可写流写入文件的内容");
ws.write("通过可写流写入文件的内容");

ws.end();