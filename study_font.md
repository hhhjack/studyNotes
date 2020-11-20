[TOC]



# 1.文档备注

1.* 重点

2.**困难

# 2.js

### 1.es6特性

##### 1.*let、const（变量声明）

let 定义的变量不会被变量提升，const 定义的常量不能被修改，let 和 const 都是块级作用域；
ES6前，js 是没有块级作用域 {} 的概念的。（有函数作用域、全局作用域、eval作用域）；
ES6后，let 和 const 的出现，js 也有了块级作用域的概念，前端的知识是日新月异的；

###### let

- let 只能声明一次 var 可以声明多次；

- let 不存在变量提升，var 会变量提升；

  ```js
  console.log(a);  //ReferenceError: a is not defined 
  let a = "apple";  
  console.log(b);  //undefined 
  var b = "banana";
  ```

###### const

- const 声明一个只读变量，声明之后不允许改变。意味着，一旦声明必须初始化，否则会报错；

- const 的本质: const 定义的变量并非常量，并非不可变，它定义了一个常量引用一个值。使用 const 定义的对象或者数组，其实是可变的；
  
  ```js
  // 创建常量对象 
  const car = {type:"Fiat", model:"500", color:"white"};  
  // 修改属性: 
  car.color = "red";  
  // 添加属性 
  car.owner = "Johnson";
  WRONG：
  const car = {type:"Fiat", model:"500", color:"white"}; 
  car = {type:"Volvo", model:"EX60", color:"red"};    // 错误
  ```
  
  ------
  
  

##### 2.模块化导入

import导入模块、export导出模块；

```js
// 全部导入
import people from './example'
 
// 将整个模块当作单一对象进行导入，该模块的所有导出都会作为对象的属性存在
import * as example from "./example.js"
console.log(example.name)
console.log(example.getName())
 
// 导入部分，引入非 default 时，使用花括号
import {name, age} from './example'
 
 
// 导出默认, 有且只有一个默认
export default App
 
// 部分导出
export class App extend Component {};
```

###### import

- 只读属性：不允许在加载模块的脚本里面，改写接口的引用指向，即可以改写 import 变量类型为对象的属性值，不能改写 import 变量类型为基本类型的值；
- 单例模式：多次重复执行同一句 import 语句，那么只会执行一次，而不会执行多次。import 同一模块，声明不同接口引用，会声明对应变量，但只执行一次 import；
- 静态执行特性：import 是静态执行，所以不能使用表达式和变量；

###### export default命令

- 在一个文件或模块中，export、import 可以有多个，export default 仅有一个；
- export default 中的 default 是对应的导出接口变量；
- 通过 export 方式导出，在导入时要加{ }，export default 则不需要；
- export default 向外暴露的成员，可以使用任意变量来接收；

------



##### 3.*数组

###### 数组创建

- Array.of(): 将参数中所有值作为元素形成数组;

- Array.from():将类数组对象或可迭代对象转化为数组;

- 类数组对象：一个类数组对象必须含有 length 属性，且元素属性名必须是数值或者可转换为数值的字符；

  ```js
  let arr = Array.from({  0: '1',  1: '2',  2: 3,  length: 3 }); console.log(); // ['1', '2', 3]
  
  // 没有 length 属性,则返回空数组 
  let array = Array.from({  0: '1',  1: '2',  2: 3, }); console.log(array); // []  
  
  // 元素属性名不为数值且无法转换为数值，返回长度为 length 元素值为 undefined 的数组   
  let array1 = Array.from({  a: 1,  b: 2,  length: 2 }); 
  console.log(array1); // [undefined, undefined]
  ```

- 转换可迭代对象

  - 转换map：

    ```js
    let map = new Map(); 
    map.set('key0', 'value0'); map.set('key1', 'value1'); 
    console.log(Array.from(map)); 
    // [['key0', 'value0'],['key1', 'value1']]
    ```

  - 转换set：

    ```js
    let arr = [1, 2, 3];
    let set = new Set(arr); 
    console.log(Array.from(set)); // [1, 2, 3]
    ```

  - 转换字符串：

    ```js
    let str = 'abc'; 
    console.log(Array.from(str)); // ["a", "b", "c"]
    ```

