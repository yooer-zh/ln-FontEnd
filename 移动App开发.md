# 入门概述

针对移动端的web开发

移动端： 手机、平板电脑 等

web开发： 代码是由HTML CSS JS写的，在浏览器中运行

移动端web分类开发：

移动web开发、混合式开发(Hybrid App)、微信小程序/公众号开发。

# 一、物理像素(physical pixel)

分辨率

1792 * 828 像素分辨率

横向有828个点，纵向有1792个点，这里的点，也就是物理像素了，也可以称为设备像素 (**dp**:device pixel)

如果以物理像素为准，那么 不同清晰度的相同大小的手机，一个物理像素的大小是不同的，也就是实际开发中是不会使用物理像素的。

# 二、CSS像素

CSS像素/逻辑像素(logical pixel)/设备独立像素(dip: device independent pixel)，三个名字。

也是实际开发中使用的像素。

一个CSS像素 在标清屏幕下，是一个物理像素，而高清屏幕下，是使用四个物理像素。保证一样大。

## 设备像素比(dpr: device pixel ratio)

dpr = 设备像素/CSS像素（缩放比是1的情况下）

dpr = 2  表示1个css像素用 2*2 个设备像素来绘制

这样也就可以解释 标清屏和高清屏了。

## 缩放

缩放改变的是CSS像素的大小，因为物理像素是不可能通过代码改变的。

### 放大

原来： 1CSS像素 = 1物理像素

放大2倍的意思就是，1CSS像素=2 * 2个物理像素

### 缩小

原来： 1CSS像素 = 1物理像素

放大2倍的意思就是，2 * 2CSS像素=1个物理像素

## PPI: pixel per inch

每英寸的物理像素点， 也可以称为 dpi: dots per inch

可以理解成像素密度，在一定范围内，每英寸上物理像素越多，就表示像素密度越大，显示也就越精细。

![image-20191030101502098](E:\notes\ln-FontEnd\media\image-20191030101502098.png)

# 三、视口

针对移动端提出的概念，所以在PC端开发的时候就不需要理解它。

针对移动端开发时，设置视口大小

```html
<meta name="viewport" content="device-width">
```

缩放比 为1的时候效果同上，这里缩放的是CSS像素

```html
<meta name="viewport" content="initial-scale=1">
```

是否允许用户缩放，很多国外的浏览器是不支持的，认为应该支持用户缩放

```html
<meta name="viewport" content="user-scalable=no"> <!-- 不允许用户缩放 -->
<meta name="viewport" content="usermaximum-scale=1,minimum-scale=1"><!-- 同上 -->
```

获取视口宽度

```javascript
window.innerWidth
document.documentElement.clientWidth
document.documentElement.getBoundingClientRect().width
```

获取dpr

```html
console.log(window.devicePixelRatio);
```

# 四、box-sizing

在PC端考虑兼容性方面的问题，PC端很少使用，但是移动端会使用

```css
.box{
    display: block;
    width: 150px;
    height: 150px;
    background-color: red;
}
.box1 {
    box-sizing: content-box; /* 默认为content-box */
    padding: 10px;  /* 加上内边距后，盒子的总体大小会改变 */
    border: 10px solid #ccc; /* 边框同样会让盒子变大 */
}
.box2 { /* 设置为border-box后，加上内边距、边框都不会影响盒子的总体大小 */
    box-sizing: border-box; 
    padding: 10px;
    border: 10px solid #ccc;
}
```

使用场景：

假如在手机上想要让两张图片在一行显示，每张图片的宽度是 50%，但是如果稍微改动一下，比如加一个边框、加一些内边距，总体盒子的大小就会改变，从而无法在同一行显示。

# 五、图标字体

同时具有图标、字体的特性。

图片会比较大，小图标（icon）小而方便。

图标字体库： iconfont

先去阿里巴巴矢量字体库中下载，然后解压得到css、4个字体文件，导入使用。

```html
<link rel="stylesheet" href="css/iconfont.css">

<i class="iconfont icon-scan"></i>
```

