# 初识JavaScript

官方解释：JavaScript是一种基于对象和事件驱动的客户端脚本语言，最初的设计是为了检验HTML表单输入的正确性，起源于Netscape公司的LiveScript语言。

## 发展历史

Netscape和sun公司的开发联盟，名字由LiveScript改为JavaScript。

## 组成

完整的JavaScript 组成由

1. ECMAScript（语法）

   核心语言的语法。

2. Browser Object（DOM、BOM）（特性）

   DOM: 访问和操作网页内容的方法与接口。

   BOM: 提供与浏览器交互的方法和接口，比如打开浏览器窗口、缩放等。

![1571367331995](.\media\1571367331995.png)

## 在HTML中使用使用JavaScript

可以在HTML `<head>`、`<body>`标签中使用 `<script>`嵌入JavaScript脚本。



# JS语法、变量

## 注释

单行注释 `//`

多行注释 `/**/`

语句结束使用分号`;`，如果省略，则由解析器确定语句的结尾。

**ECMAScript 中的一切（变量、函数名和操作符）都区分大小写。**

## 标识符

变量、函数、属性的名字，或者函数的参数。

### 命名规则

1. 由字母、数字、下划线、美元符组成
2. 不能以数字开头
3. 不能使用该关键字、保留字

## 变量

ECMACcript的变量是 **松散类型**，可以用来保存任何类型的数据，也就是说变量本身是没有类型的，类型是由变量的值来决定的。每个变量只是一个用于保存值得占位符而已。

### 声明变量 var

 `var 变量名;`

一次声明多个变量，使用逗号隔开：

`var id, sex, age, name = "marry";`

### 变量赋值

`var 变量名 = 值;`	`变量名 = 值`



# 数据类型

ECMAScript 有5种基本数据类型，1种复杂数据类型。

![1571368312117](.\media\1571368312117.png)

## typeof 检测变量类型

语法： `typeof 变量` 、 `typeof(变量)`

返回值： string/number/boolean/object/undefined/function

## undefined	没有定义

这种数据类型只有一个值，就是undefined。

一般而言，不存在需要显式地把一个变量设置为undefined字的情况。

举个例子，`var name;`  这里声明了name变量，但是没有赋值，这个时候变量name的数据类型就是undefined。

## null	空

1. null值表示一个空的指针对象。
2. 如果定义的变量准备在将来用于保存**对象**，那么最好将改变量初始化为null而不是其他值。

**说明**： undefined值是派生自null值的，所以undefined == null的返回结果是true。

## Number

表示整数 和 浮点数

### NaN

NaN： 即非数值（Not a Number）是一个特殊的number数值。举个例子： `18-"abc"`，返回的结果就是NaN，本来是要返回数值的值，但是由于吗，某些原因返回不了数值类型的值，这个时候就会返回NaN。

`typeof NaN;`  返回number

**NaN说明：**

1. 任何涉及NaN的操作（例如NaN/10），都会返回NaN。
2. NaN与任何值都不相等，包括NaN本身。

**isNaN(n)**: 检测n是否是 "非数值"，返回值： boolean.

**说明：** isNaN() 对接收的数值，先尝试转换为数值，再检测是否为非数值。举个例子：`isNaN("18");` isNaN会先尝试把字符串类型的 "18" 转换成数值类型，发现可以转，就先转换再判断，返回了false.

### number数值转换

1. Number() - 强制转换

   ```javascript
   var id = "18";
   id = Number(id);  // 强制转换为18
   // 如果把非数字字符串强制转换为number，就会返回 NaN
   ```

2. parseInt() -  会忽略字符串前面的空格，直至找到第一个非空格字符。

   ```javascript
   var topval = "28px";
   console.log(top - 10); // NaN，不能减
   var topval = parseInt("28px");  // 转换成整型
   // 但是必须要是以数字开头 才能提取，不是数字开头的话就会返回 NaN。
   ```

   第二个参数是 转换成多少进制，如： `parseInt("0xf", 16);`

3. parseFloat() - 从第一个字符开始解析每个字符，直至遇见一个无效的浮点数学符为止

   说明：除了第一个小数点有效外，parseFloat()与parseInt()的第二个区别在于它始终都会忽略前导的零。

   ```javascript
   var d = parseFloat("12.34px");  // 12.34
   var d = parseInt("12.34px");  // 12
   
   var d = parseFloat("12.34.56px");  // 12.34
   
   var e = parseFloat("0123");  // 123   忽略了0
   var e = parseInt("0123");  // 123   忽略了0
   ```



## String 字符串

String类型用于表示由零个或多个16位Unicode字符组成的字符序列，即字符串。字符串可以由双引号（" "）或单引号（' '）表示。

 

### toString()与 String()

语法： str.toString(); 将str转换为字符串， 返回值：str的一个副本，参数：str是要转换的内容，可以是数值、布尔值、对象和字符串。



说明：在不知道要转换的值是不是null或者undefined的情况下，还可以使用String()函数，它能够将任何类型的值转换成字符串。



## boolean

有两个值， 真:true  ； 假: false

1. 除0之外所有数字，转换为布尔型都为true
2. 除 ""之外的所有字符，转换为布尔型都为true
3. null、undefined转换为布尔型为false



# 表达式与操作符

## 表达式

将同类型的数据（如常量、变量、函数等），用运算符号按一定的规则连接起来的、有意义的式子称为表达式。

## 操作符

### 算数操作符

所有的算数操作符最后返回的都是number

在进行计算的时候，会把字符串类型的数字转换成数字，也就是会进行隐式类型转换。

+、-、*、/、%

`+` 对数字是相加的作用，对字符串是有连接的作用

递增

​	++a 先返回递增之后的a的值

​	a++先返回a的原值，再返回递增之后的值

递减

​	同递增

### 赋值操作符

简单赋值： `=`

复合赋值：`+=`、`-=`、`*=`、`/=`、`%=`

### 比较操作符

返回值：boolean

`>` 、 `<` 、 `>=` 、 `<=` 、 `==` 、 `===`、 `!=` 、 `!==`

==： 相等，只比较值是否相等

===： 全等，比较值得同时比较数据类型是否相等

!==： 不相等，比较值是否不相等

!===： 不全等，比较值得同事比较数据类型是否不相等

```javascript
null == undefinded;  // true
null === undefinded;  // false
```

### 三元操作符

语法： `条件 ? 执行代码1 : 执行代码2`，当条件成立时执行代码1，当条件不成立时执行代码2

### 逻辑操作符

`&&` 与、  `||`  或、 `!`  非

&& 与，两个条件都成立才为true，有一个不成立就是false

||或，两个条件都不成立才为false，有一个成立就是true

!非，取反

逻辑操作符在操作 非布尔 类型的数据的时候，返回的就不一定是 布尔 类型的值了

1. 如果第一个操作数不是布尔类型的，被隐式转换后为true，那么就返回 第二个操作数的值

   ```javascript
   80 && 50  // 55
   "hello" && 65 && "abc"  // "abc"
   ```

2. 如果第一个操作数隐式类型转换后为false，则返回第一个操作数

   ```javascript
   0 && 50  // 0
   "" && 50  // 空字符串
   ```

3. 如果有一个操作数是null，则返回null

4. 如果有一个操作数是NaN，则返回NaN

5. 如果有一个人操作数是undefined，则返回undefined

逻辑与、逻辑或，都是 **短路操作**，即第一个条件如果可以决定结果，那么就不会再往下面继续执行了。

#### ! 逻辑非

1. 无论操作数是什么数据类型，逻辑非都会返回一个布尔值

2. !! 同时使用两个逻辑非操作符时：

   第一个逻辑非操作会基于无论什么操作数返回一个布尔值

   第二个逻辑非则对该布尔值求反



# JS流程控制语句

## if 

做判断，语法：

```javascript
// 单分支语句
if(condition条件){
    statement1;
}
// 双分支语句
if(condition条件){
    statement1;
}else{
    statement2;
}
// 多分支，js支持else if
if(condition){
    statement1;
}else if(condition){
    statement2;
}else{
    statement3;
}
```

## switch语句

语法：

```javascript
switch(expression){
    case value:statement
    break;
    case value:statement
    break;
    ...
    default:statement;
}
```



## for循环

语法：

```javascript
for(语句1;语句2;语句3){
    // 被执行的代码块;
}
/*
语句1：在循环（代码块）开始前执行
语句2：定义运行循环（代码块）的条件
语句3：在循环（代码块）已被执行之后执行
*/
// 例子
for(var i=1;i<=100;i++){
    console.log(i);
    }
```



## while循环

语法：

```javascript
while(条件){
    需要执行的代码;
}
// 例子
var i = 1;
while(i<=100){
    wocument.write(i + '<br />');
    i++;
}
```

## do-while 

语法：

```javascript
do {
    需要执行的代码;
}while(条件);
// 这种语法的训话你至少要被执行一次，先执行，再判断。
```



## break

立即退出循环

## continue

结束本次循环，继续开始下一次



# 函数

## 作用

通过函数可以封装任意多条语句，而且可以在任何地方、任何时候调用执行。

