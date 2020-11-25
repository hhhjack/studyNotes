# jQuery

## day01

### 1.jQuery简介

- jQuery是一款优秀的js库，用作查询

- 浏览器兼容

### 2.jQuery使用

- 下载：https://jquery.com/
  - 未压缩版本便于阅读
  - 压缩版本更小

### 3.jQuery入口函数

```js
$(document).ready(function(){
            alert("hello");
        })
```

- 原生js会等到dom和图片加载完毕才会执行
- jQuery只会等到dom加载完毕执行
- 原生js如果编写了多个入口函数，后面的会覆盖前面
- jQuery不会覆盖

### 4.jQuery入口函数其他写法

```js
        $(document).ready(function () {

        });
        jQuery(document).ready(function () {

        });

//推荐
        $(function () {
            alert("hello");
        });

        jQuery(function (){

        });
```

### 5.jQuery冲突

- 释放$使用权
  - 释放操作必须在编写其他jQuery代码之前
  - 释放之后不能再使用$
  - jQuery.noConflict();

- 自定义一个访问符号
  - var xx = jQuery.noConflict();

### 6.jQuery核心函数

- $();

- 可以接受的参数

  - 函数

  ```js
  $(function (){});
  ```

  - 字符串
    - 字符串选择器
    - 代码片段

  ```js
  $(function (){
  	alert("hello");
  	var $a = $(".box");
  	var $b = $("#box2");
  	
  	var $p = $("<p>我是段落<p>");
      $a.append($p);
  });
  ```

  - dom元素
    - 会被包装成一个jQuery对象返回给我们

  ```js
  $(function (){
  	var span = document.getElementsByTagName("span")[0];
  	var $span = $(span);
  });
  ```



### 7.jQuery对象

- jQuery对象是伪数组
- 有0到length-1的属性，并且有length属性

### 8.静态方法和实例方法

- 定义一个类

```js
function AClass(){
}
```

- 给这个类添加一个静态方法（直接添加给类）

```js
AClass.staticMethod();
```

- 给这个类添加一个实例方法

```js
AClass.prototype.instanceMethod = function(){
	alert("instanceMethod");
}
```

- 实例方法通过类的实例调用
- 创建一个实例（创建一个对象）

```js
var a = new Aclass();
//通过实例调用实例方法
a.instanceMethod();
```

### 9.each方法

```js
var arr = [1,3,5,7,9];
var obj = {0:1, 1:3, 2:5, length:5};

/*
	参数一：遍历元素
	参数二：当前遍历到的索引
	注意：
		原生forEach只能遍历数组，不能遍历伪数组
*/
//原生
arr.forEach(function (value, index){
    console.log(index,value);
});
//jQuery的each静态方法遍历数组
//可以遍历伪数组
$.each(obj, function(index,value){
    console.log(index, value);
});
```



### 10.jQuery-map方法

```js
var arr = [1,3,5,7,9];
var obj = {0:1, 1:3, 2:5, length:5};
 //原生js map
/*
	1.当前遍历到的元素
	2.当前遍历到的索引
	3.当前被遍历的数组
	注意：
		同forEach不能遍历伪数组
*/
arr.map(function(value, index, array){
    console.log(index,index,array);
});

/*
	1.要遍历的数组
	2.每遍历一个元素之后执行的回调函数
	回调函数参数：
		1.遍历到的元素
		2.遍历到的索引
	注意：
		可以遍历伪数组
*/
$.map(arr, function(value, index){
    console.log(index, value);
});

/*
	jQuery中forEach和map区别：
		each遍历谁返回谁；
		map返回空数组；
		
		each不支持在回调函数中对遍历数组进行处理；
		map可以通过return对遍历数组进行处理，生成一个新的数组进行返回；
*/
```



11.jQuery中的其他静态方法

- $.trim();
  - 作用：去除字符串两端的空格
  - 参数：需要去除空格的字符串
  - 返回值：去除空格之后的字符串
- $.isWindow();
  - 作用：判断传入对象是否为window对象
  - 返回值：true | false
- $.isArray();
  - 作用：判断传入对象是否为真数组；

- $.isFunction();
  - 作用：判断传入对象是否是一个函数
  - 注意：jQuery本质上是一个函数

### 12.静态方法holdReady方法

- 暂停入口函数的执行

- $.holdReady(true);//暂停
- $.holdReady(false);//恢复

### 13.jQuery内容选择器