###### 扩展的方法

- 查找

  - find(): 
    查找数组中符合条件的元素,若有多个符合条件的元素，则返回第一个元素;

    ```js
    let arr = Array.of(1, 2, 3, 4); 
    console.log(arr.find(item => item > 2)); // 3
    ```

  - findIndex(): 
    查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引;

    ```js
    let arr = Array.of(1, 2, 1, 3); 
    // 参数1：回调函数 
    // 参数2(可选)：指定回调函数中的 this 值 
    console.log(arr.findIndex(item => item = 1)); // 0
    ```

- 填充

  - fill(value，start，end（默认为数据末尾）): 
    将一定范围索引的数组元素内容填充为单个指定的值;

  - copyWithin():
    将一定范围索引的数组元素修改为此数组另一指定范围索引的元素;

    ```js
    // 参数1：被修改的起始索引 （为负数时白哦是倒数
    // 参数2：被用来覆盖的数据的起始索引 
    // 参数3(可选)：被用来覆盖的数据的结束索引，默认为数组末尾 
    console.log([1, 2, 3, 4].copyWithin(0,2,4)); // [3, 4, 3, 4]
    ```

    

- 遍历

  - entries(): 遍历键值对；

    ```js
    for(let [key, value] of ['a', 'b'].entries()){
         console.log(key, value); } 
    // 0 "a" 
    // 1 "b"  
    
    // 不使用 for... of 循环 
    let entries = ['a', 'b'].entries();
    console.log(entries.next().value); // [0, "a"] 
    console.log(entries.next().value); // [1, "b"]  
    
    // 数组含空位 
    console.log([...[,'a'].entries()]); 
    // [[0, undefined], [1, "a"]]
    ```

  - keys(): 遍历键名；

    ```js
    for(let key of ['a', 'b'].keys()){
         console.log(key); } 
    // 0  1
    // 数组含空位 
    console.log([...[,'a'].keys()]); // [0, 1]
    ```

  - values(): 遍历键值；

- 包含

  - includes(): 数组是否包含指定值；
    注意：与 Set 和 Map 的 has 方法区分；Set 的 has 方法用于查找值；Map 的 has 方法用于查找键名。

    ```js
    // 参数1：包含的指定值 
    // 参数2：可选，搜索的起始索引，默认为0 
    [1, 2, 3].includes(1, 2); // false 
    // NaN 的包含判断 
    [1, NaN, 3].includes(NaN); // true
    ```

- 嵌套数组转一维数组

  - flat(n): 
    可选值：
      n为指定转换的嵌套层数，默认为1；
      Infinity不管嵌套多少层都全部转换为一维数组；
    自动跳过空位；

  - flatMap():"
    先对数组中每个元素进行了的处理，再对数组执行flat()方法；

    ```js
    // 参数1：遍历函数，该遍历函数可接受3个参数：当前元素、当前元素索引、原数组 
    // 参数2：指定遍历函数中 this 的指向 
    console.log([1, 2, 3].flatMap(n => [n * 2])); // [2, 4, 6]
    ```

- reduce()

  ```js
  const arr = [1,2,3,4]
  const sum = arr.reduce((prev, current) => {
  return prev * current
  })
  console.log(sum)
  //24
  ```

  


###### 扩展运算符

​	复制数组

```js
let arr = [1, 2],
    arr1 = [...arr];
console.log(arr1); // [1, 2]
 
// 数组含空位
let arr2 = [1, , 3],
    arr3 = [...arr2];
console.log(arr3); [1, undefined, 3]
```

​	合并数组

```js
console.log([...[1, 2],...[3, 4]]); // [1, 2, 3, 4]
```

------



##### 4.*对象

###### 对象字面量

- 属性的简介表示方法

  ```js
  const age = 12;
  const name = "Amy";
  const person = {age, name};
  person   //{age: 12, name: "Amy"}
  //等同于
  const person = {age: age, name: name}
  ```

