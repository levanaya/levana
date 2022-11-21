---
sidebar_position: 3
---

# JavaScript

## 1. 解释下什么是变量声明提升？

变量提升（hoisting），是负责解析执行代码的 JavaScript 引擎的工作方式产生的一个特性。

JS引擎在运行一份代码的时候，会按照下面的步骤进行工作：

1. 首先，对代码进行预解析，并获取声明的所有变量

2. 然后，将这些变量的声明语句统一放到代码的最前面

3. 最后，开始一行一行运行代码



我们通过一段代码来解释这个运行过程：

```js
console.log(a) 

var a = 1 

function b() { 
  console.log(a) 
}

b() // 1
```



上⾯这段代码的实际执⾏顺序为: 

1. JS引擎将 `var a = 1` 分解为两个部分：变量声明语句 `var a = undefined` 和变量赋值语句 `a = 1` 
2. JS引擎将 `var a = undefined` 放到代码的最前面，而 `a = 1` 保留在原地 



也就是说经过了转换，代码就变成了:

```js
var a = undefined

console.log(a) // undefined 

a = 1

function b() { 
  console.log(a) 
}

b() // 1
```



变量的这一转换过程，就被称为变量的声明提升。

而这是不规范, 不合理的, 我们用的  let 就没有这个变量提升的问题



## 2. JS 的参数是以什么方式进行传递的？

基本数据类型和复杂数据类型的数据在传递时，会有不同的表现。

**基本类型：是值传递**！

基本类型的传递方式比较简单，是按照 `值传递` 进行的。

```js
let a = 1

function test(x) { 
  x = 10  // 并不会改变实参的值
  console.log(x)
}

test(a) // 10 
console.log(a) // 1
```



**复杂类型: 传递的是地址! (变量中存的就是地址)**

![image-20221015165031021](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165031.png)

来看下面的代码：

```js
let a = {
  count: 1 
}

function test(x) { 
  x.count = 10
  console.log(x)
}

test(a) // { count: 10 }
console.log(a) // { count: 10 }
```

从运行结果来看，函数内改变了参数对象内的 `count` 后，外部的实参对象 `a` 的内容也跟着改变了，所以传递的是地址。

思考题:

```js
let a = {
  count: 1 
}; 

function test(x) { 
  x = { count: 20 };
  console.log(x); 
}

test(a); // { count: 20 }
console.log(a); // { count: 1 }
```

![image-20221015165122302](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165122.png)

我们会发现外部的实参对象 `a` 并没有因为在函数内对形参的重新赋值而被改变！

因为当我们直接为这个形参变量重新赋值时，其实只是让形参变量指向了别的堆内存地址，而外部实参变量的指向还是不变的。

下图展示的是复杂类型参数传递后的状态：

![image-20221015165151234](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165151.png)

下图展示的是重新为形参赋值后的状态：

![image-20221015165223549](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165223.png)



## 3. JavaScript垃圾回收是怎么做的？

JS中内存的分配和回收都是自动完成的，内存在不使用的时候会被垃圾回收器自动回收。

正因为垃圾回收器的存在，许多人认为JS不用太关心内存管理的问题，

但如果不了解JS的内存管理机制，我们同样非常容易成内存泄漏（内存无法被回收）的情况。

###  3.1 内存的生命周期

JS环境中分配的内存, 一般有如下生命周期：

1. 内存分配：当我们声明变量、函数、对象的时候，系统会自动为他们分配内存

2. 内存使用：即读写内存，也就是使用变量、函数等

3. 内存回收：使用完毕，由垃圾回收自动回收不再使用的内存

   全局变量一般不会回收, 一般局部变量的的值, 不用了, 会被自动回收掉

内存分配:

```jsx
// 为变量分配内存
let i = 11
let s = "ifcode"

// 为对象分配内存
let person = {
    age: 22,
    name: 'ifcode'
}

// 为函数分配内存
function sum(a, b) {
    return a + b;
}
```

### 3.2 垃圾回收算法说明

所谓垃圾回收, 核心思想就是如何判断内存是否已经不再会被使用了, 如果是, 就视为垃圾, 释放掉

下面介绍两种常见的浏览器垃圾回收算法: 引用计数 和 标记清除法

### 3.3 引用计数

IE采用的引用计数算法, 定义“内存不再使用”的标准很简单，就是看一个对象是否有指向它的引用。

如果没有任何变量指向它了，说明该对象已经不再需要了。

```jsx
// 创建一个对象person, person指向一块内存空间, 该内存空间的引用数 +1
let person = {
    age: 22,
    name: 'ifcode'
}

let p = person   // 两个变量指向一块内存空间, 该内存空间的引用数为 2
person = 1       // 原来的person对象被赋值为1，对象内存空间的引用数-1,
                 // 但因为p指向原person对象，还剩一个对于对象空间的引用, 所以对象它不会被回收

p = null         // 原person对象已经没有引用，会被回收
```

