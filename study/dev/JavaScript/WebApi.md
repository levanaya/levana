---
sidebar_position: 3
---

# Web API

## DOM-获取DOM元素、修改属性

### 一、Web API 基本认知 

#### 1.作用和分类

- 作用: 就是使用 JS 去操作 html 和浏览器 
- 分类：DOM (文档对象模型)、BOM（浏览器对象模型）

![image-20221102214713668](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102214713.png)



#### 2.什么是DOM

- DOM（Document Object Model——文档对象模型）是用来呈现以及与任意 HTML 或 XML文档交互的API 
- 白话文：DOM是浏览器提供的一套专门用来 操作网页内容 的功能 
- DOM作用 ：开发网页内容特效和实现用户交互



#### 3.DOM树

DOM树是什么 

- 将 HTML 文档以树状结构直观的表现出来，我们称之为文档树或 DOM 树 
- 描述网页内容关系的名词 
- 作用：文档树直观的体现了标签与标签之间的关系

![image-20221102215627905](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102215627.png)

![image-20221102215653334](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102215653.png)

#### 4.DOM对象

- DOM对象：浏览器根据html标签生成的 JS对象 

  - 所有的标签属性都可以在这个对象上面找到 
  - 修改这个对象的属性会自动映射到标签身上 

- DOM的核心思想 

  - 把网页内容当做对象来处理 

- document 对象 

  - 是 DOM 里提供的一个对象 

  - 所以它提供的属性和方法都是用来访问和操作网页内容的 

    例：document.write() 

  - 网页所有内容都在document里

### 二、获取DOM元素

#### 1.根据CSS选择器来获取DOM元素

##### 1.1 选择匹配的第一个元素

**语法**： 

```
document.querySelector('css选择器')
```

**参数**: 包含一个或多个有效的CSS选择器 **字符串** 

**返回值**： CSS选择器匹配的**第一个元素**,一个 HTMLElement对象。 如果没有匹配到，则返回null。

##### 1.2 选择匹配的多个元素

**语法**：

```
document.querySelectorAll('css选择器')
```

**参数**：

包含一个或多个有效的CSS选择器 字符串

**返回值**：

CSS选择器匹配的NodeList 对象集合

得到的是一个**伪数组**：

- 有长度有索引号的数组
- 但是没有pop() push() 等数组方法

不可以直接修改，只能通过遍历的方式一次给里面的元素做修改。

#### 2.其他获取DOM元素方法

![image-20221102221254074](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102221254.png)



### 三、设置/修改DOM元素内容

#### 1.document.write()

- 只能将文本内容追加到`</body>`前面的位置 
- 文本中包含的标签会被解析

![image-20221102221907718](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102221907.png)

#### 2.元素innerText 属性

- 将文本内容添加/更新到任意标签位置
- 文本中包含的标签不会被解析

![image-20221102222212958](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102222213.png)

#### 3.元素.innerHTML 属性 

- 将文本内容添加/更新到任意标签位置 
- 文本中包含的标签会被解析

![image-20221102222326150](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102222326.png)

### 四、设置/修改DOM元素属性

#### 1.设置/修改元素常用属性

- 还可以通过 JS 设置/修改标签元素属性，比如通过 src更换 图片
- 最常见的属性比如： href、title、src 等

**语法：**

```
对象.属性=值
```

![image-20221102222936795](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102222936.png)

#### 2.设置/修改元素样式属性

##### 1.通过 style 属性操作CSS

**语法**：

```
对象.style.样式属性=值
```

![image-20221102223236954](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102223237.png)

**注：**

1. 修改样式通过style属性引出 
2.  如果属性有-连接符，需要转换为小驼峰命名法 
3. 赋值的时候，需要的时候不要忘记加css单位

##### 2. 操作类名(className) 操作CSS

如果修改的样式比较多，直接通过style属性修改比较繁琐，我们可以通过借助于css类名的形式。 

**语法：**

![image-20221102223433708](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102223433.png)

**注意：** 

1. 由于class是关键字, 所以使用className去代替 
2. className是使用新值换旧值, 如果需要添加一个类,需要保留之前的类名

##### 3\. 通过 classList 操作类控制CSS

为了解决className 容易覆盖以前的类名，我们可以通过classList方式追加和删除类名 

**语法：**

![image-20221102224024926](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102224024.png)

#### 3.设置/修改 表单元素 属性

表单很多情况，也需要修改属性，比如点击眼睛，可以看到密码，本质是把表单类型转换为文本框 正常的有属性有取值的 跟其他的标签属性没有任何区别 