- 方法名缩写

  ```js
  const person = {
    sayHi(){
      console.log("Hi");
    }
  }
  person.sayHi();  //"Hi"
  //等同于
  const person = {
    sayHi:function(){
      console.log("Hi");
    }
  }
  person.sayHi();//"Hi"
  
  //如果时Generator函数，则要在前面加一个星号
  const obj = {
    * myGenerator() {
      yield 'hello world';
    }};
  //等同于
  const obj = {
    myGenerator: function* () {
      yield 'hello world';
    }};
  ```

- 属性名表达式
  ES6允许用表达式作为属性名，但是一定要将表达式放在方括号内；

  ```js
  const obj = {
   ["he"+"llo"](){
     return "Hi";
    }
  }
  obj.hello();  //"Hi"
  ```

  注意点：属性的简洁表示法和属性名表达式不能同时使用，否则会报错;

  ```js
  const hello = "Hello";
  const obj = {
   [hello]
  };
  obj  //SyntaxError: Unexpected token }
   
  const hello = "Hello";
  const obj = {
   [hello+"2"]:"world"
  };
  obj  //{Hello2: "world"}
  ```

###### 对象的拓展运算符

​	拓展运算符（...）用于取出参数对象所有可遍历属性然后拷贝到当前对象。

- 基本用法

  ```js
  let person = {name: "Amy", age: 15};
  let someone = { ...person };
  someone;  //{name: "Amy", age: 15}
  ```

- 可用于合并两个对象

  ```js
  let age = {age: 15};
  let name = {name: "Amy"};
  let person = {...age, ...name};
  person;  //{age: 15, name: "Amy"}
  ```

- 注意点

  ```js
  /*
  自定义的属性和拓展运算符对象里面属性的相同的时候： 
  自定义的属性在拓展运算符后面，
  则拓展运算符对象内部同名的属性将被覆盖掉
  */
  let person = {name: "Amy", age: 15};
  let someone = { ...person, name: "Mike", age: 17};
  someone;  //{name: "Mike", age: 17}
  
  /*
  自定义的属性在拓展运算度前面，
  则变成设置新对象默认属性值
  */
  let person = {name: "Amy", age: 15};
  let someone = {name: "Mike", age: 17, ...person};
  someone;  //{name: "Amy", age: 15}
  
  /*
  拓展运算符后面是空对象、null或者undefined，
  没有任何效果也不会报错
  */
  let a = {...{}, a: 1, b: 2};
  a;  //{a: 1, b: 2}
  
  let b = {...null, ...undefined, a: 1, b: 2};
  b;  //{a: 1, b: 2}
  ```

  

###### 对象的新方法

- Object.assign(target, source_1,···)
  用于将源对象的所有可枚举属性复制到目标对象中；

  1. 基本用法

     ```js
     let target = {a: 1};
     let object2 = {b: 2};
     let object3 = {c: 3};
     Object.assign(target,object2,object3);  
     // 第一个参数是目标对象，后面的参数是源对象
     target;  // {a: 1, b: 2, c: 3}
     ```

     - 如果目标对象和源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性;
   - 如果该函数只有一个参数，当参数为对象时，直接返回该对象；当参数不是对象时，会先将参数转为对象然后返回;
     - 因为 null 和 undefined 不能转化为对象，所以会报错;
     - 当参数不止一个时，null 和 undefined 不放第一个，即不为目标对象时，会跳过 null 和 undefined ，不报错;
     
  2. 注意点
  
     assign 的属性拷贝是浅拷贝:
  
     ```js
     let sourceObj = { a: { b: 1}};
     let targetObj = {c: 3};
     Object.assign(targetObj, sourceObj);
     targetObj.a.b = 2;
     sourceObj.a.b;  // 2
     ```
  
     同名属性替换:
  
     ```js
     targetObj = { a: { b: 1, c:2}};
     sourceObj = { a: { b: "hh"}};
     Object.assign(targetObj, sourceObj);
     targetObj;  // {a: {b: "hh"}}
     ```
  
     数组的处理: 
  
     ```js
     Object.assign([2,3], [5]);  // [5,3]
     //会将数组处理成对象，所以先将 [2,3] 转为 {0:2,1:3} ，然后再进行属性复制，所以源对象的 0 号属性覆盖了目标对象的 0
     ```
  