## 定义

使用`function` 关键字声明，后面跟一组参数以及函数体，语法如下：

```javascript
function functionName([arg0, arg1,...,argn]){
    statements
}
/* 说明：
1. functionName 是要定义的函数名，属于标识符，遵从标识符名称定义规则
2. []中的agr* 为函数的参数，[]里面的内容不是必须的，不是语法
*/
// 例子
function muFun(){
    alert("我是一个函数");
}
```

## 调用

语法：

```javascript
函数名([arg0, arg1,...,argn])
```

## 返回值

任何函数通过`return`语句，后面跟着返回的值来实现返回值

```javascript
function add(num1, num2){
    var sum = num1+num2;
    return sum;
}
var s = add(1, 2);
// return 的值就保存在了s里
/* 说明
1. 函数会在执行完return语句之后停止并立即退出
2. return语句也可以不带有任何返回值，用于提前停止函数执行又不需要返回值的情况
*/
```

## 参数

所有的参数，在函数内都是数组的形式，也就是arguments对象来管理参数。

ECMAScript中的参数在内部用一个数组来表示，在函数体内通过argument对象来访问这个数组参数

说明：

1. argument对象只是与数组类似，并不是Array的实例。
2. []语法访问它的每一个元素
3. length属性确定传递参数的个数

```javascript
function inner(num1, num2){
    console.log(num2);  // undefinded
}
inner(10);

function inner(num1, num2){
    // arguments
    console.log(arguments.length);  // 2
    console.log(arguments[0]);  //第一个参数
    console.log(arguments[1]);  //第二个参数
    console.log(arguments[2]);  //undefined，因为没有传第三个参数
}
inner(10, 5);
```

在函数内部可以动态修改arguments对象里面的值，但是如果是JS的严格模式的话，就修改不了了。

### arguments对象的练习题，求任意一组数的平均值

面试的时候经常遇到

```javascript
// 求任意一组数的平均值
function getAvg(){
	// 对所有参数进行求和
	var sum = 0; len = arguments.length;
	for(var i=0;i<len;i++){
		sum+=arguments[i]
	}
	console.log(sum/len);
	return sum/len;
}

var avg = getAvg(67, 89, 154);
```



# JS中的内置对象

JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...

可以理解成浏览器自己封装好的对象，我们可以直接调用。

先来学Array、String、Math、Date四个。

## Array

ECMAScript中的数组里面的每一项都可以保存任意类型的数据，数组的大小（长度）可以自动增长。

数组主要是用来存储一组数据的。

### 创建数组

1. 使用Array构造函数

   `new Array()`，小括号说明： 可以传入数组的长度、或者直接把组成项传进去。

   ```javascript
   // 创建数组
   var colors = new Array();  // []
   // 传入数组的长度
   var colors = new Array(3);  // []
   // 传入数组的包含项
   var colors = new Array(1, 3, 6, 9);  // [1, 3, 6, 9]
   ```

2. 使用数组字面量表示法

   由一对包含数组项的方括号[]表示，多个数组项之间以逗号隔开。

   ```javascript
   var colors = ['red', 'yellow', 'green']
   ```

   ### 数组的读写

   读取和设置值时，使用方括号[]并提供相应的索引。

   说明：索引是从0开始的正整数。

   `console.log(cols[1]); ` // 读取cols这个数组中索引为1的值

   同样的，如果取的索引值大于数组的长度的话，就会取到undefined

   ### 数组长度

   array.length

   获取数组array的长度，返回值：number

   1. 通过设置length可以从数组的末尾移除项或向数组中添加新项。
   2. 把一个值放在超出当前数组大小的位置上时，会重新计算数组长度值，长度等于最后一项索引加1。

   ### 数组的 栈方法

   1. push()

      `arrayObject.push(newele1, newele2, ..., neweX)` 

      功能：把它的参数顺序添加到arrayObject的**尾部**

      返回值：把指定的值添加到数组后的新长度。

      ```javascript
      var  colors = newArray("red", "green");
      var len = colors.push("blue", "yellow", "black");  // 5
      console.log(colors);
      ```

   2. unshift()

      `arrayObject.unshift(newele1, newele2, ..., neweX)`

      功能：把它的参数顺序添加到arrayObject的**开头**

      返回值：把指定的值添加到数组后的新长度

   3. pop()

      `arrayObject.pop()`

      功能：arrayObject的**最后一个**元素

      返回值：被删除的那个元素

   4. shift()

      `arrayObject.shift()`

      功能：arrayObject的**第一个**元素

      返回值：被删除的那个元素

### join  数组转换字符串

`arrayObject.join(separator)`

功能：用于把数组中的所有元素放入一个字符串

返回值：字符串

```javascript
var nums = [2,4,5];
var str = nums.join();  // "2,4,5"

var str = nums.join('-');  // "2-4-5"
```

### reverse 数组重排序

`arrayObject.reverse()`

功能：用于颠倒数组中元素的顺序

返回值：数组

```javascript
var nums = [2,4,5];
nums.reverse();  // [5, 4, 2]
```

### sort 数组排序

`arrayObject.sort(sortby)`

功能：用于对数组的元素进行排序

返回值：数组

说明：

1. 即使数组中的每一项都是数值，sort()方法比较的也是字符串
2. sort()方法可以接收一个比较函数作为参数

```javascript
var words = ["border", "left", "color"];
console.log(words.sort());  // ["border", "color", "left"] 按照首字母排序
var nums = [88,9,23,12,15];
// sort 是把每一个数组项都调用了toString转成了字符串
nums.sort();  // [12,15,23,88,9]    按字符串来比较的

// 降序
nums.sort(function(a,b){return b-a});
// 升序
nums.sort(function(a,b){return a-b});
```

### concat 连接两个或多个数组

`arrayObject.concat(arrayX,arrayX,...,ArrayX)`

功能：用于连接两个或多个数组

返回值：数组

```javascript
var arr1=["a", "b", "c"], arr2=["d","e",1,3],arr3;

//concat
arr3 = arr1.concat(arr2);  // 把arr1和arr2连接在一起形成arr3
console.log(arr3);  // ["a", "b", "c", "d", "e", 1, 3]
```

### slice 截取

从已有的数组里返回一些元素

`arrayObject.slice(start, end)`

功能：从已有的数组中返回选定的元素

参数：

start（必需）规定从何处开始选取，如果是负数，则从数组尾部开始算起

end(可选)规定从何处结束选取，是数组片段结束处的数组下标

说明：

1. 如果没有指定end，切分的数组包含从start到数组结束的所有元素
2. 如slice方法的参数中有一个负数，则用数组长度加上该数来确定相应的位置

返回值：

数组

### splice 操作数组

`arrayObject.splice(index,count)`

#### 删除：

功能：

删除从index处开始的零个或多个元素

返回值：

含有被删除的元素的数组

说明：

count是要删除的项目数量，如果设置为0，则不会删除项目。

如果不设置，则删除从index开始的所有值

```javascript
var arr = ["a", "b", "c", "d", "e", "f"];
var delArr = arr.splice(2, 2);
console.log(arr);  // (4) ["a", "b", "e", "f"]
console.log(delArr);  // (2) ["c", "d"]
```

#### 插入

`arrayObject.splice(index,0,item1,...,itemX)`

功能：

在指定位置插入值

参数：

index：起始位置

0:要删除的项数

item1...itemX:要插入的项

返回值：

空数组，操作原数组

```javascript
		var arr = ["a", "b", "c", "d", "e", "f"];
		var insertArr = arr.splice(3,0,"m","n");
		console.log(arr);  // (8) ["a", "b", "c", "m", "n", "d", "e", "f"]
		console.log(insertArr);  // []
```

#### 替换

`arrayObject.splice(index,count,item1,...,itemX)`

功能：

在指定位置插入值，且同时删除任意数量的项

参数：

Index：起始位置

count：要删除的项数

item1...itemX：要插入的项

返回值：从原数组中删除的项（如果没有删除任何项，则返回空数组）

```javascript
var repalceArr = arr.splice(1,2,"x", "y", "z");  // 从索引1开始，删除2个，再把后面的插入进去
console.log(arr);  // (7) ["a", "x", "y", "z", "d", "e", "f"]
console.log(repalceArr);   // (2) ["b", "c"]
```

### 下面两个是ECMAScript5中新增的数组方法

说明：

1. 在比较第一个参数与数组中的每一项时，会使用全等操作符，即要求查找的项必须严格相等

2. 数组的位置方法是ECMAScript5为数组实例新增的，所以支持的浏览器有：

   > IE9 、Firefox、Safari、Opera、Chrome

### indexOf()

`arrayObject.indexOf(searchvalue, startIndex)`

功能：

从数组的开头（0）开始向后查找

参数：

searchvalue：必须，要查找的项；

startIndex：可选，起点位置的索引。

返回值：

number，查找的项在数组中的第一个位置，没有找到的情况下返回-1