由上面可以看出，引用计数算法是个简单有效的算法。

**但它却存在一个致命的问题：循环引用。**

如果两个对象相互引用，尽管他们已不再使用，垃圾回收器不会进行回收，导致内存泄露。

```jsx
function cycle() {
    let o1 = {}
    let o2 = {}
    o1.a = o2
    o2.a = o1 
    return "Cycle reference!"
}

cycle()
```

![image-20221015165255210](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165255.png)

### 3.4 标记清除算法

现代的浏览器已经不再使用引用计数算法了。

现代浏览器通用的大多是基于标记清除算法的某些改进算法，总体思想都是一致的。

标记清除法:

- 标记清除算法将“不再使用的对象”定义为“无法达到的对象”。 

- 简单来说，就是从根部（在JS中就是全局对象）出发定时扫描内存中的对象。

- 凡是能从根部到达的对象，都是还需要使用的。那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收。

从这个概念可以看出，无法触及的对象包含了没有引用的对象这个概念（没有任何引用的对象也是无法触及的对象）。

根据这个概念，上面的例子可以正确被垃圾回收处理了。

参考文章：[JavaScript内存管理](https://www.jianshu.com/p/84a8fd5fa0ee)



## 4. 谈谈你对 JavaScript 作用域、作用域链的理解？

作用域：就是一个规则，用来查找变量。

作用域是变量和函数的可访问范围，即作用域控制着变量与函数的可见性和生命周期。是一个独立的地盘，让变量不会外泄、暴露出去。也就是说作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突。

常见的作用域有：全局作用域、局部作用域、块级作用域、动态作用域。

所有window对象的属性拥有全局作用域。

JavaScript 在执⾏过程中会创建一个个的**可执⾏上下⽂**。 (每个函数执行都会创建这么一个可执行上下文)

每个可执⾏上下⽂的词法环境中包含了对外部词法环境的引⽤，可通过该引⽤来获取外部词法环境中的变量和声明等。

这些引⽤串联起来，⼀直指向全局的词法环境，形成一个链式结构，被称为作⽤域链。

简而言之: 函数内部 可以访问到 函数外部作用域的变量,  而外部函数还可以访问到全局作用域的变量,

这样的变量作用域访问的链式结构, 被称之为作用域链

```js
let num = 1

function fn () {
  let a = 100
  function inner () {
    console.log(a)
    console.log(num)
  }
  inner()
}
fn()
```



下图为由多个可执行上下文组成的调用栈：

- 栈最底部为`全局可执行上下文`
- `全局可执行上下文` 之上有多个 `函数可执行上下文`
- 每个可执行上下文中包含了指向外部其他可执行上下文的引用，直到 `全局可执行上下文` 时它指向 `null`

![image-20221015165328989](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165329.png)

![image-20221015165343374](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165343.png)

js全局有全局可执行上下文, 每个函数调用时, 有着函数的可执行上下文, 会入js调用栈

每个可执行上下文, 都有者对于外部上下文词法作用域的引用, 外部上下文也有着对于再外部的上下文词法作用域的引用 

**=> 就形成了作用域链**



## 5. 谈谈你对闭包的理解？

这个问题想考察的主要有两个方面：

- 对闭包的基本概念的理解
- 对闭包的作用的了解

**什么是闭包？**

MDN的官方解释：

> 闭包是函数和声明该函数的词法环境的组合

更通俗一点的解释是：

> 内层函数, 引用外层函数上的变量, 就可以形成闭包

需求: 定义一个计数器方法, 每次执行一次函数, 就调用一次进行计数

```js
let count = 0
function fn () {
  count++
  console.log('fn函数被调用了' + count + '次')
}
fn()
```

这样不好! count 定义成了全局变量, 太容易被别人修改了,  我们可以利用闭包解决

闭包实例:

```jsx
function fn () {
  let count = 0

  function add () {
    count++
    console.log('fn函数被调用了' + count + '次')
  }

  return add
}
const addFn = fn()
addFn()
addFn()
addFn()
```

**闭包有哪些表现形式？**

1. 返回一个函数。

2. 在定时器、事件监听、Ajax请求、跨窗口通信、Web Workers或者任何异步中，只要**使用了回调函数**，实际上就是在使用闭包。

   以下的闭包保存的仅仅是window和当前作用域。

   ```
   // 定时器
   setTimeout(function timeHandler(){
   console.log('111');
   }，100)
   // 事件监听
   $('#app').click(function(){
   console.log('DOM Listener');
   })
   ```

3. IIFE(立即执行函数表达式)创建闭包, 保存了全局作用域window 和 当前函数的作用域 ，因此可以全局的 变量。

   ```
   var a = 2;
   (function IIFE(){
   // 输出2
   console.log(a);
   })();
   ```

   

**闭包的主要作用是什么？**

在实际开发中，闭包最大的作用就是用来 **变量私有**。

下面再来看一个简单示例：

```js
function Person() {
  // 以 let 声明一个局部变量，而不是 this.name
  // this.name = 'zs'     =>  p.name
  let name = 'hm_programmer' // 数据私有
  
  this.getName = function(){ 
    return name
  }
  
  this.setName = function(value){ 
    name = value
  }
}

// new:
// 1. 创建一个新的对象
// 2. 让构造函数的this指向这个新对象
// 3. 执行构造函数
// 4. 返回实例
const p = new Person()
console.log(p.getName()) // hm_programmer

p.setName('Tom')
console.log(p.getName()) // Tom

p.name // 访问不到 name 变量：undefined
```

在此示例中，变量 `name` 只能通过 Person 的实例方法进行访问，外部不能直接通过实例进行访问，形成了一个私有变量。



## 6. JavaScript中数据类型的隐式转换规则(了解)

在if语句、逻辑语句、数学运算逻辑、== 等情况下都可能出现隐式类型转换。

下表展示了一系列原始值，通过隐式转换成数字、字符串、布尔类型后所得到的值：

![image-20221015165414157](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165414.png)

坑: 判断时,  尽量不要用 `= =` , 要用 `= = =` ( 两个等号判断,  如果类型不同,  默认会进行隐式类型转换再比较)



## 7. 谈谈你对原型链的理解？

要讲清楚这个问题，主要着重这几个方面：

- 什么是原型对象
- 构造函数, 原型对象, 实例的三角关系图
- 原型链如何形成

![image-20221015165436207](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165436.png)

**原型对象**

在 JavaScript 中，除去一部分内建函数，绝大多数的函数都会包含有一个叫做 `prototype` 的属性，指向原型对象，

基于构造函数创建出来的实例, 都可以共享访问原型对象的属性。

例如我们的 `hasOwnProperty`, `toString` ⽅法等其实是 Obejct 原型对象的方法，它可以被任何对象当做⾃⼰的⽅法来使⽤。

`hasOwnProperty` 用于判断, 某个属性, 是不是自己的  (还是原型链上的)

来看一段代码：

```js
let person = { 
  name: "Tom", 
  age: 18, 
  job: "student"
}

console.log(person.hasOwnProperty("name")) // true 
console.log(person.hasOwnProperty("hasOwnProperty")) // false 
console.log(Object.prototype.hasOwnProperty("hasOwnProperty")) // true
```

可以看到，`hasOwnProperty` 并不是 `person` 对象的属性，但是 `person` 却能调用它。

那么 `person` 对象是如何找到 Object 原型中的 `hasOwnProperty` 的呢？这就要靠原型链的能力了。

需求: 简单绘制原型三角关系图!



**原型链**

在 JavaScript 中，每个对象中都有一个 `__proto__` 属性，这个属性指向了当前对象的构造函数的原型。

对象可以通过自身的 `__proto__`属性与它的构造函数的原型对象连接起来，

而因为它的原型对象也有 `__proto__`，因此这样就串联形成一个链式结构，也就是我们称为的原型链。

![image-20221015165500278](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165500.png)

## 6. 谈谈对于继承的理解

**为什么要学习继承 ?**

写的构造函数, 定义了一个类型 (人类), 万一项目非常大, 又有了细化的多个类型 (老师, 工人, 学生)

学习继承, 可以让多个构造函数之间建立关联, 便于管理和复用

**什么是继承 ?**

继承: 从别人那里, 继承东西过来 (财产, 房产)

代码层面的继承: 继承一些属性构造的过程和方法

### 6.1 继承 - 原型继承

原型继承: 通过改造原型链, 利用原型链的语法, 实现继承方法!

分析需求:

​	人类, 属性: name, age

​	学生, 属性: name, age, className

​	工人, 属性: name, age, companyName

无论学生, 还是工人, => 都是人类, 所以人类原型上有的方法, 他们都应该要有

```js
// 1. 定义Person构造函数
function Person (name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  console.log('人类会说话')
}

// 2. 定义Student构造函数
function Student (name, age, className) {
  this.name = name
  this.age = age
  this.className = className
}
// 3. 原型继承: 利用原型链, 继承于父级构造函数, 继承原型上的方法
// 语法: 子构造函数.prototype = new 父构造函数()
Student.prototype = new Person()
Student.prototype.study = function() {
  console.log('学生在学习')
}

let stu = new Student('张三', 18, '80期')
stu.say()
console.log(stu)
```

![image-20221015165718745](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165718.png)

### 6.2 继承 - 组合继承

组合继承有时候也叫伪经典继承，指的是将原型链 和 借用构造函数 call 技术组合到一块，

从而发挥二者之长的一种继承模式，其背后的思路: **是使用原型链实现对原型属性和方法的继承 (主要是方法)，**

**而通过借用构造函数来实现对实例属性构造的继承**。这样既通过在原型上定义方法实现了函数复用，又能保证每个实例都有它的自己的属性。

```js
// 1. 定义Person构造函数
function Person (name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  console.log('人类会说话')
}

// 2. 定义Student构造函数
function Student (name, age, className) {
  Person.call(this, name, age) // 实现构造属性的继承
  this.className = className
}

// 3. 原型继承: 利用原型链, 继承于父级构造函数, 继承原型上的方法
// 语法: 子构造函数.prototype = new 父构造函数()
Student.prototype = new Person()
Student.prototype.study = function() {
  console.log('学生在学习')
}

let stu = new Student('张三', 18, '80期')
stu.say()
console.log(stu)

// 方法通过 原型继承
// 属性通过 父构造函数的.call(this, name, age)
```



### 6.3 继承 - 寄生组合继承

student实例上有 name age,  而原型 `__proto__`上不需要再有这些属性, 所以利用 Object.create 改装下

Object.create(参数对象),  

1. Object.create 会创建一个新对象,
2. 并且这个新对象的`__proto__` 会指向传入的参数对象

```js
// 1. 定义Person构造函数
function Person (name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  console.log('人类会说话')
}

// 2. 定义Student构造函数
function Student (name, age, className) {
  Person.call(this, name, age)
  this.className = className
}

// 3. 原型继承: 利用原型链, 继承于父级构造函数, 继承原型上的方法
// 语法: 子构造函数.prototype = new 父构造函数()
Student.prototype = Object.create(Person.prototype)
Student.prototype.study = function() {
  console.log('学生在学习')
}

let stu = new Student('张三', 18, '80期')
stu.say()
console.log(stu)


// 总结:
// Object.create() 以参数的对象, 作为新建对象的__proto__属性的值, 返回新建的对象
```

![image-20221015165743928](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165744.png)

### 6.4 es6 - class 实现继承 extends

```jsx
// 继承关键字 => extends
class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  jump () {
    console.log('会跳')
  }
}

class Teacher extends Person {
  constructor (name, age, lesson) {
    super(name, age) // extends 中, 必须调用 super(), 会触发执行父类的构造函数
    this.lesson = lesson
    console.log('构造函数执行了')
  }
  sayHello () {
    console.log('会打招呼')
  }
}

let teacher1 = new Teacher('zs', 18, '体育')
console.log(teacher1)
```



## 8. 如何判断是否是数组？

方法一：使用 `toString` 方法

```js
function isArray(arg) {
	return Object.prototype.toString.call(arg) === '[object Array]'
}

let arr = [1,2,3]
isArray(arr)  // true
```

方法二：使用 ES6 新增的 `Array.isArray` 方法

```js
let arr = [1,2,3]
Array.isArray(arr) // true
```



## 9. 谈谈你对this的理解？

`this` 是一个在运行时才进行绑定的引用，在不同的情况下它可能会被绑定不同的对象。



**默认绑定** (指向window的情况)  (函数调用模式 fn() )

默认情况下，`this` 会被绑定到全局对象上，比如在浏览器环境中就为`window`对象，在node.js环境下为`global`对象。

如下代码展示了这种绑定关系：

```js
message = "Hello"; 

function test () { 
  console.log(this.message); 
}

test() // "Hello"
```



**隐式绑定** (谁调用, this指向谁) (方法调用模式 obj.fn() )

如果函数的调用是从对象上发起时，则该函数中的 `this` 会被自动隐式绑定为对象：

```js
function test() {
	console.log(this.message); 
}

let obj = {
  message: "hello,world",
  test: test
}

obj.test() // "hello,world"
```



**显式绑定** (又叫做硬绑定)  (上下文调用模式, 想让this指向谁, this就指向谁)

硬绑定 => call  apply  bind

作用：改变函数运行时this的指向

区别：

- apply：两个参数，第一个是this的指向，第二个是函数接受的参数，以数组的形式传入，如果第一个参数null或者undefined，this默认指向window
- call：两个参数，第一个是this的指向，第二个是参数列表
- bind：两个参数，第一个是this的指向，第二个是参数列表
- call和apply改变this指向原函数立即执行，临时改变this指向一次。而bind改变this指向不会立即执行，返回一个永久改变this指向的函数。

可以显式的进行绑定：

```js
function test() {
	console.log(this.message); 
}

let obj1 = {
  message: "你好世界123"
}

let obj2 = {
  message: "你好世界456"
}

test.bind(obj1)() // "你好世界123"
test.bind(obj2)() // "你好世界456"
```



**new 绑定** (构造函数模式)

另外，在使用 `new` 创建对象时也会进行 `this` 绑定

当使用 `new` 调用构造函数时，会创建一个新的对象并将该对象绑定到构造函数的 `this` 上：

```js
function Greeting(message) {
	this.message = message;
}

var obj = new Greeting("hello,world")
obj.message // "hello,world"
```

小测试:

```jsx
let obj = {
    a: {
        fn: function () {
            console.log(this)
        },
        b: 10
    }
}
obj.a.fn()
let temp = obj.a.fn;
temp()

// -------------------------------------------------------------

function Person(theName, theAge){
    this.name = theName
    this.age = theAge
}
Person.prototype.sayHello = function(){ // 定义函数
    console.log(this)
}

let per = new Person("小黑", 18)
per.sayHello()
```





## 10. 箭头函数的理解以及箭头函数中的this指向什么？

注意点：

- 箭头函数内的this是静态的，总是指向定义时所在的对象，而不是调用时，而且this的指向是不可以改变的。
- this始终指向函数声明时所在作用域下的this的值。
- 箭头函数不能当做构造函数，也就是不可以用new命令，否则报错。
- 箭头函数不存在arguments对象，即不能使用伪数组去接受参数，可以使用rest参数代替。

箭头函数不同于传统函数，它其实没有属于⾃⼰的 `this`，

它所谓的 `this` 是, 捕获其外层  上下⽂的 `this` 值作为⾃⼰的 `this` 值。

并且由于箭头函数没有属于⾃⼰的 `this` ，它是不能被 `new` 调⽤的。

我们可以通过 Babel 转换前后的代码来更清晰的理解箭头函数:

```js
// 转换前的 ES6 代码
const obj = { 
  test() { 
    return () => { 
      console.log(this === obj)
    }
  } 
}
```

```js
// 转换后的 ES5 代码
var obj = { 
  test: function getArrow() { 
    var that = this
    return function () { 
      console.log(that === obj)
    }
  } 
}
```

这里我们看到，箭头函数中的 `this` 就是它上层上下文函数中的 `this`。

不适用的场景：与this有关的回调，事件回调，对象的方法回调

适用场景：与this无关的回调，定时器，数组的方法回调

## 11. Promise 的理解和静态方法

Promise是异步编程的一种解决方案

多个串联的异步操作形成的回调地狱

Promise是一个构造函数，用来生成Promise实例。

promise的三个状态: pending(默认)   fulfilled(成功)   rejected(失败)

1. resolve函数被执行时, 会将promise的状态从 pending 改成 fulfilled 成功，在异步操作成功时调用
2. reject函数被执行时, 会将promise的状态从pending 改成 rejected 失败，在异步操作失败时调用
3. 状态不受外界的影响，只有异步操作的结果，决定当前是哪一种状态

Promise.reject()

```js
new Promise((resolve, reject) => {
	reject()//返回异步操作的结果
})
```

Promise.resolve()

```jsx
new Promise((resolve, reject) => {
	resolve()//返回异步操作的结果
})
```

**实例方法**

- **.then():**当实例状态发生改变的时候的回调函数，返回的是一个新的Promise实例，也就是Promise可以链式书写的原因

  ```javascript
  p.then((value)=>{//resolve(已成功)的状态
  	console.log(value)
  },(reason)=>{//rejected(已失败)的状态
  	console.log(reason)
  })
  ```

- **.catch():**用来指定发生错误的回调函数，一般来说通过catch替代then的第二个参数

  ```javascript
  p.catch((value)=>{
  	console.log(value)
  })
  ```

- **.finally():**用来指定不管Promise对象状态最后如何，都会执行的操作



**Promise.all([promise1, promise2, promise3])**  等待原则, 是在所有promise都完成后执行, 可以用于处理一些`并发的任务`

```jsx
// 后面的.then中配置的函数, 是在前面的所有promise都完成后执行, 可以用于处理一些并发的任务
Promise.all([promise1, promise2, promise3]).then((values) => {
  // values 是一个数组, 会收集前面promise的结果 values[0] => promise1的成功的结果
})
```

**Promise.race([promise1, promise2, promise3]**) 赛跑, 竞速原则, 只要三个promise中有一个满足条件, 就会执行.then(用的较少)

![image-20221015165822889](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165823.png)

## 12. 宏任务 微任务 是什么

小例题:

```jsx
console.log(1)

setTimeout(function() {
	console.log(2)
}, 0)

console.log(3)
```

宏任务: 主线程代码, setTimeout 等属于宏任务,  上一个宏任务执行完, 才会考虑执行下一个宏任务

微任务: promise .then .catch的需要执行的内容, 属于微任务, 满足条件的微任务, 会被添加到当前宏任务的最后去执行

![image-20221015165844221](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165844.png)

**事件循环队列 eventLoop**

![image-20221015165909391](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165909.png)

例题1:

```jsx
  console.log(1)

  setTimeout(function() {
    console.log(2) // 宏任务
  }, 0)

  const p = new Promise((resolve, reject) => {
    resolve(1000)
  })
  p.then(data => {
    console.log(data)  // 微任务
  })

  console.log(3)
```

![image-20221015165929032](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015165929.png)

例题2:

```jsx
async function fn () {
  console.log(111)
}
fn()
console.log(222)
```

例题3:

```jsx
async function fn () {
  const res = await 2
  console.log(res)
}
fn()
console.log(222)
```

例题4:

```jsx
async function fn () {
  console.log('嘿嘿')
  const res = await fn2()
  console.log(res)  // 微任务
}
async function fn2 () {
  console.log('gaga')
}
fn()
console.log(222)
```

![image-20221015170006734](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015170006.png)

考察点: async 函数只有从 await 往下才是异步的开始



## 13. async/await是什么？

ES7 标准中新增的 `async` 函数，从目前的内部实现来说其实就是 `Generator` 函数的语法糖。

它基于 Promise，并与所有现存的基于Promise 的 API 兼容。 

**async 关键字**

1. `async` 关键字用于声明⼀个异步函数（如 `async function asyncTask1() {...}`） 

2. `async` 会⾃动将常规函数转换成 Promise，返回值也是⼀个 Promise 对象 

3. `async` 函数内部可以使⽤ `await` 

**await 关键字**

1. `await` 用于等待异步的功能执⾏完毕 `var result = await someAsyncCall()` 

2. `await` 放置在 Promise 调⽤之前，会强制async函数中其他代码等待，直到 Promise 完成并返回结果 

3. `await` 只能与 Promise ⼀起使⽤

4. `await` 只能在 `async` 函数内部使⽤ 



## 14. 相较于 Promise，async/await有何优势？

1. 同步化代码的阅读体验（Promise 虽然摆脱了回调地狱，但 then 链式调⽤的阅读负担还是存在的）
2. 和同步代码更一致的错误处理方式（ async/await 可以⽤成熟的 try/catch 做处理，比 Promise 的错误捕获更简洁直观） 
3. 调试时的阅读性, 也相对更友好



## 15. 深拷贝 浅拷贝

引用类型, 进行赋值时, 赋值的是地址

1. 浅拷贝

   ```jsx
   let obj = {
   	name: 'zs',
   	age: 18
   }
   let obj2 = {
       ...obj
   }
   ```

2. 深拷贝

   ```jsx
   let obj = {
   	name: 'zs',
   	age: 18,
       car: {
           brand: '宝马',
           price: 100
       }
   }
   
   let obj2 = JSON.parse(JSON.stringify(obj))
   console.log(obj2)
   ```

   当然递归也能解决, 只是比较麻烦~

   ...

其他方案, 可以参考一些博客

## 16. js数据类型有哪些？

基本数据类型：Boolean、Number、String、undefined、Null、Symbol（ES6新增，表示独一无二的值）

引用数据类型：Object、Array、Function

在 JS 中，存在着 7 种原始值，分别是： boolean null undefined number string symbol bigint 

引用数据类型: 对象Object（包含普通对象-Object，数组对象-Array，正则对象-RegExp，日期对象Date，数学函数-Math，函数对象-Function）

基础数据类型存储在栈中，引用类型存储在堆中。

## 17. 防抖和节流

防抖：将多次高频操作优化为在最后一次执行，通常使用的场景是：用户输入，只需再输入完成后做一次输入校验即可。（如果在定时时间内再次触发事件，则清空定时器，重新计时）

节流：每隔一段时间后执行一次，也就是降低效率。通常使用的场景是：滚动条事件或者resize事件，通常每隔1--~500ms执行一次即可。

## 18. Ajax的原理是什么？如何实现

Ajax 的原理简单来说通过 XmlHttpRequest 对象来向服务器发异步请求，从服务器获得数据， 然后用javascript来操作DOM而更新页面。

XMLHttpRequest 是 ajax 的核心机制，它是在 IE5 中首先引入的，是一种支持异步请求的 技术。简单的说，也就是 javascript 可以及时向服务器提出请求和处理响应，而不阻塞用户。 达到无刷新的效果。

实现过程：

1. 创建Ajax的核心对象XMLHttpRequest对象

   new XMLHttpRequest()实例化对象

2. 通过XMLHttpRequest对象的open()方法与服务端建立连接

   new XMLHttpRequest().open(method:表示请求方式，url:服务器的地址)

3. 构建请求所需的数据内容，并通过XMLHttpRequest对象的send()方法发送给服务器端

   new XMLHttpRequest().send(body:发送的数据)

4. 通过XMLHttpRequest对象提供的onreadystatechange事件监听服务器端的通信状态

   new XMLHttpRequest().onreadystatechange主要监听的属性是实例化对象中readyState（5个状态）

   0：open()未调用

   1：send():未调用

   2：send()已经调用，响应头和响应状态已经返回

   3：响应体正在下载，responseText（接收服务端响应的数据）获取到部分的数据

   4：整个请求过程已经完毕

   只要readyState属性值发生了改变，onreadyStatechange被触发

5. 接受并处理服务端向客户端响应的数据结果

6. 将处理结果更新到HTML页面中

```html
  <script>
    // 1. 创建 XHR 对象
    var xhr = new XMLHttpRequest()
    // 2. 调用 open 函数
    xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
    // 3. 调用 send 函数
    xhr.send()
    // 4. 监听 onreadystatechange 事件
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // 获取服务器响应的数据
        console.log(xhr.responseText)
      }
    }
  </script>
```



## 19. JS中清空数组的方法

1. splice

   第一个参数：规定添加或者删除元素的位置

   第二个参数：要删除元素的数量

   ```
   arr.splice(0，arr.length)//影响原数组
   ```

2. length

   ```
   arr.length=0
   ```

3. 赋值为[]

   ```
   arr=[]
   ```

   

## 20. JS对事件代理的理解以及应用场景

事件代理：把一个元素响应事件的函数委托到另一个元素上，也叫事件委托

事件流：捕获阶段-->目标阶段-->冒泡阶段（事件委托）

```html
<body>
    <ul>
        <li>我是第1个小li</li>
        <li>我是第2个小li</li>
        <li>我是第3个小li</li>
        <li>我是第4个小li</li>
        <li>我是第5个小li</li>
    </ul>
    <script>
        // 不要每个小li注册事件了  而是把事件委托给他的爸爸 
        // 事件委托是给父级添加事件 而不是孩子添加事件
        let ul = document.querySelector('ul')
        ul.addEventListener('click', function (e) {
            // alert('我点击了')
            // 得到当前的元素
            // console.log(e.target)
            e.target.style.color = 'red'
        })
    </script>
</body>
```

只要操作一次dom，从而提高了程序的性能

## 21. JS中内存泄露的几种情况

内存泄露：由于疏忽或者错误造成程序未能释放已经不再使用的内存

1. 意外的全局变量(解决方式：使用严格模式)

   ```html
   'use strict'
   function fun(){
   	a=10
   	console.log(a)
   	this.b=20//this指向window
   }
   fun()
   console.log(a)//10
   console.log(b)//20
   ```

2. 定时器-->及时清除定时器/没有及时清除的dom元素-->test=null

   ```
   var time=setInterval(()=>{},2000)
   clearInterval(time)
   ```

3. 闭包

   ```html
   function fun(name){
   	function fun1(){
   		console.log(name)
   	}
   	return fun1
   }
   var fn=fun('张三')
   fn()//张三
   //解决办法
   fn=null
   ```

4. 事件监听-->解决办法：在不使用的时候取消事件监听

## 22. JS中'use strict' 是什么意思？使用它的区别在哪

使用严格模式，不会支持一些不规范的语法

1. 使调试更加容易
2. 变量在赋值之前必须要声明，防止意外的全局变量
3. 取消this的强制转换（fun.apply(null)，引用null或者未定义的值，this值会自动强制到全局变量）
4. 不允许函数参数重名

## 23. JS中对事件流的理解

事件流：从页面中接收事件的顺序

事件流分为三个阶段：捕获阶段，当前目标阶段，冒泡阶段

## 24. 如何使用Promise封装ajax

```javascript
function getJSON(url){
    let xhr=new XMLHttpRequest();
    xhr.open('get',url,true);
    xhr.send(null);
    xhr.onreadystatechange=function(){
        if(xhr.readyState!==4)return
        if(xhr.status>=200&&xhr.status<300){
            resolve(xhr.responseText)
        }else{
            reject(new Error(this.statusText))
        }
    }
    //设置错误的监听函数
    xhr.onerror=function(){
        reject(new Error(xhr.statusText))
    }
    //设置相应数据的类型
    xhr.responseType='json'
}
getJSON('').then((value)=>{
    console.log(value)
}).catch((reason)=>{
    console.log(reason)
})
```

## 25. JS如何判断一个属性是属于实例对象还是继承于构造函数

通过hasOwnProperty()检测一个属性是否属于自身对象，还是继承于原型链上的

```javascript
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.sex="男"；
var p=new Person("张三"，18)；
p.phone=123456;
p.height=188;
console.log(p);
console.log(p.hasOwnProperty("phone"))//true
console.log(p.hasOwnProperty("sex"))//false
//筛选出自身属性
for(let i in p){
    if(p.hasOwnProperty(i)){
        console.log(p[i])//name,age,phone,height
    }
}
```

## 26. ES6 中for...of 和for...in 的区别

for ...of 遍历获取对象的键值，for...in获取对象的键名

for...in会遍历对象整个原型链，for...of只会遍历当前对象

对于数组的遍历，for...in 返回数组中所有可枚举的属性，for ...of返回数组的下标对应的属性值

for ...in，主要是为了遍历对象而产生，for...of 可以用来遍历数组，对象等

```javascript
function Person(name,age,sex){
    this.name=name
    this.age=age
    this.sex=sex
}
Person.prototype.height=188
var p=new Person("张三"，18，男)
p[Symbol.iterator]=function(){
    var keys=Object.keys(this);
    var index=0;
    return {
        next(){
            if(index<keys.length){
                return {value:p[keys[index++],done:false]}
            }else{
                return {value:undefined,done:true}
            }
        }
    }
}
for(let value of p){
    console.log(value)
}
for(let key in p){
    console.log(key)
}
```

```javascript
var arr=[1,2,3,4,5]
for(let i in arr){
    console.log(i);//0,1,2,3,4
}
for(let i of arr){
    console.log(i)//1,2,3,4,5
}
```

## 27. JS中数组的遍历方法有哪些

forEach:不会改变原数组，没有返回值

```javascript
var arr=[1,2,3,4,5,6]
arr.forEach((item,index,arr)=>{
    console.log(item);
    console.log(index);
    console.log(arr);
})
```

map:不会改变原数组，有返回值

```javascript
var arr=[1,2,3,4,5,6]
let resultMap=arr.map((item,index,arr)=>{
    console.log(item);
    console.log(index);
    console.log(arr);
    return index*2
})
```

filter:过滤数组，有返回值，返回包含符合条件的元素的数组

```javascript
arr.filter((item)=>{
    console.log(item);
    return item>3
})
```

for ...of:返回是数组的元素

```javascript
for(let value of arr){
    console.log(value)//1,2,3,4,5
}
```

reduce:接收一个函数，作为一个累加器

第一个参数计算之后返回的值或者初始值，第二个是当前的元素

```javascript
let result=arr.reduce((pre,item)=>{
    console.log("pre",pre)
    console.log("item",item)
    return pre+item
},0)
console.log(result)//21
```

## 28. JS如何判断一个对象是否属于一个类

类本身指向就是构造函数，类的数据类型就是函数

```javascript
function Person(name){
	this.name=name
}
var obj=new Person("张三")
//instanceof：判断构造函数的prototype属性是否出现在对象的原型链的任意位置
var obj1={}
console.log(obj instanceof Person);//true
console.log(obj1 instanceof Person);//false
//对象的属性constructor来判断，指向该对象的构造函数(不好，可被修改)
console.log(obj.__proto__constructor);
obj.__proto__.constructor=Array;
```

## 29. JS中如何判断一个对象是空对象

1. 使用JSON自带的.stringify方法来判断
2. 使用Object.keys()来判断，返回一个数组，通过判断数组长度

## 30. JS数据类型检测的方式有哪些

1. typeof(检测数据类型的运算符)

   ```javascript
   console.log(typeof 10)
   ```

2. instanceof(检测某一个实例是否属于这个类，可以正确判断对象的类型，不可以判断基本数据类型，内部运行机制，判断在它的原型链上能否找到这个类型的原型)

   ```javascript
   console.log(10 instanceof Number)
   ```

3. constructor(检测实例和类的关系，从而检测数据类型)

   ```javascript
   console.log((10).constructor===Number)
   ```

4. Object.prototype.toString.call()(检测数据类型)

   ```javascript
   var a=Object.prototype.toString
   console.log(a.call(10))
   ```

   

## 31. JS中判断数组的方法有哪些

1. 通过Object.prototype.toString.call()做判断

   ```javascript
   console.log(Object.prototype.toString.call([]).slice(8,-1)==='Array')
   ```

2. 通过原型链做判断

   ```javascript
   console.log([]._proto===Array.prototype)
   ```

3. 通过ES6的Array.isArray()做判断

   ```javascript
   console.log(Array.isArray([]))
   ```

4. 通过instanceof做判断

   ```javascript
   console.log([] instanceof Array)
   ```

5. 通过Array.prototype.isPrototypeof做判断

   ```javascript
   console.log(Array.prototype.isPrototypeof([]))
   ```

   