- ### Object.is(value1, value2)

  用来比较两个值是否严格相等，与（===）基本类似。

  ```js
  Object.is("q","q");      // true
  Object.is(1,1);          // true
  Object.is([1],[1]);      // false
  Object.is({q:1},{q:1});  // false
  ```

  与（===）的区别

  ```js
  //+0不等于-0
  Object.is(+0,-0);  //false
  +0 === -0  //true
  //NaN等于本身
  Object.is(NaN,NaN); //true
  NaN === NaN  //false
  ```

  

------



##### 5.*箭头函数

------



##### 6.对象的继承

------



##### 7.模板字符串

------



##### 8.**promise

------

##### 9.新增数据类型

###### Map



###### Set



###### Generator



###### Symbol

------

##### 9.补充

###### 数组补充

数组缓冲区

- 数组缓冲区是内存中的一段地址。

- 定型数组的基础。

- 实际字节数在创建时确定，之后只可修改其中的数据，不可修改大小。

创建数组缓冲区

​	通过构造函数创建:

```js
let buffer = new ArrayBuffer(10); 
console.log(buffer.byteLength); // 10 
分割已有数组缓冲区 
let buffer = new ArrayBuffer(10); 
let buffer1 = buffer.slice(1, 3); 
console.log(buffer1.byteLength); // 2
```

视图

- 视图是用来操作内存的接口。

- 视图可以操作数组缓冲区或缓冲区字节的子集,并按照其中一种数值数据类型来读取和写入数据。

- DataView 类型是一种通用的数组缓冲区视图,其支持所有8种数值型数据类型。

  ```js
  // 默认 DataView 可操作数组缓冲区全部内容
  let buffer = new ArrayBuffer(10);
      dataView = new DataView(buffer); 
  dataView.setInt8(0,1);
  console.log(dataView.getInt8(0)); // 1
   
  // 通过设定偏移量(参数2)与长度(参数3)指定 DataView 可操作的字节范围
  let buffer1 = new ArrayBuffer(10);
      dataView1 = new DataView(buffer1, 0, 3);
  dataView1.setInt8(5,1); // RangeError
  ```

定型数组

- 数组缓冲区的特定类型的视图。

- 可以强制使用特定的数据类型，而不是使用通用的 DataView 对象来操作数组缓冲区。

创建

​	通过数组缓冲区生成

```js
let buffer = new ArrayBuffer(10), 
	view = new Int8Array(buffer); 
console.log(view.byteLength); // 10
```

​	通过构造函数

```js
let view = new Int32Array(10); 
console.log(view.byteLength); // 40 
console.log(view.length);     // 10  

// 不传参则默认长度为0 
// 在这种情况下数组缓冲区分配不到空间，创建的定型数组不能用来保存数据 
let view1 = new Int32Array(); 
console.log(view1.byteLength); // 0 
console.log(view1.length);     // 0  

// 可接受参数包括定型数组、可迭代对象、数组、类数组对象 
let arr = Array.from({  0: '1',  1: '2',  2: 3,  length: 3 }); 
let view2 = new Int16Array([1, 2]),    
    view3 = new Int32Array(view2),    
    view4 = new Int16Array(new Set([1, 2, 3])),    
    view5 = new Int16Array([1, 2, 3]),    
    view6 = new Int16Array(arr); 
console.log(view2 .buffer === view3.buffer); // false 
console.log(view4.byteLength); // 6 
console.log(view5.byteLength); // 6 
console.log(view6.byteLength); // 6
```

注意要点

​	length 属性不可写，如果尝试修改这个值，在非严格模式下会直接忽略该操作，在严格模式下会抛出错误。

```js
let view = new Int16Array([1, 2]);
view.length = 3;
console.log(view.length); // 2
```

​	定型数组可使用 entries()、keys()、values()进行迭代。

```js
let view = new Int16Array([1, 2]);
for(let [k, v] of view.entries()){
    console.log(k, v);
}
// 0 1
// 1 2
```