```javascript
var nums = [1,7,5,7,8,1,6,9];
var pos = nums.indexOf(7);
var pos2 = nums.indexOf(99);
console.log(pos);  // 1
console.log(pos2);  // -1

var pos = nums.indexOf(7, 3);  // 设置了第二个参数：起始位置
console.log(pos);  // 3
```

### lastindexOf

`arrayObject.lastIndexOf(searchvalue, startIndex)`

功能：

从数组的末尾开始向前查找

参数：

searchvalue： 必须，要查找的项

startIndex：可选，起点位置的索引

返回值：

number，查找的项在数组中的位置，没有找到的情况下返回-1

### 如果想兼容IE9以下浏览器，自己封装方法：

```javascript
function ArrayIndexOf(arr, value){
    // 检测value在arr中出现的位置
    for(var i=0,i<arr.length,i++ ){
        if(arr[i]===value){
            return i;
        }
    }
    return -1;
}
```

## String

### 字符串 检索 方法

#### charAt()

语法：

`stringObject.charAt(index)`

功能：

返回stringObject中index位置字符的字符编码

说明：

从 **ECMAScript5** 中开始可以使用“方括号加字符索引“来访问字符串中特定的字符，但是IE7及更早的浏览器会返回undefined。

```javascript
	<script type="text/javascript">
		var str = "hello world";
		console.log(str[1]);  // e  ES5 新增，IE7以下不支持
		console.log(str.charAt(1)); // e 兼容性更好
		console.log(str.charAt(11)); // '' 取不到就返回空字符串

		console.log(str.charCodeAt(1));  // 101 返回的是编码

	</script>
```

#### indexOf()

语法：

`stringObject.indexOf("o");`

功能：

从一个字符串中搜索给定的子字符串，返回子字符串的位置

返回值：

说明：

如果没有找到该子字符串，则返回-1

```javascript
var email = "marry@163.com";
console.log(email.indexOf("@"));  // 5
console.log(email.indexOf("z"));  // -1

// 同样可以检测一个子 字符串，不一定非要是单个的字符
console.log(email.indexOf("rr"));  // 2
console.log(email.indexOf("aa"));  // -1
// 并且只会检测第一个出现的位置，后面的就不再会去检测了
```

#### lastIndexOf()

语法：

`string.Object.lastIndexOf("o")`

功能：

从一个字符串中搜索给定的子字符串，返回子字符串的位置，效果同 indexOf，只不过是从字符串的结尾开始搜索。

返回值：

数值

说明：

如果没有找到该子字符串，则返回-1



### 字符串 截取 方法

#### slice()

语法：

`stringObject.slice(start, end);`

功能：

截取子字符串。

参数说明：

1. start：必需，指定子字符串的开始位置
2. end：可选，表示子字符串到哪里结束，end本身不在截取范围之内，省略的时候截取至末尾
3. 当参数为负数时，会将传入的负值与字符串的长度相加。

```javascript
var str = "hello world";

console.log(str.slice(7, 10));  // orl
console.log(str.slice(7));  // orld
console.log(str.slice(-3));  //  11 + -3 = 8  rld
console.log(str.slice(10, 7));  // ''
```

#### substring()

说明： 

语法及功能同slice()完全一样

区别在于：

1. 当参数为负数时，自动将参数转换为0.
2. substring() 会将较小的数作为开始位置，将较大的数作为结束位置。

```javascript
var str = "hello world";

console.log(str.substring(1, 4));  // ell
console.log(str.substring(-7, 5));  // hello  遇到负数就会转换为0
console.log(str.substring(2, -5));  // (0, 2)  he
```



#### substr()

语法：

`stringObject.substr(start, len);`

功能：

截取字符串

参数说明：

1. start，必需，指定子字符串的开始位置。
2. len：可选，表示截取的字符总数，省略时截取至字符串的末尾
3. 当start为负数时，会将传入的负值与字符串的长度相加
4. 当len为负数时，返回空字符串

```javascript
var str = "hello world";

console.log(str.substr(6, 3));  // wor
console.log(str.substr(-5, 4));  // worl
console.log(str.substr(3, -4));  // ''
```

### 字符串方法综合应用

编写js函数，用于获得输入参数的后缀名，如输入abc.txt，返回.txt

```javascript
// 获取扩展名
var url = "index.html";
function getFileFormat(fileName){
	var indexCode = fileName.lastIndexOf(".");
	if (indexCode == -1){return undefined;}
	return fileName.slice(indexCode);
}

var formatName = getFileFormat(url);
console.log(formatName);  // .html
```

### split()

语法：

`string.Object.split(separator);`

功能：

把一个 字符串 分割成 字符串数组 。

返回值：

Array

说明：

separator：必需，分隔符

```javascript
// split
var str = 'welcome-to-beijing';
strArray = str.split('-');
console.log(strArray);  // (3) ["welcome", "to", "beijing"]
```

### replece()

语法：

`stringObject.replace(regexp/substr, replacement);`

功能：

在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

返回值：

String

参数：

regexp：必需。规定子字符串或要替换的模式的RegExp对象。

replacement：必需。一个字符串值。

**注意：**

replace方法不会改变原字符串，返回的字符串需要变量接收。

### toUpperCase()

语法：

`stringObject.toUpperCase()`

功能：

把字符串转换为大写。

```javascript
var str = "hello world";

console.log(str.toUpperCase());  // HELLO WORLD
var upper = str.charAt(6).toUpperCase();
console.log(upper);  // W
```



#### toLowerCase()

语法：

`stringObject.toLowerCase()`

功能：

把字符串转换为小写。

```javascript
var str2 = "WELCOME";
console.log(str2.toLowerCase());  // welcome
```



用处：

在JS中，很多时候需要设置  `border-left-color` ，这种CSS样式，但是在JS中的写法就变成了 `borderLeftColor` 驼峰形式，下面就来封装一下转驼峰写法的函数

```javascript
//转驼峰写法的函数
function camelback(attr) {
    var attrArray = attr.split('-');
    for (var i = 1; i < attrArray.length; i++) {

        var str = attrArray[i];
        var newStr = str.charAt(0).toUpperCase() + str.slice(1);
        attrArray[i] = newStr;

    }
    return attrArray.join('');

}

var camelFormat = camelback("border-left-color");
console.log(camelFormat); // borderLeftColor
```



## 常用 Math 对象

### Math.min()

语法：

`Math.min(num1, num2,...,numN)`

功能：

求一组数中的最小值

返回值：

Number

```javascript
var min = Math.min(5,-4,0,9,108,-55);
console.log(min);  // -55
// 只要这组数字中出现了非数字，那么返回的就是 NAN
var min = Math.min(5,-4,0,9,108,-55,"qwe");
console.log(min);  // NAN
```

### Math.max()

语法：

`Math.max(num1, num2,...,numN)`

功能：

求一组数中的最大值

返回值：

Number

```javascript
var max = Math.max(5,-4,0,9,108,-55);
console.log(max);  // 108
// 只要这组数字中出现了非数字，那么返回的就是 NAN
var max = Math.max(5,-4,0,9,108,-55,"qwe");
console.log(max);  // NAN
```

### Math.ceil()

语法：

`Math.ceil(num)`

功能：

向上取整，即返回大于num的最小整数。

返回值：

Number

```javascript
// Math.ceil()
var num = 189.99;
console.log(num);  // 189.99
console.log(Math.ceil(num));  // 190
```

### Math.floor()

语法：

`Math.floor(num)`

功能：

向下取整，返回num的整数部分。

返回值：

Number

```javascript
// Math.floor()
var num = 189.99;
console.log(num);  // 189.99
console.log(Math.floor(num));  // 189
```

### Math.round()

语法：

`Math.round(num)`

功能：

将数值四舍五入为最接近的整数。

返回值：

Number

```javascript
console.log(Math.round(189.50));  // 190
console.log(Math.round(189.49));  // 189
```

### Math.abs()

可以用在移动端判断用户滑动的距离

语法：

Math.abs(num)

功能：

返回num的绝对值

返回值：

Number

```javascript
var nums = -55;
console.log(Math.abs(nums));  // 55
```

### Math.random()

语法：

`Math.random()`

功能：

返回大于等于0小于1的一个随机数   **0~1**

最小值：0	最大值：0.999999999...

返回值：

Number

说明：

求n到m之间的随机整数的公式：

`random = Math.floor(Math.random()*(m-n+1)+n)`

```javascript
// random
var random = Math.random();
console.log(random);  // 0~1 之间随机的数
```

### 自己封装以个生成n-m之间随机整数的函数

```javascript
// 自己封装以个生成n-m之间随机整数的函数
function getRandom(n, m) {
	var choice = m-n+1;  // 随机整数的个数
	return Math.floor(Math.random()*choice+n);
}
var random1 = getRandom(2, 6);
console.log(random1);
```

## date对象

用于创建日期时间的对象

1. 掌握**创建**日期对象的方法
2. 掌握date对象中**获取**日期时间的方法
3. 掌握date对象中**设置**日期时间的方法

### 创建一个日期对象

语法：

`new Date();`

功能：

创建一个日期时间对象

返回值：

不传参的情况下，返回当前的日期时间对象。

**说明：**