- 获取: DOM对象.属性名 
- 设置: DOM对象.属性名 = 新值

![image-20221102224240494](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102224240.png)

表单属性中添加就有效果,移除就没有效果,一律使用布尔值表示 如果为true 代表添加了该属性 如果是false 代 表移除了该属性 

比如： disabled、checked、selected

### 五、定时器-间歇函数

定时器函数可以开启和关闭定时器

#### 1.开启定时器

```
setInterval(函数，间隔时间)
```

- 作用：每隔一段时间调用这个函数 
- 间隔时间单位是毫秒

![image-20221102224523091](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102224523.png)

**注意：** 

1. 函数名字不需要加括号 
2. 定时器返回的是一个id数字

#### 2.关闭定时器

![image-20221102224637728](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102224637.png)

一般不会刚创建就停止，而是满足一定条件再停止

## DOM-事件基础

### 一、事件

- 什么是事件？ 

  事件是在编程时系统内发生的动作或者发生的事情 

  比如用户在网页上单击一个按钮 

- 什么是事件监听？

  就是让程序检测是否有事件产生，一旦有事件触发，就立即调用一个函数做出响应，也称为 注册事件 

**语法：**

```
元素.addEventListener('事件'，要执行的函数)
```

- 事件监听三要素： 
  - 事件源： 那个dom元素被事件触发了，要获取dom元素 
  - 事件： 用什么方式触发，比如鼠标单击 click、鼠标经过 mouseover 等 
  - 事件调用的函数： 要做什么事

![image-20221102225208797](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102225208.png)

**注意**：

1. 事件类型要加引号
2. 函数是点击之后再去执行，每次
    点击都会执行一次



**事件类型**：

![image-20221102225443376](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102225443.png)

### 二、高阶函数

#### 1.1 函数表达式

函数表达式和普通函数并无本质上的区别：

![image-20221102225551253](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102225551.png)

- 普通函数的声明与调用无顺序限制，推荐做法先声明再调用 
- 函数表达式必须要先声明再调用

#### 1.2 回调函数

如果将函数 A 做为参数传递给函数 B 时，我们称函数 A 为回调函数 

简单理解： 当一个函数当做参数来传递给另外一个函数的时候，这个函数就是回调函数

![image-20221102225800751](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102225800.png)

![image-20221102225818474](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102225818.png)

### 三、环境对象

环境对象指的是函数内部特殊的变量 this ，它代表着当前函数运行时所处的环境 

作用：弄清楚this的指向，可以让我们代码更简洁 

- 函数的调用方式不同，this 指代的对象也不同
-  【谁调用， this 就是谁】 是判断 this 指向的粗略规则 
- 直接调用函数，其实相当于是 window.函数，所以 this 指代 window

### 四、编程思想

**排他思想**

当前元素为A状态,其他元素为B状态 

使用：

1. 干掉所有人 使用for循环 
2. 复活他自己 通过this或者下标找到自己或者对应的元素

## DOM-节点操作

### 一、节点操作

#### 1.1 DOM节点

- **DOM节点** 
  - DOM树里每一个内容都称之为节点

- **节点类型** 

  - 元素节点 

  所有的标签 比如 body、 div 

  html 是根节点 

- **属性节点** 
  - 所有的属性 比如 href 
- **文本节点** 
  - 所有的文本  其他
- **其他**

#### 1.2 查找节点

**节点关系：** 父节点 子节点  兄弟节点

**父节点查找：** 

- parentNode 属性 
- 返回最近一级的父节点 找不到返回为null

```
子元素.parentNode
```

**子节点查找：** 

- childNodes 
  - 获得所有子节点、包括文本节点（空格、换行）、注释节点等 

- children 
  - 仅获得所有元素节点 
  - 返回的还是一个伪数组

```
父元素.children
```

**兄弟关系查找：**

- 下一个兄弟节点 
  - nextElementSibling 属性 
- 上一个兄弟节点 
  - previousElementSibling 属性

#### 1.3 增加节点

##### 1.创建节点 

即创造出一个新的网页元素，再添加到网页内，一般先创建节点，然后插入节点 

创建元素节点方法：

![image-20221102231318053](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102231318.png)

##### 2.追加节点

- 要想在界面看到，还得插入到某个父元素中 

- 插入到父元素的最后一个子元素:

  ![image-20221102231425137](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102231425.png)

- 插入到父元素中某个子元素的前面

  ![image-20221102231521747](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102231521.png)

#### 1.4 删除节点

