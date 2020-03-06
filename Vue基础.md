#  生命周期

## 图示

![](media/lifecycle.png)

![image-20200304130707269](media/image-20200304130707269.png)

# 选项数据 data

+ data
+ computed
+ methods

![image-20200304135159167](media/image-20200304135159167.png)



![image-20200304134142966](media/image-20200304134142966.png)

# 模板语法

+ data
+ 模板中直接嵌入js代码
+ 指令 v-html、v-on、v-bind等
+ 计算属性
+ 过滤器

![image-20200304151528360](media/image-20200304151528360.png)

![image-20200304151547044](media/image-20200304151547044.png)

# 计算属性 computed

+ 在模板中放入太多的逻辑会让模板过重且难以维护
+ 计算属性下所有函数可以放到computed中

![image-20200304153020080](media/image-20200304153020080.png)

# Class与Style动态绑定  v-bind

![image-20200304153339478](media/image-20200304153339478.png)

## class 绑定方式

![image-20200304153423576](media/image-20200304153423576.png)

![image-20200304160807281](media/image-20200304160807281.png)

## style 绑定方式

![image-20200304153436175](media/image-20200304153436175.png)

![image-20200304161638753](media/image-20200304161638753.png)

# 条件渲染 v-if v-else v-else-if

![image-20200304163221254](media/image-20200304163221254.png)

# 列表渲染 v-for

![image-20200304163239885](media/image-20200304163239885.png)

![image-20200304165902445](media/image-20200304165902445.png)

# 事件处理器

![image-20200304212141937](media/image-20200304212141937.png)

![image-20200304214749319](media/image-20200304214749319.png)

![image-20200304214800556](media/image-20200304214800556.png)

# 自定义组件

![image-20200304214905161](media/image-20200304214905161.png)

 之前的Demo都是下载src/pages/ 目录下， pages目录下可以理解为一个个的 页面

compontents 组件，是放在 页面内的。

![image-20200304220748690](media/image-20200304220748690.png)

![image-20200304220757595](media/image-20200304220757595.png)

## [父子组件之间通信！](https://segmentfault.com/a/1190000014381699)

## VUE中的DOM操作  this.$refs

不建议使用VUE的时候直接操作DOM

非要操作的时候要在 **mounted** 生命周期函数里面使用，因为vue使用了虚拟DOM，挂载后也就变成了真实DOM

![image-20200305134935840](media/image-20200305134935840.png)

# 过渡效果 transition

通过样式的方式写过渡

![image-20200305141825815](media/image-20200305141825815.png)

![image-20200305141843782](media/image-20200305141843782.png)

# [路由 vue-router](https://router.vuejs.org/zh/)

![image-20200305142222566](media/image-20200305142222566.png)

之前做的Demo每个页面都是单独的，在`router/index.js` 里面添加路由

![image-20200305142031513](media/image-20200305142031513.png)

解决页面之间的跳转

![image-20200305152119476](media/image-20200305152119476.png)

被跳转的页面 获取 params以及query： 

![image-20200305152155219](media/image-20200305152155219.png)

# ！状态管理 [vuex](https://vuex.vuejs.org/zh/)

![image-20200305152325866](media/image-20200305152325866.png)

看图理解

![image-20200305152519852](media/image-20200305152519852.png)

这种多页面跳转的话，通过路由传值就会变得特别麻烦

这时候只要有一个共享数据池，也就是全局状态管理，那么就不需要传了，直接去vuex里面取就可以了。

## 新建目录

vuex的store目录在 /src/目录下

![image-20200305154930049](media/image-20200305154930049.png)

在Vue实例中使用

![image-20200305155004080](media/image-20200305155004080.png)

基本使用（获取、修改）

![image-20200305155032129](media/image-20200305155032129.png)

# Slot 插槽

常用于组件调用中

![image-20200305225932442](media/image-20200305225932442.png)

![image-20200305225945009](media/image-20200305225945009.png)

# vue-resource请求

类似ajax请求，给后台发送请求接口

![image-20200305230044255](media/image-20200305230044255.png)

![image-20200305231034292](media/image-20200305231034292.png)

# 移动组件库 [Mint UI](http://mint-ui.github.io/docs/#/zh-cn)

前言：

VUE最主要的就是在做组件开发，最终还是要回归组件开发，大部分时间都是在做组件开发，每个页面只是调用开发的组件。上述就是别人写好的组件，打包好了，我们可以直接用。