- :contains(text)

  - ````js
    var $div = $("div:contains('我是div')");
    ````

  - 找到包含指定文本内容的指定元素

- :has(selector)

  - ```js
    var $div = $("div:has('span')");
    ```

  - 找到包含指定子元素的指定元素

- :empty

  - ```js
    var $div = $("div:empty");
    ```

  - 找到既没有文本内容也没有子元素的指定元素

- :parent

  - ```js
    var $div = $("div:parent");
    ```

  - 找到有文本内容或有子元素的指定元素

### 14.属性&属性节点

- 属性
  - 对象身上保存的变量
  - 对象.属性名称 = value; 对象.属性名称；
  - 对象[属性名称] = value; 对象[属性名称];
- 属性节点
  - 在编写HTML代码时，在标签中添加的属性就是属性节点
  - 在attributes属性中保存的所有内容都是属性节点

- 操作属性节点
  - dom元素.setAttributes(属性名称，值);
  - dom元素.getAttributes(属性名称)；

- 属性和属性节点区别
  - 任何对象都有属性，但只有dom对象才有属性节点

### 15.jQuery的attr方法

- attr(name|pro|key,value|fn)

  - 获取或者设置属性节点的值

  - 传递一个参数：获取属性节点的值

  - 传递两个参数：设置属性节点的值

  - 注意点：

    - 如果是获取：无论找到多少个元素，都只会返回第一个元素指定的属性节点的值
    - 如果是设置：找到多少个元素设置多少个，如果设置的属性节点不存在，则会自动新增

  - ```js
    $("span").attr("class","box");
    ```

- removeAttr(name)

  - 删除属性节点

  - 注意：会删除所有找到元素指定的属性节点

  - ```js
    $("span").removeAttr("class name");
    //可以同时删除多个属性节点
    ```

### 16.jQuery的prop方法

- prop方法

  - ```js
    $("span").eq(0).prop("demo","it666");
    $("span").eq(1).prop("demo","lnj");
    ```

  - ```js
    $("span").prop("demo");
    ```

  - 特点同attr一致

- removeProp方法

  - ```js
    $("span").removeProp("demo");
    ```

  - 特点同removeAttr方法一致

- 注意

  - prop方法不仅能操作属性，还能操作属性节点
- 官方推荐在操作属性节点时，具有true和false两个属性的属性节点，如checked\selected\disabled使用prop()，其他用attr()



## day02

### 17.jQuery操作class相关方法

- addClass(class | fn)
  - 添加一个类
  - 添加多个类，中间添加空格即可
- removeClass(class|fn)
  - 删除一个类
  - 多个类即用空格隔开
- toggleClass(class|fn)
  - 切换一个类，有就删除，没有就添加



### 18.jQuery文本值相关方法

- 设置html\获取html

  - ```js
    $("div").html("<p>我是段落<span>我是span</span></p>");
    $("div").html();
    ```

  - 和原生js中的innerHTML一模一样

- 设置text\获取text

  - ```js
    $("div").text("<p>我是段落<span>我是span</span></p>");
    $("div").text();
    ```

  - 和原生js中的innerTEXT一模一样

- 设置value\获取value

  - ```js
    $("input").val("请输入内容");
    $("input").val();
    ```

    

### 19.jQuery操作css样式方法

- 逐个设置

```js
$("div").css("width","100px");
$("div").css("height","100px");
$("div").css("background","red");
```

- 链式设置（一般不超过三个）

```js
$("div").css("width","100px").css("height","100px").css("background","red");
```

- 批量设置

```js
$("div").css({
	width: "100px",
	height: "100px",
	background: "red"
});
```

- 获取css样式值

```js
$("div").class("width");
```



### 20.jQuery位置和尺寸的操作方法

- width，不包括border

  - ```js
    $(".father").width();
    $(".father").width("100px");
    ```

- offset([coordinates])

  - 获取元素距离窗口的偏移位

  - ```js
    $(".son").offset().left;
    $(".son").offset({
        left: 10
    });
    ```

- position()

  - 获取元素距离定位元素的偏移位

  - 只能获取，不能设置

  - ```js
    $(".son").position().left;
    ```

  - ```js
    $(".son").css({
        left: "10px"
    });
    ```

- scrollTop方法

  - ```js
    $(".scroll").scrollTop();//获取偏移位
    $(".scroll").scrollTop(10js0);//设置偏移位
    ```

  - ```js
    //获取网页偏移位
    $("html").scrollTop()+$("body").scrollTop();
    //设置网页偏移位
    $("html,body").scrollTop(300);
    ```



