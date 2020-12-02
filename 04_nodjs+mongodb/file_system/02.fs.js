var fs = require("fs");

var fd = fs.openSync("hello.txt","w");

// console.log(fd);

fs.writeSync(fd, "今天天气真不错");

fs.closeSync(fd);