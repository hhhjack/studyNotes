// var str = "hello atguigu";
//
// var buf = Buffer.from(str);
// console.log(buf);

var buf2 = Buffer.alloc(10);
buf2[0] = 88;
buf2[1] = 255;
buf2[2] = 0xaa;
// buf2[10] = 15;
buf2[3] = 256;
console.log(buf2);