​	find() 等方法也可用于定型数组，但是定型数组中的方法会额外检查数值类型是否安全,也会通过 Symbol.species 确认方法的返回值是定型数组而非普通数组。concat() 方法由于两个定型数组合并结果不确定，故不能用于定型数组；另外，由于定型数组的尺寸不可更改,可以改变数组的尺寸的方法，例如 splice() ，不适用于定型数组;

```js
let view = new Int16Array([1, 2]);
view.find((n) > 1); // 2
```

​	所有定型数组都含有静态 of() 方法和 from() 方法,运行效果分别与 Array.of() 方法和 Array.from() 方法相似,区别是定型数组的方法返回定型数组,而普通数组的方法返回普通数组;

```js
let view = Int16Array.of(1, 2);
console.log(view instanceof Int16Array); // true
```

​	定型数组不是普通数组，不继承自 Array ;

```js
let view = new Int16Array([1, 2]);
console.log(Array.isArray(view)); // false
```

​	定型数组中增加了 set() 与 subarray() 方法。 set() 方法用于将其他数组复制到已有定型数组, subarray() 用于提取已有定型数组的一部分形成新的定型数组;

```js
// set 方法
// 参数1：一个定型数组或普通数组
// 参数2：可选，偏移量，开始插入数据的位置，默认为0
let view= new Int16Array(4);
view.set([1, 2]);
view.set([3, 4], 2);
console.log(view); // [1, 2, 3, 4]
 
// subarray 方法
// 参数1：可选，开始位置
// 参数2：可选，结束位置(不包含结束位置)
let view= new Int16Array([1, 2, 3, 4]), 
    subview1 = view.subarray(), 
    subview2 = view.subarray(1), 
    subview3 = view.subarray(1, 3);
console.log(subview1); // [1, 2, 3, 4]
console.log(subview2); // [2, 3, 4]
console.log(subview3); // [2, 3]
```

------



### 2.作用域

### 3.异步

### 4.闭包(封装)

函数节流、函数防抖

### 5.脚手架搭建



### 6.深拷贝、浅拷贝

参考：

https://www.jianshu.com/p/cf1e9d7e94fb

https://zhuanlan.zhihu.com/p/80922071

https://blog.csdn.net/qq_41635167/article/details/82943223

https://blog.csdn.net/weixin_37719279/article/details/81240658?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param

##### 1.基本数据类型

​	String，Boolean，Number，Undefined，Null，Symbol；

##### 2.引用数据类型

​	Object(Array，Date，RegExp，Function)；

##### 3.基本数据类型和引用数据类型区别

1. ​	保存位置不同：
   基本数据类型保存在栈内存中；引用数据类型保存在堆内存中，然后在栈内存中保存了一个对堆内存中实际对象的引用，即数据在堆内存中的地址，JS对引用数据类型的操作都是操作对象的引用而不是实际的对象，如果obj1拷贝了obj2，那么这两个引用数据类型就指向了同一个堆内存对象，具体操作是obj1将栈内存的引用地址复制了一份给obj2，因而它们共同指向了一个堆内存对象；

   **为什么基本数据类型保存在栈中，而引用数据类型保存在堆中？**
    1）堆比栈大，栈比堆速度快；
    2）基本数据类型比较稳定，而且相对来说占用的内存小；
    3）引用数据类型大小是动态的，而且是无限的，引用值的大小会改变，不能把它放在栈中，否则会降低变量查找的速度，因此放在变量栈空间的值是该对象存储在堆中的地址，地址的大小是固定的，所以把它存储在栈中对变量性能无任何负面影响；
    4）堆内存是无序存储，可以根据引用直接获取；


   按引用访问：js不允许直接访问保存在堆内存中的对象

2. 基本数据类型使用typeof可以返回其基本数据类型，但是NULL类型会返回object，因此null值表示一个空对象指针；引用数据类型使用typeof会返回object，此时需要使用**instanceof**来检测引用数据类型；