如果想根据特定的日期和事件创建日期对象，必须传入表示该日期的毫秒数 或者 是一组用逗号隔开的表示年月日时分秒的参数。



```javascript
// 创建一个日期对象
var today = new Date();
console.log(today);  // Thu Nov 07 2019 17:47:27 GMT+0800 (中国标准时间)
```

```javascript
// 第二种做法
var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDate();
// 创建了一个目标日期对象
var temp = new Date(year, month, day+50);  // 注意传参 小时分秒不传的话也没错
```



### 获取 年月日时分秒 及 星期 的方法

```javascript
var weeks = ["日", "一", "二", "三", "四", "五", "六"]
year = today.getFullYear(),
    
month = today.getMonth(),
    
date = today.getDate(),
    
week = today.getDay(),
    
hours = today.getHours(),
    
minutes = today.getMinutes(),
    
seconds = today.getSeconds(),
    
times = today.getTime(),
    
time = year + "年" + month + "月" + date + "日" + hours + "时" + minutes + "分" + seconds + "秒  星期" + weeks[week];
console.log("现在是：" + time);  // 现在是：2019年10月7日17时53分58秒
console.log(times);  // 1573120731008
```

### 设置年月日时分秒及星期的方法

![image-20191107180041599](.\media\image-20191107180041599.png)

​	

### 小例子： 50天之后是星期几

```javascript
// 50天之后是星期几
today.setDate(today.getDate() + 50);
console.log(today.getDay());
```



# JavaScript 错误处理

## 语法错误

简单说，语法错误就是不符合JS语法的错误。出现语法错误，控制台会进行报错并告知出错的行号（但行号不一定准确）。

常见的语法错误：

+ 符号漏打，多打，少打，错打
+ 使用了不合语法的变量名
+ 语句写错，没写完等

浏览器会提示出代码的第一处错误，并且停止运行。

![image-20191108105736462](.\media\image-20191108105736462.png)

## 常见的错误

+ **ReferenceError**  常见于变量名未声明

  `Uncaught ReferenceError: foo is not defined` 

+ **TypeError**  类型错误，常发生的两种情况

  1. 获取未初始化的变量的属性或方法
  2. 调用类型错误

  `Uncaught TypeError: Cannot read property 'length' of undefined`

+  **RangeError** 调用栈溢出，递归深度过大就会报错

  `error.html:16 Uncaught RangeError: Maximum call stack size exceeded`

  调用栈

  ```javascript
  // 在计算机每次遇到 函数内部的调用函数的时候，会把当前的函数的状态保存下来，之前的函数并没有结束
  // 调用栈就是 很多函数都没有结束，是一个等待的有序序列，这个序列就称为调用栈
  function S(n) {
  	if (n == 1) {
  		return 1;
  	} else {
  		return n + S(n - 1);
  	}
  }
  ```

## 区分语法错误与运行时错误

对于新手来说，语法错误跟运行时错误在仅看代码的情况下不太容易区分。

一个简单的区分方法：

+ 语法错误无论如何都不可能运行成功
+ 运行时错误是有可能运行成功的

## 逻辑错误

逻辑错误一般 指的是 计算结果不符合预期。

如何调试？： 单步调试。

在代码中输入  `debugger;`  浏览器在运行代码，遇到debugger的时候就会暂停，打开控制台，会出现调试工具。

![image-20191108112734747](.\media\image-20191108112734747.png)

可以在Watch中输入需要监控的变量名

按钮功能：

+ Resume script execution，恢复代码运行，代码会开始执行直到下一次遇到 debugger
+ Step over next function call，跳过下一个函数的调用，把函数当做一行代码来执行
+ Step into next function call，进到函数内部一步一步看函数是怎么执行的
+ Step out next function call

## 主动触发一个错误

**throw** 语句

```javascript
function multiple(a,b) {
	// 如果a b参数的类型不对，就主动触发错误  throw
	if ((typeof a != 'number') || (typeof b != 'number')) {
		throw new Error('自定义错误，参数数据类型不对');
        // error.html:33 Uncaught Error: 自定义错误，参数数据类型不对
	}
	return a * b;
}
// 如果传入的参数不是数字，怎么办？
multiple('a', 'b');
```

发生不可避免的错误时怎么办？

某些运行时错误不可避免，那么就可以使用 try catch 语句。

```javascript
function multiple(a,b) {
	// 如果a b参数的类型不对，就主动触发错误  throw
	if ((typeof a != 'number') || (typeof b != 'number')) {
		throw new Error('自定义错误，参数数据类型不对');
	}
	return a * b;
}
// 如果传入的参数不是数字，怎么办？
try { // 如果内部的代码抛出错误，则代码直接跳入catch块运行，且把错误对象赋值给catch括号内的变量
	multiple('a', 'b');
	console.log("没出错执行我。");
} catch(e) {
	console.log("出错了执行我。");
	console.log(e);  // console.log(e);
} finally {
	// 不管有没有错，最终finally里的语句都会执行
	// 可以在里面做一些  清理性的工作
}
```

#### try-catch 的坑

```javascript
function foo() {
	try{
		throw new Error();
	} catch (e) {
		return 1;
	} finally {
		return 2;
	}
}

console.log(foo());  // 2
```



# 不污染Window环境的JS

```javascript
// 使JS代码就在这个作用域下执行，不污染Window环境
(function(){
    
})();
```



# DOM节点操作

大体有 增删改查

## 创建节点

### document.write()

`document.write("<h1>You are my sunshine.</h1>");`

可以创建节点，但是缺点很明显

1. 因为 document.write 写入文档流，在关闭(已加载)的文档上调用 document.write 会自动调用 document.open，这将清除该文档。
2. 向一个已经加载，并且没有调用过document.open()的文档写入数据时，会自动完成调用document.open()的操作。一旦完成了数据写入，系统要求调用document.close()，以告诉浏览器页面已经加载完毕。写入的数据会被解析到文档结构模型里。在上面的例子里，元素h1会成为文档中的一个节点。
3. 如果document.write()被直接嵌入到HTML主体代码中，那么它将不会调用document.open()。

所以不推荐使用，推荐使用 W3C的 DOM API，下面学  4 种

### document.createElement()

### document.createTextNode()

```html
<ul id="myList"></ul>

<script type="text/javascript">
	// 创建节点、文本
	var ul = document.getElementById("myList");
	var li = document.createElement("li");
	var txt = document.createTextNode('Item');
	li.appendChild(txt);
	ul.appendChild(li);
</script>
```

document.createElement 还能支持创建当前浏览器不支持的标签名，在IE6-8下，这是一个著名的hack。

```javascript
(function(){
	if(!
		// 下面代码的意思：如果是ie才会执行 /*@cc_on@*/里面的代码，也就是一个叹号
		// 那么ie下运行就是假，其他浏览器就是真。
		/*@cc_on!@*/
	0) return;
	// 使JS代码就在这个作用域下执行，不污染Window环境
	var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, mark, menu, nav, output, progress, section, time, video".split(', ');
	var i = e.length;
	while (i--) {
		document.createElement(e[i]);
	}
	// 加上这些代码以后，在ie下也就可以使用这些 标签了 。
})();
```



### document.createDocumentFragment()

创建文档片段

```html
<ul id="myList"></ul>

<script type="text/javascript">
	// 创建节点、文本
	var ul = document.getElementById("myList");
	var li = null;
	var fragment = document.createDocumentFragment();
	for (var i = 0; i < 3; i++) {
		li = document.createElement("li");
		li.appendChild(document.createTextNode("Item" + (i+1)));
		fragment.appendChild(li);
	}
	ul.appendChild(fragment);
</script>
```



### document.createComment()

创建注释节点

```html
<ul id="myList"></ul>
<script type="text/javascript">
	// 创建节点、文本
	var comment = document.createComment("A comment");
	var ul = document.getElementById("myList");
	var li = null;
	var fragment = document.createDocumentFragment();
	for (var i = 0; i < 3; i++) {
		li = document.createElement("li");
		li.appendChild(document.createTextNode("Item" + (i+1)));
		fragment.appendChild(li);
	}
	ul.appendChild(fragment);
	// 第一个参数：要插入的节点  第二个参数：要插入的节点的相对的位置
	document.body.insertBefore(comment, ul);
</script>
```

## 高效创建节点

如果需要插入大量的HTML标记的情况下，通过create系列仍然非常麻烦

因为不仅要创建，而且要按照顺序排列

使用插入标记技术，直接插入HTML字符串不仅更简单，而且速度更快。

### innerHTML

用来设置或获取当前标签的起始和结束里面的内容

返回调用元素的所有节点，包括元素节点、注释节点、文本节点和对应的HTML标记

在写模式下，会根据指定的值创建一个DOM树，用这个DOM树完全替换之前的所有子节点

```javascript
var content = document.getElementById("content");
var str = "<p>This is a <strong>paragraph</strong> with a list following it.</p>"
+ "<ul>"
+ "<li>Item 1</li>"
+ "<li>Item 2</li>"
+ "<li>Item 3</li>"
+ "</ul>";

content.innerHTML = str;
alert(content.innerHTML);
```