若一个节点在页面中已不需要时，可以删除它

 在 JavaScript 原生DOM操作中，要删除元素必须通过父元素删除 

**语法**

```
父元素.removeChild(要删除的元素)
```

注： 

如不存在父子关系则删除不成功 

删除节点和隐藏节点（display:none） 有区别的： 隐藏节点还是存在的，但是删除，则从html中删除节点

### 二、时间对象

#### 1.实例化

- 在代码中发现了 new 关键字时，一般将这个操作称为实例化 
- 创建一个时间对象并获取时间

获取当前时间：

```
let date = new Date()
```

获取指定时间：

```
let date = new Date('1949-10-01')
```



#### 2.时间对象方法

因为时间对象返回的数据我们不能直接使用，所以需要转换为实际开发中常用的格式

![image-20221102232053146](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102232053.png)



#### 3.时间戳

**什么是时间戳** 

是指1970年01月01日00时00分00秒起至现在的毫秒数，它是一种特殊的计量时间的方式 

**三种方式获取时间戳** 

1. 使用 getTime() 方法

   ![image-20221102232200651](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102232257.png)

2. 简写 +new Date()

   ![image-20221102232218087](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102232302.png)

3. 使用 Date().now()

   无需实例化 

   但是只能得到当前的时间戳， 而前面两种可以返回指定时间的时间戳

   ![image-20221102232335119](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102232335.png)



### 三、重绘和回流

#### 1. 浏览器是如何进行界面渲染的

- 解析（Parser）HTML，生成DOM树(DOM Tree) 
- 同时解析（Parser） CSS，生成样式规则 (Style Rules) 
- 根据DOM树和样式规则，生成渲染树(Render Tree) 
- 进行布局 Layout(回流/重排):根据生成的渲染树，得到节点的几何信息（位置，大小） 
- 进行绘制 Painting(重绘): 根据计算和获取的信息进行整个页面的绘制 
- Display: 展示在页面上

#### 2. 重绘和回流(重排)

- 回流(重排) 

  当 Render Tree 中部分或者全部元素的尺寸、结构、布局等发生改变时，浏览器就会重新渲染部分或全部文档的过 程称为 回流。

- 重绘 

  由于节点(元素)的样式的改变并不影响它在文档流中的位置和文档布局时(比如：color、background-color、 outline等), 称为重绘。

- 重绘不一定引起回流，而回流一定会引起重绘。

会导致回流（重排）的操作： 

- 页面的首次刷新 
- 浏览器的窗口大小发生改变 
- 元素的大小或位置发生改变 
- 改变字体的大小 
- 内容的变化（如：input框的输入，图片的大小） 
- 激活css伪类 （如：:hover） 
- 脚本操作DOM（添加或者删除可见的DOM元素） 简单理解影响到布局了，就会有回流

## DOM-事件高级

### 一、事件对象

#### 1.获取事件对象

- 事件对象是什么 
  - 也是个对象，这个对象里有事件触发时的相关信息 
  - 例如：鼠标点击事件中，事件对象就存了鼠标点在哪个位置等信息

- 如何获取 
  - 在事件绑定的回调函数的第一个参数就是事件对象 
  - 一般命名为event、ev、e

![image-20221102233236127](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102233236.png)

#### 2.事件对象常用属性

**部分常用属性** 

- type 
  - 获取当前的事件类型 
- clientX/clientY 
  - 获取光标相对于浏览器可见窗口左上角的位置 
- offsetX/offsetY 
  - 获取光标相对于当前DOM元素左上角的位置 
- key 
  - 用户按下的键盘键的值 
  - 现在不提倡使用keyCode

### 二、事件流

#### 1. 事件流与两个阶段说明

- 事件流指的是事件完整执行过程中的流动路径
-  说明：假设页面里有个div，当触发事件时，会经历两个阶段，分别是捕获阶段、冒泡阶段 
- 简单来说：捕获阶段是 从父到子 冒泡阶段是从子到父

#### 2. 事件捕获和事件冒泡

- 事件冒泡概念:  当一个元素的事件被触发时，同样的事件将会在该元素的所有祖先元素中依次被触发。这一过程被称为事件冒泡 
- 简单理解：当一个元素触发事件后，会依次向上调用所有父级元素的同名事件 
- 事件冒泡是默认存在的

![image-20221102233901009](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102233925.png)

- 事件捕获概念： 从DOM的根元素开始去执行对应的事件 (从外到里) 

- 事件捕获需要写对应代码才能看到效果 

- 代码：

  ![image-20221102234034669](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102234118.png)