3. 定义引用数据类型需要使用new操作符，后面再跟一个构造函数来创建；

   ```js
   //1）使用new操作符创建对象；
   var obj1 = new Object();
   obj1.a = 1;
   
   //2）使用对象字面量表示法创建对象；
   var obj1 = {
     a: 1,
     b: 2
   }
   
   //3）可以通过点表示法访问对象的属性，也可以使用方括号表示法来访问对象的属性；
   ```

   

4. ES6新增数据类型：Map，Set，Generator，Symbol

5. 基本包装类型：Boolean,Number,String

   - 转换为数值：parseInt()专门用于把字符串转换成数值,Number()用于任何类型；
   - 非字符转换成字符：toString()；
   - 数组转成字符：join()；

   - 字符串转换成数组：split()；

##### 4.js浅拷贝&深拷贝

1. 概念
   浅拷贝和深拷贝都只针对于引用数据类型，浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存；但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象；

2. 区别：浅拷贝只复制对象的第一层属性、深拷贝可以对对象的属性进行递归复制；

3. Object.assign()实现浅拷贝及一层的深拷贝

   ```js
   let obj1 = {
      a: {
        b: 1
      },
      c: 2
   }
   let obj2 = Object.assign({},obj1)
   obj2.a.b = 3;
   obj2.c = 3
   console.log(obj1.a.b); // 3
   console.log(obj2.a.b); // 3
   console.log(obj1.c); // 2
   console.log(obj2.c); // 3
   ```

   

##### 5.深拷贝的实现

​	引用类型目前有六种：object，array，date，regexp，function，err；

下面的两种方法只能实现object，array的深拷贝；

1. 迭代递归法

   ```js
   function isObject(o) {
       return (typeof o === 'object' || typeof o === 'function') && o !== null
   }
   // 迭代递归法：深拷贝对象与数组
   function deepClone(obj) {
       if (!isObject(obj)) {
           throw new Error('obj 不是一个对象！')
       }
    
       let isArray = Array.isArray(obj)
       let cloneObj = isArray ? [] : {}
       for (let key in obj) {
           cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
       }
    
       return cloneObj
   }
   ```

   

2. 序列化反序列化法
   使用JSON对象的parse和stringify方法来实现深拷贝

   ```js
   function deepClone(obj){
       let _obj = JSON.stringify(obj),
           objClone = JSON.parse(_obj);
       return objClone
   }    
   let a=[0,1,[2,3],4],
       b=deepClone(a);
   a[0]=1;
   a[2][0]=1;
   console.log(a,b);
   //只能深拷贝对象和数组
   ```

3. lodash中深拷贝的实现
   著名的 lodash 中的 cloneDeep 方法同样是使用 Reflect 法实现的，支持的种类更多（array、object、date、regexp），但 function 和 error 仍然不可拷贝。
   （https://github.com/lodash/lodash/blob/master/.internal/baseClone.js）
   
4. 待补充
   浅拷贝是拷贝一层，深层次的对象级别的就拷贝引用；深拷贝是拷贝多层，每一级别的数据都会拷贝出来；

5. 

------

# 3.webpack

# 4.css

### 1.选择器及优先级

​	样式冲突

​        \- 当我们用不同的选择器选择相同的元素，并且为相同的样式设置不同的值时，此时就发生了样式的冲突

​      发生样式冲突时，应用哪个样式由选择器的权重（优先级）决定



​      选择器的权重

​        内联样式（行内样式） 1,0,0,0

​        id选择器       0,1,0,0

​        类和伪类选择器    0,0,1,0

​        元素选择器      0,0,0,1

​        通配选择器      0,0,0,0

​        继承的样式      无优先级



​      比较优先级时，需要将所有的选择器的优先级进行相加计算，最后由新阿基越高，则越优先显示（分组选择器时单独计算的）

​        选择器的累加不会超过器最大的数量级，类选择器再高也不会超过id选择器

​        如果优先级计算后相等，此时则优先使用靠下的样式



​      可以在某一个样式的后面添加!important，则此时样式会获取到最高的优先级，甚至超过内联样式，

​        注意： 在开发中这个玩意一定要慎用！

# 5.网络协议

### 1.http

https://cloud.tencent.com/developer/news/398192