使用innerHTML的限制

字符串的最左边不能出现空白，IE6-8会自动移除掉它

IE、欧朋 会将所有的标签转换为大写形式

Safari、Firefox、Chrome  会返回原本的小写形式

大多数浏览器不会对script标签进行脚本执行操作

不能单独创建meta，style，link等元素，一定要在前面加上一些字符。

### outerHTML

返回调用它的元素及所有子节点的HTML标签

在写 模式下，会根据指定的HTML字符串创建新的outer子树，然后用这个outer子树完全替换调用的元素

支持outerHTML的浏览器：

![image-20191108170731903](.\media\image-20191108170731903.png)

```javascript
var content = document.getElementById("content");
var str = "<p>This is a <strong>paragraph</strong> with a list following it.</p>"
+ "<ul>"
+ "<li>Item 1</li>"
+ "<li>Item 2</li>"
+ "<li>Item 3</li>"
+ "</ul>";
content.innerHTML = str;

// 打印的结果是从div节点（添加的节点的外部一层）开始，包含子元素。
// innerHTML 却不包含外部的div节点
console.log(content.outerHTML);
content.outerHTML = "<p>This is a paragraph.</p>";  // 这么写的话  原来的div就不存在了，而是替换成了一个新的
```

### innerText

设置或获取位于对象起始和结束标签内的文本

包括 子文档数中的文本。

通过innerText读取的时候，会根据由浅入深的顺序将子文档树中的所有文本拼接起来

再通过innerText写入值的时候，会删除元素的所有子节点，插入包含相应文本值的文本节点。

浏览器兼容性：

![image-20191108172238844](.\media\image-20191108172238844.png)

Firefox不支持，支持作用类似的textContent 属性

```javascript
console.log(content.innerText);  // 只返回文本，没有标签
content.innerText = "<p>This is a paragraph.</p>"  // 写入的事原本的文本内容，包括标签文本。
```

通用脚本

```javascript
// 获取
function getInnerText(element){
    return (typeof element.textContent == "string") ? element.textContent : element.innerText;
}
// 设置
function setInnerText(element, text) {
    if (typeof element.textContent == "string") {
        element.textContent = text;
    } else {
        element.innerText = text;
    }
}
```

### outerText

除了 作用范围 扩大到了包含调用它的节点之外，outerText与 innerText基本没什么区别。

在读取文本的时候，outerText与innerText的结果是完全一样的。

在写模式下，outerText不止替换子节点，还会替换整个元素，包括子节点。

**由于这个属性会导致调用它的元素不存在，因此并不常用，不推荐使用。**

## 查找节点

### 节点遍历

DOM是呈现为一个树状结构的，因此节点之间存在 上下左右 的关系。

![image-20191108173750717](.\media\image-20191108173750717.png)

#### 第一种方法： 家族

![image-20191108174326763](.\media\image-20191108174326763.png)

查找方法见代码

```javascript
var oHtml = document.documentElement;  // documentElement属性 返回文档的根节点
// tagName属性 返回元素的标签名
console.log(oHtml.tagName);  // HTML
// 获取head元素
var oHead = oHtml.firstChild;
console.log(oHead);  // head 节点
var oHead = oHtml.childNodes[0];
console.log(oHead);  // head 节点
var oHead = oHtml.childNodes.item(0);
console.log(oHead);  // head

// 寻找body元素，它是html的第二个子元素
var oBody = oHtml.childNodes[1];
// 解释：#text是文本节点，是因为现代的标准浏览器会将两个节点中间的空格也视作文本节点。
console.log(oBody);  // #text
var oBody = oHtml.childNodes.item(1);
console.log(oBody);  // #text

// 寻找父节点
console.log(oHead.parentNode == oHtml);  // true

// 兄弟节点之间的查找
console.log(oBody.previousSibling == oHead);  // true
console.log(oHead.nextSibling == oBody);  // true

// 祖先节点
console.log(oBody.ownerDocument);

// 是否存在子节点
console.log(oBody.hasChildNodes());  // true/false
```

上方代码存在的问题：

会把代码的换行，也看作是一个文本节点，导致在换行的地方存在空白子节点。

也就是说API会把空白节点也纳入了子节点的计算中。

之前的方法： 1. 去掉空白节点。 2.判断这个节点是否为空。都不是很好的方法。

现在有更好的方法：

#### 一些更好用的属性

 `childElementCount`  ：这个属性里面包含的节点不包括空白的文本节点。

`children`：可以与上一个属性联用，同样不会读取到父元素的空白文本节点。

但是注意：**IE8及以下浏览器不支持。**



**节点遍历案例**

```javascript
// 遍历节点案例
var s = "";
function travel(space, node) {  // space:节点之间分割的字符串   node：遍历的当前节点
	if (node.tagName) {  // 如果当前节点是标签，就直接拼接字符串
		s += space + node.tagName + '<br/>';
	}
var len = node.childNodes.length;  // 保存当前节点的子节点的个数
	for (var i = 0;i < len; i++){  // 遍历节点的子节点
		travel(space+"|-", node.childNodes[i]);
	}
}
travel("", document);
document.write(s);
```

### 类数组对象

#### NodeList

之前提到，每个节点都有一个 `childNodes` 属性，这个属性保存着一个`NodeList` 对象。

+ NodeList 是一种类数组对象，用于保存一组有序的节点
+ 可以通过方括号语法访问NodeList的值，有item方法与length属性
+ 它并不是Array的实例，没有数组对象的方法

把 类数组对象转换为 数组对象，有两种方法：

```javascript
// 1. 将NodeList转换成数组
// 这样两种方法都是只能把 类数组对象 NodeList 转换成数组对象，但是并不能在DOM上体现出来
var box = document.getElementById('box');
console.log(box);
var nodes = box.childNodes;

function makeArray(nodeList) {
	var arr = new Array();
	for(var i = 0, len = nodeList.length; i < len; i++) {
		arr.push(nodeList[i]);
	}
	return arr;
}

var newNodeList = makeArray(nodes);
newNodeList.push("<li>动态添加的节点四</li>");
console.log(newNodeList);  // (10) [text, li, text, li, text, li, text, li, text, "<li>动态添加的节点四</li>"]

// 2. 使用 Array对象的prototype属性的slice方法

function makeArray(nodeList) {
	return Array.prototype.slice.call(nodeList);
}
// 但是第二种方法在一些IE8及以下浏览器上会有问题， 会在浏览器上显示“缺少 JScript 对象”
// 两种方法都想使用的 兼容写法：

function makeArray(nodeList) {
	var arr = null;
    try {
        return Array.prototype.slice.call(nodeList);
    } catch (e) {
        arr = new Array();
        for (var i = 0, len = nodeList.length; i < len; i++) {
            arr.push(nodeList[i]);
        }
        return arr;
    }
} 
```

#### HTMLCollection

表示HTML元素的集合，同样拥有length属性，类数组对象

常见的返回 HTMLCollection对象的操作

+ Ele.getElementByTagName()，会根据元素名称返回元素的集合。
+ document.scripts，会返回页面里的全部script的集合
+ document.links 属性，返回页面所有a元素
+ document.images 属性，返回页面中所有的image 标签元素集合
+ document.forms 属性，返回页面中所有form表单
+ tr.cells ，返回这个tr元素的所有td子元素的集合
+ select.options，返回这个select的所有选项

```javascript
// HTMLCollection
var script = document.scripts;
var links = document.links;
var cells = document.getElementById("tr").cells;
var imgs = document.images;
var forms = document.forms;
var options = document.getElementById("select").options;
var ps = document.getElementsByTagName("p");

console.log(script);  // HTMLCollection [script]
console.log(links);  // HTMLCollection(2) [a, a]
console.log(cells);  // HTMLCollection(3) [td, td, td]
console.log(imgs);  // HTMLCollection(2) [img, img]
console.log(forms);  // HTMLCollection(2) [form, form]
console.log(options);  // HTMLOptionsCollection(3) [option, option, option, selectedIndex: 0]
console.log(ps);  // HTMLCollection [p]
```

#### NamedNodeMap

通过访问元素节点的 attributes 属性得到

`Ele.attributes`

```javascript
var box = document.getElementById("box");
var attrs = box.attributes;
console.log(attrs);

// NamedNodeMap {0: id, id: id, length: 1}
// 0: id
// length: 1
// id: id
// __proto__: NamedNodeMap
```

#### 类数组对象的动态属性

NodeList，HTMLCollection，NamedNodeMap 三个集合都是动态的、有生命的 对象

它们是基于DOM结构动态执行查询的结果，因此DOM结构的变化能够自动反应到这些对象中

每当文档结构发生变化时，它们都会得到更新。因此，它们始终都会保存着最新、最准确的信息

```javascript
var divs = document.getElementsByTagName("div");
var i = 0;
while(i < divs.length){  // 注意这里，由于HTMLCollection的动态特性，divs的length属性是一直改变的，所以在每次循环的时候都会重新判断length，会进入死循环
	document.body.appendChild(document.createElement("div"));
	i++;
}
// 只需要拿一个变量保存一下length即可解决
var divs = document.getElementsByTagName("div");
var length = divs.length;
var i = 0;
while(i < length){
	document.body.appendChild(document.createElement("div"));
	i++;
}
```

