# Canvas 画布

canvas就是一张画布，下面用一个小例子的代码来展示canvas的基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Canvas</title>
	<style>
		.canvas {
			border: 1px solid red;
			/*width: 100px;*/
			/*height: 100px;*/
            /*
            在css中定义的画布宽高并不是画布的真实宽高
            */
		}
	</style>
</head>
<body>
	<canvas class="canvas" id="myCanvas">您的浏览器不支持canvas</canvas>

	<script>
		var canvas = document.getElementById('myCanvas');
		var ctx = canvas.getContext('2d');  // 得到上下文
        
		ctx.moveTo(0, 0);  // 原点在左上角
		ctx.lineTo(100, 100);
		ctx.stroke();
		// 可以在js中设置canvas的宽高，这样的设置是真实有效的
        canvas.height = 100;
		canvas.width = 100;

	</script>
	
</body>
</html>
```

## canvas的坐标体系

如果在CSS中修改画布宽高的话，最后的效果其实是： 先使用默认的300*150大小的画布，然后绘制，最后缩放为定义的大小。 

但是在CSS中的设置其实是缩放的逻辑。



## 避免重复画线 beginPath

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');  // 得到上下文
// 下面两步其实是canvas把绘图过程放到了内存里
ctx.moveTo(0, 0);
ctx.lineTo(100, 100);
ctx.stroke();  // stroke后才会运行内存中的绘制操作

ctx.beginPath();  // 清除内存中的路径，重新开始一条。
ctx.moveTo(100, 0);
ctx.lineTo(200, 100);
ctx.lineTo(200, 200);
ctx.strokeStyle = "#0F0";  // 改变绘制的线的颜色
ctx.stroke();
```



## canvas 画圆

```javascript
ctx.beginPath();
ctx.arc(300, 300, 50, 0, 2*Math.PI, true);  
// 前两个参数是圆心的坐标，
// 第三个参数是半径，
// 第四个参数和第五个参数是起始弧度和终止的弧度，一个完整的圆就是 0 - 2π
// 第六个参数是顺时针还是逆时针画， true代表逆时针
```



## canvas 画矩形

```javascript
// 可以使用画四条线的方式来画矩形，但是这里使用现成的API来画矩形
ctx.strokeRect(300, 100, 200, 100);
// 第一个和第二个参数是坐标
// 第三个参数、第四个参数是宽高
// 并且不需要stroke()，封装在内了
```



## 闭合路径 closePath

`ctx.closePath();`



## 填充

填充一个路径的内部区域

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');  // 得到上下文
ctx.moveTo(0, 0);  // 原点在左上角
ctx.lineTo(100, 100);
ctx.lineTo(100, 200);
ctx.fillStyle = "rgba(0, 255, 0, 1)"  // 设置填充的样式
ctx.fill();  // 如果画的是线，没有内部区域的话，那么就不会有填充的效果
```

补充：

设置描边的线宽： `ctx.lineWidth = 10;`



## canvas 平移（针对坐标系）

`ctx.translate(0, 100);  // 平移的是坐标系的原点	` 

就算beginPath()生成新的路径，但是坐标系平移的效果是不会消失的。



## canvas 旋转 （针对坐标系）

```javascript
ctx.rotate(Math.PI / 4);  // 旋转45°， 旋转的是整个坐标系
```



## canvas 缩放 （针对坐标系）

```javascript
ctx.scale(1, 0.5)  // x轴不缩放， y轴缩放0.5，而且是在之前的特效基础上上进行的
ctx.fillRect(0, -100, 100, 100); // 画个正方形，直接填充
```



上面就感觉canvas使用起来会很复杂，因为需要不停的计算，而且原来已经设置好的还会影响后续的绘制，但是在实际项目中canvas并不是这么用的，没有这么复杂。

下面就这个问题来说两个函数，用途：保存上下文的环境，包括图形变换和样式，而且一定要成对出现。

## .save()

在起始的地方进行save()，保存了一份环境，然后就开始进行一系列的图形变换

## .restore()

恢复环境，恢复成之前save()的环境的位置，之后进行的绘制都不会受到之前的各种操作的影响



# 小例子： 画表盘

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');  // 得到上下文
canvas.height = 500;
canvas.width = 500;
console.log(canvas.height, canvas.width);
		
ctx.translate(200, 200);
ctx.arc(0, 0, 50, 0, Math.PI * 2, true);
ctx.stroke();
ctx.beginPath();

// ctx.moveTo(40, 0);
// ctx.lineTo(50, 0);
// ctx.stroke();
		
for(var i=0; i<12; i++){
	ctx.rotate(Math.PI / 6);
	ctx.moveTo(40, 0);
	ctx.lineTo(50, 0);
}

ctx.stroke();
```



## 渐变

### 线性渐变 createLinearGradient

```javascript
// 有四个参数，代表两个点
// 前两个参数： 第一个点的xy坐标
// 后两个参数： 第二个点的xy坐标
var linearGradient = ctx.createLinearGradient(50, 50, 150, 150);


// 第一个参数是位置。通过百分比表示
linearGradient.addColorStop(0, 'rgb(255, 0, 0)');  // 在对角线段的0%的位置是红色
linearGradient.addColorStop(1, 'rgb(0, 0, 255)');  // 在对角线段的100%位置是蓝色

// 怎么用呢？ 其实渐变也是一种样式，可以设置到fillStyle里面使用
ctx.fillStyle = linearGradient;
ctx.fillRect(0, 0, 200, 200);
```

效果如下：

![1568950874050](E:\notes\WebApp\media\1568950874050.png)

渐变是怎么产生的呢？

在(50, 50) 到 (150, 150) 拉了一条线段，中间的颜色就是，0%的时候是红色，100%的时候是蓝色，其他地方的颜色取决于端点的颜色。

### 径向渐变 createRadialGradient

```javascript
// 第1 2 个参数是圆心，第3个参数是半径，后三个参数是另外一个圆
var radialGradient = ctx.createRadialGradient(400, 150, 0, 400, 150, 100);
radialGradient.addColorStop(0, 'rgb(255, 0, 0)');
radialGradient.addColorStop(1, 'rgb(0, 0, 255)');
ctx.fillStyle = radialGradient;

ctx.beginPath();
ctx.arc(400, 150, 100, 0, Math.PI * 2, true);
ctx.fill();
```

![1568962775258](E:\notes\WebApp\media\1568962775258.png)

## canvas 文字