- 说明： 
  - addEventListener第三个参数传入true代表是捕获阶段触发（很少使用） 
  - 若传入false代表冒泡阶段触发，默认就是false 
  - 若是用 L0 事件监听，则只有冒泡阶段，没有捕获

#### 3. 阻止事件流动

- 因为默认就有冒泡模式的存在，所以容易导致事件影响到父级元素 

- 若想把事件就限制在当前元素内，就需要阻止事件流动 

- 阻止事件流动需要拿到事件对象 

- 语法：

  ![image-20221102234305665](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/image-20221102234305665.png)

- 此方法可以阻断事件流动传播，不光在冒泡阶段有效，捕获阶段也有效

- 鼠标经过事件： 
  - mouseover 和 mouseout 会有冒泡效果 
  - mouseenter 和 mouseleave 没有冒泡效果(推荐)

- 阻止默认行为，比如链接点击不跳转，表单域的不提交 

- 语法：

  ![image-20221102234504663](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102234504.png)

![image-20221102234539653](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102234706.png)

### 三、事件委托

事件委托是利用事件流的特征解决一些开发需求的知识技巧 

- 总结： 
  - 优点：给父级元素加事件（可以提高性能） 
  - 原理：事件委托其实是利用事件冒泡的特点， 给父元素添加事件，子元素可以触发 
  - 实现：事件对象.target 可以获得真正触发事件的元素

![image-20221102234804311](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102234903.png)

## DOM-网页特效篇

### 一、滚动事件和加载事件

#### 1.1 滚动事件 

- 当页面进行滚动时触发的事件 

- 为什么要学？ 

  - 很多网页需要检测用户把页面滚动到某个区域后做一些处理， 比如固定导航栏，比如返回顶部 

- 事件名：scroll 

- 监听整个页面滚动：

  ![image-20221102235215256](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102235215.png)

- 监听某个元素的内部滚动直接给某个元素加即可

#### 1.2 加载事件 

- 加载外部资源（如图片、外联CSS和JavaScript等）加载完毕时触发的事件 

- 为什么要学？ 

  - 有些时候需要等页面资源全部处理完了做一些事情 
  - 老代码喜欢把 script 写在 head 中，这时候直接找 dom 元素找不到 

- 事件名：load

-  监听页面所有资源加载完毕： 

  - 给 window 添加 load 事件

    ![image-20221102235410870](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102235712.png)

注意：不光可以监听整个页面资源加载完毕，也可以针对某个资源绑定load事件



- 当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表 、图像等完全加载 

- 事件名：DOMContentLoaded 

- 监听页面DOM加载完毕： 

  - 给 document 添加 DOMContentLoaded 事件

    ![image-20221102235638997](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102235639.png)



### 二、元素大小和位置

#### 1. scroll家族

![image-20221102235938999](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102235939.png)

- 获取宽高： 
  - 获取元素的内容总宽高（不包含滚动条）返回值不带单位 
  - scrollWidth和scrollHeight 
- 获取位置:  
  - 获取元素内容往左、往上滚出去看不到的距离 
  - scrollLeft和scrollTop 
  - 这两个属性是可以修改的

![image-20221102235921454](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221102235921.png)

开发中，我们经常检测页面滚动的距离，比如页面滚动100像素，就可以显示一个元素，或者固定一个元素

![image-20221103000105597](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103000105.png)

document.documentElement HTML 文档返回对象为HTML元素

#### 2. offset家族

![image-20221103000235601](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103000259.png)

- 获取宽高： 
  - 获取元素的自身宽高、包含元素自身设置的宽高、padding、border 
  - offsetWidth和offsetHeight 
- 获取位置： 
  - 获取元素距离自己定位父级元素的左、上距离
  - offsetLeft和offsetTop 注意是只读属性

#### 3. client家族

![image-20221103000357389](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103000614.png)

- 获取宽高： 
  - 获取元素的可见部分宽高（不包含边框，滚动条等） 
  - clientWidth和clientHeight 
- 获取位置： 
  - 获取左边框和上边框宽度 
  - clientLeft和clientTop 注意是只读属性

- 会在窗口尺寸改变的时候触发事件： 

  - resize

    ![image-20221103000757042](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103000757.png)

- 检测屏幕宽度：

  ![image-20221103000506813](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103000506.png)

## DOM-操作浏览器

### 一、window对象

#### 1.1 BOM 

![image-20221103001130173](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103001130.png)