![image-20191117121246433](.\media\image-20191117121246433.png)

前三个方法会在IE6~8 中也可以使用

### getElementById

`document.getElementById("muDiv");`

当出现不同元素ID和NAME值相同的时候，在IE7中使用的时候会有BUG

修复思路：

在取得元素后，先判断是根据name还是id来取得的，如果不是，就把拿到所有符合条件的节点，挨个判断

```javascript
    var getElementById = function(id) {
    	var el = document.getElementById(id);
    	// 针对ie浏览器修复
    	if(!+"\v1") {  // 利用了各个浏览器对转义字符 \v 的解释，ie中\v没有转义，得到的字符就是v，其他浏览器是类似空格的符号
    		if(el && el.id === id){
    			return el;
    		}else {
    			// 获得所有id或name值符合条件的，然后逐个判断
    			var els = document.all[id],
    			n = els.length;
    			for(var i=0; i<n;i++){
    				if(els[i].id === id) {
    					return els[i];
    				}
    			}
    		}
    	}
    	return el;
    }
```

### getElementsByName()

返回一个对象的集合

`document.getElementsByName("myUl");`

```javascript
var yUl = document.getElementsByName("myUl");
console.log(myUl);  // 返回一个集合，NodeList
```

### getElementsByTagName()

`var list1 = document.getElementsByTagName("li");`

```javascript
var list1 = document.getElementsByTagName("li");   // 传入不区分大小写
console.log(list1.length);  // 3
```

### getElementsByClassName()

```html
<ul id="myUl">
   <li class="light">1</li> 
   <li class="dark">2</li> 
   <li class="light">3</li> 
</ul>
<script>
	var ul = document.getElementById("myUl");
    // 就可以同时获得两个节点，返回的是HTMLCollection，类数组
    var list1 = ul.getElemenetsByClassName('light');
    // 传入多个类名的时候，就可以空格隔开，不分前后
</script>
```

注意：这个方法在旧式浏览器中不支持，下面就写一下兼容性

```javascript
// TODO
```

### querySelector()

querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。

**注意：** querySelector() 方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。

```javascript
var myDiv = document.getElementById("myDiv");
var ul = myDiv.querySelector("#myUl");
console.log(ul);

console.log(document.querySelector('li:last-child'));
console.log(document.querySelector('span'));
console.log(document.querySelector('.foo'));
// 试图获取一个不存在的节点时，会返回null
```

### querySelectorAll()

```javascript
console.log(myDiv.querySelectorAll('ul'));

// 试图获取不存在的节点时，会返回 []
// 但是，类数组对象具有动态性，querySelectorAll() 返回的不是纯粹的NodeList，而是类似的 StaticNodeList
```

## 操作节点

![image-20191117151014639](.\media\image-20191117151014639.png)

#### appendChild()

用于向 NodeList列表添加节点，返回新增的节点

```javascript
var myUl = document.getElementById("myUl");
var txt = document.createTextNode("4");
var li = document.createElement('li');

li.appendChild(txt);
myUl.appendChild(li);

// 注意：如果是把已有的节点appendChild到其他节点，那么会做 移动处理，不会复制
var firstLi = document.getElementById('tr').firstElementChild;
myUl.appendChild(firstLi);
```

#### insertBefore()

在指定的已有子节点之前插入新的子节点

```javascript
var liNew = document.createElement('li');
liNew.appendChild(txt);
var li2 = myUl.children.item(1);
// 接收两个参数，第一个是要插入的节点，第二个是参照节点，会在参照节点前面插入
myUl.insertBefore(liNew, li2);
// 插到第一位，也就是第一个节点的前面
myUl.insertBefore(liNew, myUl.firstElementChild);

```

#### cloneNode()

创建节点的拷贝，并返回该副本

拷贝的节点要有父节点才能看到，如果没有父节点，要通过appendChild()、insertBefore()、replaceChild() 等方法对其进行添加

```javascript
var myUl = document.getElementById("myUl");
var newNode = myUl.cloneNode(); // 这样的话只会克隆父节点，没有子节点

var newNode = myUl.cloneNode(true);  // 这样才会连同子节点，深复制

console.log(newNode); 

document.body.appendChild(newNode);  // 添加才会显示
```

#### normalize()

合并相邻的节点

```javascript
var div = document.createElement("div");
var textNode = document.createTextNode("DOM探索");
div.appendChild(textNode);

var textNode2 = document.createTextNode("之节点操作");
div.appendChild(textNode2);

document.body.appendChild(div);

console.log(div.childNodes.length);  // 2
div.normalize();
console.log(div.childNodes.length);  // 1
```

#### splitText()

按指定的位置把文本节点分割成两个节点

和normalize反过来

```javascript
var newNode = div.firstChild.splitText(5);
// 就分割成了两个节点
```

## 删除节点

![image-20191117161851491](.\media\image-20191117161851491.png)

### removeChild()

删除子节点，返回被删除的子节点

```javascript
var myUl = document.getElementById("myUl");
var secondChild = myUl.removeChild(myUl.childNodes[1]);
```

### removeNode()

ie的私有实现

将目标节点从文档中删除，返回目标节点

参数是布尔值，默认值是false

用的不多

### innerHTML 

读写属性

与removeChild()比较：

 ```javascript
var div = document.createElement("div");
console.log(div.parentNode);  // ie及其他都为null


var div = document.createElement("div");
document.body.removeChild(document.body.appendChild(div));
// ie6-8会返回文档碎片对象，是为了让我们重复使用，其他为null
console.log(div.parentNode);
console.log(div.parentNode.nodeType);


document.body.innerHTML = '';
console.log(myDiv.parentNode);  // null 所有的浏览器都是

// 所有浏览器都显示正常，可以得到子节点
myDiv.parentNode.removeChild(myDiv);
console.log(myDiv.id + ":" + myDiv.innerHTML);

// 在ie上，就被清空得不到了
myDiv.parentNode.innerHTML = "";
console.log(myDiv.id + ":" + myDiv.innerHTML);

 ```

#### // 总结：

在ie6-8下，removeChild()相当于是掰断了树枝，但是树枝还可以再次使用，innerHTML就是把树枝烧掉了

chrome中，removeChild() 和 innerHTML 都是掰断树枝，可以再次使用。



# DOM事件

什么是事件？ js与HTML的交互就是通过事件实现的

事件就是文档或浏览器窗口中发生的一些特定的交互瞬间。

主要学习两种绑定事件的方式：HTML事件、DOM 0级事件

## HTML事件

直接在HTML元素标签内添加事件，执行脚本。

语法：

`<tag 事件="执行脚本"></tag>`

功能：

在HTML元素上绑定时间

说明：

执行脚本可以使一个函数的调用。

```html
<input type="button" value="弹出" onclick="alert("我是按钮")">

<!-- 鼠标滑过时调用mouseoverFn函数 -->
<div id="btn" class="btn" onmouseover="mouseoverFn(this)" onmouseout="mouseoutFn(this)">开始</div>

<script>
    function mouseoverFn(btn){
        // this 指向
        console.log(btn);  // 就是调用的div的引用
        btn.style.background="#f00";
    }
    
    function mouseoutFn(btn){
        btn.style.background="#00f";
    }
</script>
```

## this指向

在事件触发的函数里，this是对该DOM对象的引用

## DOM 0级事件

通过DOM获取HTML元素

（获取HTML元素）.事件 = 执行脚本

语法：

ele.事件 = 执行脚本

功能：

在DOM对象上绑定事件

说明：

执行脚本可以是一个匿名函数，也可以是一个函数的调用

```javascript
// 获取按钮
var btn = document.getElementById("btn");
// 给按钮绑定事件 ， 在点击时执行匿名函数
btn.onclick = function(){
    console.log(this);  // 指向该DOM元素
    this.className = "unlock";
}
```

**注意：**

不推荐使用HTML事件的原因

1. 多元素绑定相同事件时，效率低。
2. 不建议在HTML元素中写JS代码，应该分开写。

## 鼠标事件

![image-20191117222744981](C:\Users\F\AppData\Roaming\Typora\typora-user-images\image-20191117222744981.png)

### onfocus() onblur()

只能用于

+ input 标签 type为text、password
+ textarea标签

```javascript
var phone = document.getElementById("phone");
var tip = document.getElementById("tip");
// 给文本框绑定激活的事件
phone.onfocus = function(){
    //让tip显示出来
    tip.style.display = "block";
}
//文本框失去焦点的事件
phone.onblur = function(){
    var phoneVal = this.value;
    if(phoneVal.length == 11 && isNaN(phoneVal)==flase) {
}else{
    
}
}
```

### onchange()

页面加载时触发

如果把script 标签放在body标签前面的话，就会在加载DOM元素前加载脚本，会获取不到DOM节点。

就可以让window加载完毕后再执行脚本

```javascript
window.onload = function(){
    // 脚本
}
```

