# Flex布局

Flex布局是Flexible Box的缩写，意为“灵活的盒子”或“弹性盒子”，所以flex布局一般也叫做“弹性布局”。

## 基本概念

1. flex容器（flex container）

   采用flex布局的元素，称为flex容器

   `.box{display:flex | inline-flex;}`

2. flex项目（flex item）

   flex容器的所有子元素自动成为容器成员，称为flex项目

   > 注意：
   >
   > 只有flex容器的子元素是flex项目，孙子元素就不再是flex项目了。
   >
   > 除非把flex容器的子元素也设置为flex容器。

3. 其他概念

   ![image-20191030103245429](E:\notes\ln-FontEnd\media\image-20191030103245429.png)

   + main axis： 容器主轴宽度，默认是水平方向

     main start：容器主轴的开始

     main end：容器主轴的结束

   + cross axis：容器交叉轴，默认是垂直方向

     cross start：容器交叉轴的开始

     cross end：容器交叉轴的结束

   + main size：项目主轴宽度

   + cross size：项目交叉轴宽度

   + **项目默认按主轴排列**
   
   

## 容器的属性

### display

决定了是否使用flex布局

```css
.box {
    display: flex | inline-flex;
}
```

区别： 在没有指定宽度的情况下：

flex: 父容器有固定宽度的。

inline-flex： 相当于内联块，里面宽度是被内容撑开的。

### flex-direction

决定主轴的方向（即项目的排列方向）

```css
.box {
    flex-direction: row | row-reverse | column | column-reverse;
}
/* 项目默认按主轴的方向排列 */
```

### flex-wrap

默认情况下，项目都排在一条线上（又称“轴线”上）

flex-wrap属性定义，如果一条轴线排不下，如何换行

```css
.box {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```

+ nowrap：不换行（默认） 。排不下会压缩项目的宽高
+ wrap：换行，第一行在上方。不会压缩项目的宽高，会换行
+ wrap-reverse：换行，第一行在下方。

### flex-flow

flex-flow是flex-direction属性和flex-wrap属性的简写形式。默认值为row nowrap。

```css
.box {
    flex-flow: <flex-direction> || <flex-wrap>;
}
```

### justify-content

定义了项目在主轴上的对齐方式

```css
.box {
    justify-content: flex-start左对齐 | flex-end右对齐 | center居中 | space-between | space-around;
}
```

flex-start： 左对齐

![image-20191105141827262](E:\notes\ln-FontEnd\media\image-20191105141827262.png)

flex-end： 右对齐，整体右对齐，不会改变排列顺序。

![image-20191105141839262](E:\notes\ln-FontEnd\media\image-20191105141839262.png)

center：整体居中。

![image-20191105141901472](E:\notes\ln-FontEnd\media\image-20191105141901472.png)

space-betweeb： 两端对齐，项目之间的间隔都相等

![image-20191105141750248](E:\notes\ln-FontEnd\media\image-20191105141750248.png)

space-around： 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

![image-20191105141738798](E:\notes\ln-FontEnd\media\image-20191105141738798.png)

### align-items 属性

定义项目在交叉轴上如何对齐

```css
.box {
    align-items: flex-start | flex-end | center | baseline | stretch;
}
```

flex-start： 交叉轴的起点对齐

![image-20191105142221023](E:\notes\ln-FontEnd\media\image-20191105142221023.png)

flex-end： 交叉轴的重点对齐

![image-20191105142242424](E:\notes\ln-FontEnd\media\image-20191105142242424.png)

center： 交叉轴的中点对齐

![image-20191105142350719](E:\notes\ln-FontEnd\media\image-20191105142350719.png)

baseline：项目的第一行文字的基线对齐

![image-20191105142526175](E:\notes\ln-FontEnd\media\image-20191105142526175.png)

stretch（默认值）：如果项目**未设置高度**或**设为auto**，将占满整个容器的高度

![image-20191105142755320](E:\notes\ln-FontEnd\media\image-20191105142755320.png)

### align-content

定义了很多根轴线（多行）在交叉轴上的对齐方式

如果项目只有一根轴线（一行），该属性不起作用

```css
.box {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

flex-start：交叉轴的起点对齐

![image-20191105143114880](E:\notes\ln-FontEnd\media\image-20191105143114880.png)

flex-end： 从底端开始

![image-20191105143146393](E:\notes\ln-FontEnd\media\image-20191105143146393.png)

center：与交叉轴的中点对齐

![image-20191105143224041](E:\notes\ln-FontEnd\media\image-20191105143224041.png)

space-between：与交叉轴两端对齐，轴线之间的间隔平均分布

![image-20191105143312129](E:\notes\ln-FontEnd\media\image-20191105143312129.png)

space-around： 每根轴线两侧的间隔都相等

所以，轴线之间的间隔比轴线与边框的间隔大一倍

![image-20191105143418777](E:\notes\ln-FontEnd\media\image-20191105143418777.png)

stretch（默认值）：轴线占满整个交叉轴

![image-20191105143522216](E:\notes\ln-FontEnd\media\image-20191105143522216.png)

## 项目的属性

### order

定义项目的排列顺序

数值越小，排列越靠前，默认为0

```css
.item {
    order: <integer>;
}
```

### flex-grow

flex-grow 属性定义项目的放大比例，**默认为0**，即如果存在剩余空间，也不放大

如果所有的项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）

![image-20191105144522607](E:\notes\ln-FontEnd\media\image-20191105144522607.png)

如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍

![image-20191105144551671](E:\notes\ln-FontEnd\media\image-20191105144551671.png)



如果有的项目有flex-grow属性，有的项目有width属性，

有flex-grow属性的项目将等分剩余空间

### flex-shrink

定义了项目的缩小比例，**默认为1**，即如果空间不足，该项目将缩小

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小

如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小

负值对该属性无效。

### flex-basis

属性定义了多分配多余空间之前，项目占据的主轴空间（main size）

浏览器会根据这个属性，计算主轴是否有多余空间

它的默认值为auto，即项目的本来大小

### flex

是 flex-grow，flex-shrink，flex-basis 的简写，默认值为  0 1 auto

后两个属性可选

### align-self

允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性

默认为auto，表示集成父元素的align-items属性，如果没有父元素，则等同于stretch

![image-20191105152435286](E:\notes\ln-FontEnd\media\image-20191105152435286.png)