- BOM(Browser Object Model ) 是浏览器对象模型
- window 是浏览器内置中的全局对象，我们所学习的所有 Web APIs 的知识内容都是基于 window 对象实现的 
- window 对象下包含了 navigator、location、document、history、screen 5个属性，即所谓的 BOM （浏览器对象模 型） 
- document 是实现 DOM 的基础，它其实是依附于 window 的属性。 
- 注：依附于 window 对象的所有属性和方法，使用时可以省略 window



#### 1.2 定时器-延时函数

![image-20221103001314717](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103001357.png)

![image-20221103001614320](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103001614.png)

- 两种定时器对比： 
  - setInterval 的特征是重复执行，首次执行会延时 
  - setTimeout 的特征是延时执行，只执行 1 次 
  - setTimeout 结合递归函数，能模拟 setInterval 重复执行 
  - clearTimeout 清除由 setTimeout 创建的定时任务

#### 1.3 JS 执行机制

**JS 是单线程**

JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。这是因为 Javascript 这 门脚本语言诞生的使命所致——JavaScript 是为处理页面中用户的交互，以及操作 DOM 而诞生的。比 如我们对某个 DOM 元素进行添加和删除操作，不能同时进行。 应该先进行添加，之后再删除。 

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问 题是： 如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。

为了解决这个问题，利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程。于是，JS 中出现了同步和异步。

**同步**

前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步 做法：我们要烧水煮饭，等水开了（10分钟之后），再去切菜，炒菜。

**异步**

你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事 情。比如做饭的异步做法，我们在烧水的同时，利用这10分钟，去切菜，炒菜。 

他们的本质区别： 这条流水线上各个流程的执行顺序不同。

**同步任务** 

同步任务都在主线程上执行，形成一个执行栈。

**异步任务** 

JS 的异步是通过回调函数实现的。 

一般而言，异步任务有以下三种类型: 

1、普通事件，如 click、resize 等 

2、资源加载，如 load、error 等 

3、定时器，包括 setInterval、setTimeout 等 

异步任务相关添加到任务队列中（任务队列也称为消息队列）。

**JS 执行机制**

1. 先执行执行栈中的同步任务。 

2. 异步任务放入任务队列中。 
3. 一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务 结束等待状态，进入执行栈，开始执行。

![image-20221103002210719](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103002533.png)

由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为事件循环（ event loop）。

#### 1.4 location对象

- location 的数据类型是对象，它拆分并保存了 URL 地址的各个组成部分 

- 常用属性和方法： 

  - href 属性获取完整的 URL 地址，对其赋值时用于地址的跳转 

    ![image-20221103002426395](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103002533.png)

  - search 属性获取地址中携带的参数，符号 ？后面部分 

    ![image-20221103002456417](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103002456.png)

  - hash 属性获取地址中的啥希值，符号 # 后面部分 

    ![image-20221103002508177](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103002508.png)

  - reload 方法用来刷新当前页面，传入参数 true 时表示强制刷新

    ![image-20221103002558397](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103002558.png)

#### 1.5 navigator对象

- navigator的数据类型是对象，该对象下记录了浏览器自身的相关信息 

- 常用属性和方法： 

  - 通过 userAgent 检测浏览器的版本及平台

    ![image-20221103002657462](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103002657.png)

#### 1.6 histroy对象

history 的数据类型是对象，该对象与浏览器地址栏的操作相对应，如前进、后退、历史记录等 

常用属性和方法：

![image-20221103002747734](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221103002747.png)



### 二、本地存储

#### 2.1 本地存储特性

随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在 本地存储大量的数据，HTML5规范提出了相关解决方案。

1、数据存储在用户浏览器中 

2、设置、读取方便、甚至页面刷新不丢失数据 

3、容量较大，sessionStorage和localStorage约 5M 左右

#### 2.2 localStorage

1、生命周期永久生效，除非手动删除 否则关闭页面也会存在 

2、可以多窗口（页面）共享（同一浏览器可以共享） 

3、以键值对的形式存储使用

![image-20221103002942201](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/image-20221103002942201.png)

**存储复杂数据类型存储** 

本地只能存储字符串,无法存储复杂数据类型.需要将复杂数据类型转换成JSON字符串,在存储到本地 

**JSON.stringify(复杂数据类型)** 

将复杂数据转换成JSON字符串 存储 本地存储中 

**JSON.parse(JSON字符串)** 

将JSON字符串转换成对象 取出 时候使用

#### 2.3 sessionStorage

1、生命周期为关闭浏览器窗口 

2、在同一个窗口(页面)下数据可以共享 

3、 以键值对的形式存储使用 

4、 用法跟localStorage 基本相同