### onchange() 

域的内容改变时触发，一般用于select标签、checkbox、radio

```javascript
var menu = document.getElementById("menu");
menu.onchange = function(){
    console.log(this);
    var bgcolor = this.value;
    // var bgcolor = menu.options[menu.selectedIndex].value;
    if(bgcolor == ""){
        document.body.style.background = "#fff";
    }else {
        document.body.style.background = bgcolor;
    }
}
```

### onsubmit()

表单中的确认按钮被点击时触发 

但是此事件不是加在按钮上，而是加在表单上的

```javascript
var box = document.getElementById("box");
box.onmousedown = function(){
    console.log("我被按下了");
}
box.onmousemove = function(){
    console.log("我被移动了");
}
box.onmouseup = function(){
    console.log("我被松开了");
}
```

### onresize()

作用于window对象，当调整浏览器窗口的大小时触发。

```javascript
window.onresize = function(){
    console.log("尺寸改变了");
}
```

### onscroll()

拖动滚动条滚动时触发

```javascript
window.onscroll = function(){
    console.log("我被拖动了");
}
```

## 键盘事件

### onkeydown()

在用户按下一个键盘按键时触发

```javascript
document.onkeydown=function(event){
    // event代表事件的状态，如触发event对象的元素、鼠标的位置及状态等
    // 在事件触发的function里，用一个参数接收事件对象
    // keyCode属性就作用在event对象上
    console.log(event.keyCode);
}
```

onkeypress、onkeyup 两个方法和onkeydown同理。



# JS事件

事件是可以被JavaScript侦测到的行为，通俗说就是 当用户与Web页面进行某些交互时，解释器就会创建相应的event对象以描述事件信息。

常见的事件：

用户点击

鼠标经过

按下键盘

滚动窗口或者窗口大小改变

页面元素加载完成或者加载失败

## 事件句柄

事件句柄（又称事件处理函数、事件监听函数），指用于相应某个事件而调用的函数。每一个事件均对应一个事件句柄，在程序执行时，将相应的函数或语句指定给事件句柄，则在该事件发生时，浏览器便会执行指定的函数或语句。

## DOM事件流

### 事件定义/添加

为特定事件定义监听函数有三种方式

#### 直接在HTML中定义

```html
<button onclick="alert('hello')">按钮</button>
```

但是违反了“内容与行为分离”的原则，应尽可能避免使用。

#### DOM 0级事件

前面有笔记，缺点是 元素只能绑定一个监听函数。

#### DOM 2级事件

高级事件处理方式，一个事件可以绑定多个监听函数。

`ele.addEventListener("click", function(){}, false);` // DOM

`ele.attachEvent("onclick", function(){});`  // IE

此语法可以为一个元素绑定多个监听函数，但需要注意浏览器兼容性问题。

```javascript
var btn = document.getElementById("btn");
// 三个参数  1.绑定的事件类型  2.事件句柄  3.默认false，管理事件冒泡或者捕获
btn.addEventListener('click', function(){}, false);
```

DOM2级支持同一dom元素注册多个同种事件

DOM2级新增了捕获和冒泡的概念

### 移除事件

`removeEventListener()`

语法：`element.removeEventListener(event, function,useCapture)`

功能： 移除addEventListener()方法添加的事件句柄。

参数：

+ event：必须。字符串，要移除的事件名称
+ function：必须。指定要移除的函数
+ useCapture：可选。布尔值，指定移除事件句柄的阶段。

```javascript
btn.removeEventListener("click", func2);
```

## IE事件流（IE事件处理程序）

针对IE8及以下做的兼容

### 添加事件

`attachEvent()`

语法：`element.attchEvent(event, function)`

功能：用于向指定元素添加事件句柄

参数：  // ie不支持事件捕获，默认就是冒泡，所以没有第三个参数

event：必须。字符串，指定事件名，必须加“on”前缀。

function：必须。指定事件触发时执行的函数。



### 移除事件

`detachEvent()`

语法：`element.detachEvent(event, function)`

功能：移除attachEvent()方法添加的事件句柄。

参数：
event：必须。字符串，要移除的事件名称。

function：必须，指定要移除的函数。

## 事件冒泡、事件捕获

最初是 微软和网景 在浏览器中的竞争，后来就两个都支持了。

### 事件周期

解释器创建一个event对象后，会按如下过程将其在HTML元素间进行传播

第一阶段：事件捕获，事件对象沿DOM树向下传播

第二阶段：目标触发，运行事件监听函数

第三阶段：事件冒泡，事件沿DOM树向上传播

```html
<div id="parent">
    <div id="child" class="child"></div>
</div>
<script>
	// 事件冒泡
    document.getElementById("parent").addEventListener("click", function(e){
        alert("parent事件被触发," + this.id);
    })
    document.getElementById("child").addEventListener("click", function(e){
        alert("child事件被触发，" + this.id);
    })
    // 父 添加事件
    // 子 添加事件
    // 点击的效果： 先触发 子 事件，再触发 父 事件。
</script>
```

在直系亲属树结构中，点击某个元素，由于冒泡作用，亲属树上的元素，凡是添加了事件的，都会被触发。

大部分情况下使用的就是 事件冒泡。

### 事件捕获

和事件冒泡正好反过来，从上往下找。

### 事件委托

原理 就是事件冒泡。

也就是说，我自己的事件没有绑定到我自己身上，而是委托给了父元素或其他元素。

```javascript
// 保证了只添加一次事件，把本来要绑定到li上的事件绑定到了ul上
var ul = document.getElementById("ul");
ul.addEventListener("click", function(event){
    alert(1);
    if(event.target.id == "one"){
        alert(1);
    }
}, false);
```

## event对象常用属性和方法

在事件句柄中，有一个参数event。

### type

事件的类型，如：click。

```javascript
// 同一个元素触发不同的事件
var eventFUn = function(event){
    if(event.type == "click"){
        alert("click事件被触发");
    }else if(event.type == "mouseout"){
        alert("mouseout事件被触发");
    }
}
```

### target、currentTarget

事件源，就是发生事件的元素。

```javascript
var parent = document.getElementById("parent");
parent.addEventListener("click", function(event){
    
    // 点击儿子，事件在父亲上面
    console.log(event.target);  // target是儿子对象，事件源对象
    console.log(event.currentTarget);  // currentTarget 事件绑定在谁身上就指向谁
    
})
```

### preventDefault 

阻止默认行为

```javascript
var a = document.getElementById("a");
a.addEventListener("click", function(){
    alert(11);  // 如果不去阻止默认行为的话，会先弹框，然后a标签还是会跳转，也就是a标签的默认行为还是会发生
    event.preventDefault();  // 加上这个函数以后，就会阻止a标签的默认行为，就不会跳转了 
})
```

### stopPropagation

阻止元素的冒泡或捕获

```javascript
var parent = document.getElementById("parent");
parent.addEventListener("click", function(event){
    alert("parent");
});
child.addEventListener("click", function(event){
    alert("child");
    event.stopPropagation();  // 当执行完child后，冒泡被阻止，parent就不会再触发了
});
```

### clientY、pageY、screenY

```javascript
var gaodu = document.getElementById("gaodu");
gaodu.addEventListener("click", function(event){
    alert(event.clientY+event.pageY+event.screenY);
})
```

+ clientY

  从浏览器顶部底边开始，到鼠标点击的位置的Y值，**不计算滚动条**已经滚动了的位置。

+ pageY

  从浏览器顶部底边开始，到鼠标点击的位置的Y值，**计算滚动条**已经滚动了的位置。

+ screenY

  屏幕的最顶部到鼠标位置，不管浏览器的位置在哪

### IE8中的event对象  attachEvent

```javascript
var mybtn = document.getElementById("mybtn");
mybtn.attachEvent("onclick", function(event){
    alert(event.type);  // 时间类型
    event.returnValue = false;  // 阻止默认行为，同preventDefault；
    event.cancelBubble = true;  // 阻止事件冒泡，同stopPropagation;
    event.srcElement;  // 同target
});
```

## 事件类型

### UI类型

#### load

当页面完全加载后在window对象上面触发

可以应用于image标签上实现图片预加载

```javascript
var image = new Image();  // 这样可以把图片存在内存中
image.addEventListener("load", function(event){
    alert("Image loaded.");
});
image.src = "smile.gif";
```

#### onload

用户从一个页面切换到另一个页面

#### resize

窗口大小发生变化时触发，重复触发， 也就很损耗性能。

#### scroll

窗口滚动事件，重复触发，也就很损耗性能。

#### blur

元素失去焦点时触发

#### focus

元素获取焦点的时候触发，不支持冒泡

#### focusin

元素获取焦点时触发，支持冒泡，浏览器支持 IE5.5+，Safari5.1+，chrome等

#### focusout 

同blur，浏览器支持 IE5.5+，Safari5.1+，chrome等

### 鼠标事件

#### click

鼠标点击事件

#### dbclick

鼠标双击事件

#### mousedown

鼠标按下的时候触发

#### mouseup

松开鼠标触发

#### mousemove

