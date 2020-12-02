// 将其他模块汇集到主模块
let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');
let uniq = require('uniq');

module1.foo();

module2();

module3.foo();
module3.bar();

let result = uniq(module3.arr);
console.log(result);