### 21.jQuery事件

##### 1.事件类型

- eventName(fn);

  - ```js
    $("button").click(function(){});
    ```

  - 推荐，编码效率略高

  - 部分事件jQuery没有实现，所以不能添加

  - 可以同时添加多个相同或不同类型的事件，且不会被覆盖

- on(eventName, fn);

  - ```js
    $("button").on("click",function(){});
    ```

  - 所有js事件都可以添加

  - 也可以同时添加多个相同或不同类型的事件，且不会被覆盖

- off

  - ```js
    $("button").off();//移除所有事件
    $("button").off("click");//移除所有指定类型事件
    $("button").off("click",test1);//移除指定类型的指定事件
    ```

##### 2.jQuery事件冒泡和默认行为

- 什么是事件冒泡
  - 给儿子的事件传递给了父亲
- 如何阻止事件冒泡
  - 在儿子的回调事件当中return false;
  - event.stopPropagation();
- 什么是默认行为
  - a默认跳转
  - submit按钮默认提交数据
- 如何阻止默认行为
  - return false;
  - event.preventDefault();

##### 3.jQuery事件自动触发

- trigger()
  - 会触发事件冒泡
  - 会触发默认行为
  - a的默认行为触发需对内容用span包装，然后触发span事件
- triggerHandler()
  - 不会触发事件冒泡
  - 不会触发默认行为

##### 4.jQuery自定义事件

- 自定义事件不能通过event来添加，只能通过on来绑定
- 事件必须通过trigger来触发

##### 5.jQuery事件命名空间

- 事件必须通过on来绑定

- 事件通过trigger/triggerHandler来触发

- ```
  $(".son").on("click.zs",function(){});
  $(".son").on("click.ls",function(){});
  
  $(".son").trigger("click.zs");
  ```

##### 6.jQuery事件命名空间面试题

- ```js
  $(".father").on("click.ls",function(){
  	alert("fa click1");
  });
  $(".father").on("click",function(){
  	alert("fa click2");
  });
  
  $(".son").on("click.ls",function(){
  	alert("son click1");
  });
  
  $(".son").trigger("click.ls");
  //利用trigger触发子元素带命名空间的事件，那么父元素带相同命名空间的事件也会被触发，而父元素没有命名空间的事件不会被触发
  //son click1 
  //fa click1
  
  $(".son").trigger("click");
  //利用trigger触发子元素不带命名空间的事件，那么子元素和父元素所有相同类型的事件都会被触发
  ```

##### 7.jQuery事件委托

- 什么是事件委托
  - 请别人帮忙做事情，然后将做完的结果反馈给我们

- 在jQuery中，若通过核心函数找到的元素不止一个，那么添加事件的时候jQuery会遍历所有找到的元素给它们添加事件

- ```js
  $("ul").delegate("li","click",function(){
  	console.log($(this),html());
  });
  ```

##### 8.jQuery移入移出事件

- ```js
  $(".father").mouseover(function(){});
  $(".father").mouseout(function(){});
  ```

- mouseover/mouseout: 子元素被移入移出也会触发父元素的事件

- ```js
  $(".father").mouseenter(function(){});
  $(".father").mouseleave(function(){});
  ```

- 企业开发中推荐mouseenter/mouseleave, 子元素不会重新触发

- ````js
  $(".father").hover(function(){
  	console.log("father被移入了");
  }, function(){
  	console.log("father被移出了");
  });
  ````

- hover同时监听mouseenter/mouseleave, 若只添加一个function则移入移出同时监听



### 22.jQuery效果

##### 1.显示/隐藏/切换动画

- 显示动画

  - ```js
    $("div").show(1000, function(){
        alert("显示完毕");
    });
    ```

- 隐藏动画

  - ```js
    $("div").hide(1000, function(){
    	alert("隐藏完毕")；
    });
    ```

- 切换动画

  - ```js
    $("div").toggle(1000);
    ```

##### 2.滑动动画

- 展开动画

  - ```js
    $("div").slideDown(1000, function(){
        alert("展开完毕");
    });
    ```

- 收起动画

  - ```js
    $("div").slideup(1000, function(){
        alert("收起完毕");
    });
    ```

- 切换动画

  - ```js
    $("div").slideToggle(1000, function(){
        alert("切换完毕");
    });
    ```

p44