鼠标移动的时候触发，重复事件

#### mouseout

鼠标离开元素 或者 其子元素的时候触发

#### mouseover

鼠标从元素外部进入元素 或者 其子元素的时候触发

#### mouseenter

鼠标进入目标元素触发，只能进入目标元素时才触发

#### mouseleave

鼠标指针离开被选元素时触发，只能进入目标元素时才触发

### 键盘事件

#### keydown

键码，敲击任意键触发

#### keyup

键盘抬起的时候触发，也就是释放某键的时候触发

#### keypress

按下 **字符键** 触发，对其他键位的支持有有限

#### textInput

输入什么，event.data 的值就是什么

### 其他事件

#### DOMNodeRemoved

`ele.addEventListener("DOMNodeRemoved", function(){});`

在 节点内有节点被删除的时候触发。

#### DOMNodeRemovedFromDocument

在节点被移除之前 触发

#### DOMNodeInserted

有元素被添加时触发

#### DOMSubtreeModified

DOM结构中发生任何变化都会触发

#### DOMNodeInsertedIntoDocument

 从文档中添加之前被触发

### HTML5 新增事件

#### DOMContentLoaded

只要DOM树完成加载就会触发，不管其他image、js、css和其他资源，肯定要比load事件快。

#### readystatechange

支持ie、Firefox、Opera，有限制。难预料，不推荐使用，可能比load慢。

#### hashchange

只能给window对象添加，#号后面的值发生变化的时候触发

此时的event对象里会有两个属性：oldURL、newURL

记录地址栏状态的场景使用

### 常用事件类型

#### touchstart

手指触摸屏幕 时触发。

```javascript
var mybtn = document.getElementById("mybtn");
// 手指触摸屏幕时触发
mybtn.addEventListener("touchstart", function(event){
    
    console.log(event.touches);  // 当前触摸屏幕的触摸点数组，也就是记录触摸点的信息
    
    console.log(event.changedTouches);  // 记录触摸并移动的手指头的信息
    
    console.log(event.targetTouches);  // 在事件对象上面的触摸点的信息
    
});
```

#### touchmove

手指在屏幕上滑动的时候触发，重复触发

#### touchend

手指从屏幕上移开时触发

#### touchcancel

当系统停止跟踪触摸时触发



# BOM

BOM(browser object model)浏览器对象模型

BOM提供了很多的对象，用于访问浏览器的功能。

## window对象

window是浏览器的一个实例，在浏览器中，window对象有双重角色，它既是通过JavaScript访问浏览器窗口的一个接口，又是ECMAScript规定的Global对象。

也就意味着我们在网页中定义的任何一个对象、变量、函数 都是以window作为global对象，因此我们才有权限访问它的方法等等。

```javascript
var age = 15;  // 这条语句相当于是 window.age = 15;
function sayAge(){
	alert("我" + age);
}
// 声明一个全局变量
window.username = "marry";  // 相当于 var username = "marry";
// 声明一个全局方法
window.sayName = function(){
	alert("我是"+this.username);  // 甚至alert方法也是window对象的
}
sayAge();
window.sayName();  // sayName();同等
```

### window对象的方法

#### window.alert()

显示带有一段消息和一个确认按钮的警告框。

#### window.confirm("message")

显示一个带有指定消息和OK及取消按钮的对话框。

返回值：

如果用户点击确定按钮，则confirm()返回true

如果用户点击取消按钮，则confirm()返回false

```html
<div id="info">我是信息</div>
<input type="submit" name="" value="删除" id="del">

<script type="text/javascript">
	document.getElementById("del").addEventListener("click", function(){
		if (window.confirm("确定要删除吗？")){
			document.body.removeChild(document.getElementById("info"));
		} else {
			return null;
		}
	})	
</script>
```

#### window.prompt("text", "defaultText")

参数：

text： 要在对话框中显示的纯文本，而不是HTML格式的文本

defaultText：默认的输入文本

返回值：

如果用户单击取消，返回null

如果用户点击确认，返回输入字段当前显示的文字

```html
<button id="prompt">prompt测试</button>
<script type="text/javascript">
	var prom = document.getElementById("prompt");
	prom.addEventListener("click", function(){
		var textInfo = window.prompt("我是提示信息", "我是默认输入的信息");
		if(textInfo){
			alert(textInfo);
		}else {
			alert(textInfo);
		}
	})
</script>
```

#### window.open(pageURL, name, parameters)

打开一个新的浏览器窗口或查找一个已命名的窗口

参数：

+ pageURL：子窗口的路径

+ name：子窗口的句柄，方便后期通过name对子窗口进行引用

+ parameters：窗口参数，各参数用逗号分隔。
  + width：窗口宽度
  + height：窗口高度
  + left：窗口X轴坐标
  + top：窗口Y坐标
  + toolbar：是否显示浏览器工具栏
  + menubar：是否显示菜单栏
  + scrollbars：是否显示滚动条
  + location：是否显示地址栏字段
  + status：是否添加状态栏

```html
<!-- open -->
<button id="open">打开新窗口</div>
<script type="text/javascript">
	document.getElementById("open").addEventListener("click", function(){
		window.open('DOM.html', 'name', 'width=400, height=200, left=0, top=0, toolbar=no, menubar=no, scrollbars=no, location=no,status=no');
	})
</script>
```

#### window.close()

关闭此窗口

```javascript
document.getElementById('close').addEventListener('click', function(){
	window.close();
})
```

#### window.innerWidth/ innerHeight

属于window对象的属性，获取浏览器可视区域的宽度和高度

### 定时器

JavaScript是单线程语言，单线程就是所执行的代码必须按照顺序执行。

但是允许设置超时值和间歇时间值来调度代码在特定的时刻执行。

#### 超时调用

`setTimeout(code, millisec);` 

在指定的毫秒数后调用函数或计算表达式。

参数：

1. code：要调用的函数或要执行的js代码
2. millisec：在执行代码前需要等待的毫秒数

```javascript
var timeout1 = window.setTimeout(function(){
	alert("延迟了1s");
}, 1000);
// 取消了超时调用
clearTimeout(timeout1);
```

在调用setTimeout方法后，会返回一个ID值，表示超时调用，可以通过它来取消超时调用。

`clearTimeout(timeout1);`

#### 间歇调用

`setInterval(code, millisec)`

每隔指定的时间执行一次代码

参数：

1. code：要调用的函数或要执行的js代码
2. millisec：周期性执行或调用code之间的时间间隔，以毫秒计

```javascript
var timeout1 = window.setTimeout(function(){
	alert("延迟了1s");
}, 1000);
clearTimeout(timeout1);
window.num = 0;
window.setInterval(function(){
	console.log("你好");
	var txt = document.createTextNode(num);
	var div = document.createElement("div")
	div.appendChild(txt);
	document.body.appendChild(div);
	num++;
}, 1000);
```

取消间歇调用：

`clearInterval()`

### location 对象

location对象提供了与当前窗口中加载的文档有关的信息，还提供了一些导航的功能，它既是window对象的属性，也是document对象的属性。

#### location.href

`location.href`

返回当前加载页面的完整URL

location.href与window.location.href等价

可以获取也可以设置

`location.href = xx `

#### location.hash

`location.hash`

返回URL中的hash（#号后跟零或多个字符），如果不包含则返回空字符串

```javascript
btn.onclick = function(){
    location.hash = "#top";  // 也可以设置
}
```

#### location.host

返回服务器名称和端口号（如果有）

`console.log(location.host);` 

#### location.pathname

返回URL中的目录和（或）文件名

#### location.port

返回URL中指定的端口号，如果没有，返回空字符串

#### location.protocol

返回页面使用过的协议

#### location.search

返回URL的查询字符串，这个字符串以问号开头

#### location.replace

重新定向URL

不会在历史记录中生成新纪录

#### location.reload

重新加载当前显示的页面，也就是刷新页面

但是，如果页面没有更改，那么reload就会从浏览器的缓存中获取数据，不会重新请求服务器

如果想重新请求的话，就需要添加一个参数 **true**

### history

从字面意思就能看到，这个对象记录了用户在浏览器中访问页面的历史记录

处于安全性考虑，开发者无法直接获取history对象的URL

#### history.back

回到历史记录上一步

相当于使用了history.go(-1);

#### history.forward

来到历史记录的下一步

相当于使用了history.go(1);

### Screen对象

Screen对象包含有关客户端显示屏幕的信息

#### screen.availWidth

返回可用的屏幕宽度，得到的是除了任务栏之外的内容

#### screen.availHeight

返回可用的屏幕高度

### Navigator

浏览器信息

#### UserAgent

用来识别浏览器名称、版本、引擎以及操作系统等信息的内容。

```javascript
console.log(navigator.userAgent);
```

封装检测浏览器类型

```javascript
function getBrowser(){
    var explorer = navigator.userAgent.toLowerCase();  // 转换成小写好做判断
    if(explorer.indexOf("msie")>-1){
        browser = "IE";
    } else if(explorer.indexOf("chrome">-1){
        browser = "chrome";
    }...)
    return explorer;
}
```