### 2.tcp

# 6.java

### 1.StringBuilder、StringBuffer、String区别

### 2.抽象类和接口的区别

https://www.jianshu.com/p/c4f023d02f0c

### 3.jvm垃圾回收机制

https://zhuanlan.zhihu.com/p/159200599

### 4.进程、线程、线程池



# 7.浏览器数据存储

### 1.cookie

（参考：

​	https://www.jianshu.com/p/6fc9cea6daa2

​	https://blog.csdn.net/qq_35372458/article/details/109134513

​	

##### 含义

​	Cookie，有时也用其复数形式 [Cookies](https://baike.baidu.com/item/Cookies/187064)。类型为“小型文本文件”，是某些网站为了辨别用户身份，进行[Session](https://baike.baidu.com/item/Session/479100)跟踪而储存在用户本地终端上的数据（通常经过加密），由用户[客户端](https://baike.baidu.com/item/客户端/101081)计算机暂时或永久保存的信息 [百度百科]

​	HTTP协议本身是无状态的。什么是无状态呢，即服务器无法判断用户身份。Cookie实际上是一小段的文本信息（key-value格式）。

##### 作用

​	客户端向服务器发起请求，如果服务器需要记录该用户状态，就使用response向客户端浏览器颁发一个Cookie。客户端浏览器会把Cookie保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该Cookie一同提交给服务器。服务器检查该Cookie，以此来辨认用户状态。

##### 工作机制

​	当用户第一次访问并登陆一个网站的时候，cookie的设置以及发送会经历以下4个步骤：

1. 客户端发送一个请求到服务器
2. 服务器发送一个httpResponse响应到客户端，其中包含Set-Cookie的头部
3. 客户端保存cookie，之后向服务器发送请求时，httpRequest请求中会包含一个Cookie的头部
4. 服务器返回响应数据

##### 基本属性

##### 如何使用



### 2.localStorage

### 3.sessionStorage

# 8.react

# 9.vue

# 10.nodejs

# 11.面试题总结

### 1.cookies & session区别

1. 存储位置：cookies数据放在客户的浏览器上，session数据放在服务器上；
2. 安全性：cookie不是很安全，别人可以分析存放在本地的cookie并进行cookie欺骗，session更安全；
3. 性能：session会在一定时间内保存在服务器上，当访问增多，会比较占用你服务器的性能，为了减轻服务器性能方面，优先使用cookie；
4. 限制：单个cookie保存的数据不能超过4k，很多浏览器都限制一个站点最多保存20个cookie

### 2.vue

https://zhuanlan.zhihu.com/p/92407628

##### 1.vue优点

1.由国人开发，中文文档，不存在语言障碍，利于理解和学习；

2.轻量级框架； 只关注图层； 是一个构建数据的视图集合；

3.双向数据绑定

4.组件化

5.数据、视图、结构分离；

6.虚拟dom

##### 2.vue父组件



### 3.AMD,CMD,CommonJS三者的差异

1. 它们三者都是js模块化开发的标准
2. CommonJS主要针对的是服务端，AMD/CMD主要针对的是浏览器端（服务器端一般采用同步加载文件，但浏览器端要保证效率需要异步加载，这就需要一个预处理，提前将所需要的模块文件并行加载好）
3. amd/cmd虽都是并行加载js文件，但amd是预加载，在并行加载js文件同时还会解析执行该模块；而cmd是懒加载，也是也开始就加载js文件，但到选哟的时候才会执行。
4. amd优点：加载快，尤其是遇到多个大文件；缺点：并行加载，异步处理，加载顺序不一定。
5. cmd优点：因为在使用时才会加载，所以执行顺序可控；缺点：执行等待时间会叠加，因为每个文件执行时是同步执行的。

### 4.跨域

### 5.http

1. http组成：请求行，消息报头，请求正文
2. get、post区别：
   - get重点在从服务器上获取资源，post发送数据
   - get传输数据通过url请求，过程用户可见；post通过http post机制，将字段与对应值封存在请求试题中发送给服务器，用户不可见；
   - 
3. 

### 6.vue路由