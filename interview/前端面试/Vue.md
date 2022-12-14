---
sidebar_position: 4
---

# Vue

## 1. 什么是 M V  VM

Model-View-ViewModel 模式

![image-20221015170529655](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015170529.png)

**Model 层**: 数据模型层

通过 `Ajax`、`fetch` 等 API 完成客户端和服务端业务模型的同步。



**View 层**: 视图层

作为视图模板存在，其实View 就是⼀个动态模板。



**ViewModel 层**: 视图模型层

负责暴露数据给 View 层，并对 View 层中的数据绑定声明、 指令声明、 事件绑定声明, 进行实际的业务逻辑实现。

**数据变化了, 视图自动更新** => ViewModel 底层会做好监听Object.defineProperty，当数据变化时，View 层会自动更新

**视图变化了, 绑定的数据自动更新** =>  会监听双向绑定的表单元素的变化，⼀旦变化，绑定的数据也会得到⾃动更新。

ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

## 2. MVVM的优缺点有哪些？

**优点**

1. 实现了视图（View）和模型（Model）的分离，降低代码耦合、提⾼视图或逻辑的复⽤性

2. 提⾼了可测试性：ViewModel 的存在可以帮助开发者更好地编写测试代码 

3. 能⾃动更新 DOM：利⽤双向绑定，数据更新后视图⾃动更新，让开发者从繁琐的⼿动操作 DOM 中解放出来 

**缺点**

1. Bug 难被调试：因为使⽤了双向绑定的模式，当我们看到界⾯发生异常了，有可能是 View 的代码产生的 Bug，

   也有可能是Model 代码的问题。数据绑定使得⼀个位置的 Bug 被快速传递到别的位置，

   要定位原始出问题的地⽅就变得不那么容易了

   可采用的调试方案:

   (1) 注释掉一段代码, 确定代码的位置

   (2) debugger 打断点 或者 console 进行调试

2. 在⼀个⼤的模块中 Model 也会很⼤，虽然使⽤上来说⽅便了，但如果⻓期持有不释放内存，就会造成更多的内存消耗 

   占用的是 浏览器的 内存



## 3. 谈谈对Vue生命周期的理解？

**生命周期的概念**

每个 Vue 实例(每个组件也都是一个vue实例)都有⼀个完整的⽣命周期：

1. 开始创建 (空实例)
2. 初始化数据
3. 编译模版
4. 挂载 DOM
5. 渲染、更新数据 => 重新渲染
6. 卸载

这⼀系列过程我们称之为 Vue 的⽣命周期。



**各个生命周期的作用**

| 生命周期      | 执行时机                                                     |
| ------------- | ------------------------------------------------------------ |
| beforeCreate  | 在组件实例被创建之初、组件的属性⽣效之前被调用，执行一些初始化任务 |
| created       | 在组件实例已创建完毕。此时属性也已绑定，但真实DOM还未⽣成，$el 还不可⽤，常用于异步获取数据 |
| beforeMount   | 在组件挂载开始之前被调⽤。相关的 render 函数⾸次被调⽤，组件未进行渲染，dom还没创建 |
| mounted       | 在 el 被新建的 vm.$el 替换并挂载到实例上之后被调用，渲染完成，用于获取访问的数据和dom元素。 |
| beforeUpdate  | 在组件数据修改了, 视图更新之前调⽤。发⽣在虚拟 DOM 打补丁之前 |
| updated       | 在组件数据修改了, 视图更新之后被调用                         |
| activited     | 在组件被激活时调⽤（使用了 `<keep-alive>` 的情况下）         |
| deactivated   | 在组件被停用时调⽤（使用了 `<keep-alive>` 的情况下）         |
| beforeDestory | 在组件实例销毁前调⽤  (销毁: vue默认会进行释放掉实例所有的监听, 释放掉所有的组件...)，比如清除定时器，解绑事件等等 |
| destoryed     | 在组件销毁后调⽤  (像定时器,  webscoket连接, ... 跟vue没有太大关联的资源, 需要手动释放!) |



**生命周期示意图**

![image-20221015170559038](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015170559.png)



总共分为8个阶段**创建前/后，载入前/后，更新前/后，销毁前/后。** 

创建前/后： 在beforeCreate阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，el还没有。 

载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的 dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲 染。 

更新前/后：当data变化时，会触发beforeUpdate和updated方法。 

销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解 除了事件监听以及和dom的绑定，但是dom结构依然存在 

**（1）什么是vue生命周期** 

Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载 Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。 

**（2）vue生命周期的作用是什么** 

它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。 

**（3）第一次页面加载会触发哪几个钩子** 

第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子 

**（4）DOM 渲染在 哪个周期中就已经完成** 

DOM 渲染在 mounted 中就已经完成了 

**（5）简单描述每个周期具体适合哪些场景** 

生命周期钩子的一些使用方法： 

- beforecreate : 可以在这加个loading事件，在加载实例时触发 
- created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用 
- mounted : 挂载元素，获取到DOM节点 
- updated : 如果对数据统一处理，在这里写上相应函数 
- beforeDestroy : 可以做一个确认停止事件的确认框 
- nextTick : 更新数据后立即操作dom

## 4. 在Vue中网络请求应该放在哪个生命周期中发起？

至少在 `created` 之后, 因为数据才基本初始化完毕, 当然 `mounted` 中也可以 (比created稍晚一些)



## 5. Vue组件之间如何进行通信？

父传子, 子传父, 非父子, Vuex

### 5.1  props 和 $emit

(1) 通过 `props` 将数据在组件树中进行⾃上⽽下的传递；

```jsx
<jack :money="count" :obj="myobj"></jack>
```

```jsx
export default {
  // props: ['money']
  props: {
      money: {
          type: Number,
          default: 1
      },
      obj: {
          type: Object,
          default: () => {
              return {
                  name: 'zs',
                  age: 18
              }
          }
      }
  }
}
```

附件: props [验证](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81)

(2) 通过 `$emit` 和 `@` 来作信息的向上传递。 

```js
this.$emit('add-action', 参数1, 参数2, ...)
```

```jsx
<jack @add-action="fatherFn"></jack>
```

 通过自定义事件向父组件传递数据

自定义事件的流程：

1. 在子组件中，通过$emit来触发事件，传递数据
2. 在父组件中，通过v-on去监听子组件的事件

### 5.2  eventBus事件总线

可通过 EventBus 进⾏信息的发布与订阅。 (创建一个都能访问到的事件总线)

```jsx
Vue.prototype.$eventBus = new Vue()   // this.$eventBus
```

```jsx
// A组件中, 监听 bus的事件
this.$eventBus.$on('事件名', function(参数1, 参数2, ...) {
	...
})

// B组件中, 触发 bus的事件
this.$eventBus.$emit('事件名', 参数1, 参数2, ...)
```



### 5.3 $children $parent  $refs

(1) $children

父组件中,  $children 返回的是一个组件集合（数组），如果你能清楚的知道子组件的顺序，你也可以使用下标来操作

```jsx
// 父组件中
<template>
  <div class="hello_world">
    <com-a></com-a>
    <com-b></com-b>
  </div>
</template>
```

this.$children[0]  =>  `<com-a></com-a>`

this.$children[1]  =>  `<com-b></com-b>`

(2) $parent

子组件中, this.$parent 指向父组件

this.$parent.xxx = 200

this.$parent.fn()

(3) $refs

通过添加 ref 和 $refs 配合, 也可以很方便的获取子组件, 访问调用子组件的属性或方法

```jsx
// 父组件中
<template>
  <div class="hello_world">
    <com-a ref="coma"></com-a>  // this.$refs.coma.count = 200
    <com-b ref="comb"></com-b>  // this.$refs.comb.addFn()
  </div>
</template>
```

this.$refs.coma => `<com-a></com-a>`

this.$refs.comb =>  `<com-b></com-b>`



### 5.4 provide inject

**成对出现：**provide和inject是成对出现的

**作用**：用于父组件向子孙组件传递数据

**使用方法：**

- provide在父组件中, 返回要传给下级的数据，是一个对象或者一个返回对象的函数
- inject在需要使用这个数据的子孙组件中注入数据。（不论组件层次有多深），可以是一个字符串的数组，也可以是一个对象。

父组件

```jsx
export default {
	provide () {
        return {
            value: this.value // 共享给子孙组件的数据
        }
    },
    data () {
        return {
            value: '父组件的数据',
            money: 100
        }
    }
}
```

子孙组件

```jsx
export default {
    inject: ['value'],
    props: {
        ...
    }
}
```

provide/inject绑定不是响应式的

### 5.5 $attrs $listeners

在 Vue 2.4 版本中加⼊的 `$attrs` 和 `$listeners` 可以用来作为跨级组件之间的通信机制。 (父传孙)

**父组件**

```jsx
<template>
  <div>
    <my-child1 :money="100" desc='你好哇' @test1="fn1" @test2="fn2"></my-child1>
  </div>
</template>
```



**子组件**

```vue
<template>
  <div class="my-child1">
    <!-- $attrs => { "money": 100, "desc": "你好哇" } -->
    <div>{{ $attrs }}</div>
    <my-child2 v-bind="$attrs" v-on="$listeners" ></my-child2>
  </div>
</template>

<script>
import MyChild2 from './my-child2'
export default {
  created () {
    console.log(this.$listeners)
  },
  components: {
    MyChild2
  }
}
</script>
```

![image-20221015170628311](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015170628.png)

**孙组件**

```jsx
<template>
  <div>
    我是child2 - {{ money }} - {{ desc }}
    <button @click="clickFn">按钮</button>
  </div>
</template>

<script>
export default {
  props: ['money', 'desc'],
  methods: {
    clickFn () {
      this.$emit('test1', '嘎嘎')
      this.$emit('test2', '嘿嘿')
    }
  }
}
</script>
```

![image-20221015170649303](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015170649.png)

### 5.6 Vuex

全局状态管理库。可通过它来进行全局数据流的管理。

**state**: 存放数据

**mutations**: 存放操作数据的方法

**actions**: 存放一些异步操作 (也可以进行一些同步处理) 注意: actions是不能直接修改state数据的, 需要提交mutation

**getters**: 存放基于state计算出来的一些值 (计算属性)

**modules**: 分模块, 项目大了, 也推荐分模块管理 (同模块的vuex操作, 就会在一起)

注意点: 分模块了, 默认muations, actions, getters 注册到全局的, 一般会开启命名空间

语法: **namespaced: true**

 



## 6. methods、computed 和 watch的区别是什么？

**methods**

给vue定义方法

**computed**

1. 它是计算属性。主要用于值的计算并一般会返回一个值。所以它更多⽤于计算值的场景 
2. 它具有**缓存性**。当访问它来获取值时，它的 getter 函数所计算出来的值会进行缓存
3. **只有当它依赖的属性值发生了改变**，那下⼀次再访问时才会重新调⽤ getter 函数来计算 
4. 它适⽤于计算⽐较消耗性能的计算场景 
5. 必须要有一个返回值

**watch**

1. 它更多的是起到 “观察” 的作⽤，类似于对数据进行变化的监听并执行回调。

   主要⽤于观察 `props` 或 本组件data的值，当这些值发生变化时，执⾏处理操作

2. 不一定要返回某个值

**建议**

1. 当目的是进⾏数值计算，且依赖于其他数据，那么推荐使用 `computed`

2. 当需要在某个数据发生变化的, 同时做⼀些稍复杂的逻辑操作（异步操作），那么推荐使⽤ `watch`



## 7. Vue双向绑定原理？

### 7.1 基本认知

在 Vue 2.x 中，利⽤的是 `Object.defineProperty` 去劫持对象的访问器（Getter、Setter），

当对象`属性值`发⽣变化时可获取变化，然后根据变化来作后续响应；(一个一个的劫持)

在 Vue 3.0 中，则是通过 `Proxy` 代理对象进⾏类似的操作。劫持的是整个对象, 只要对象中的属性变化了, 都能劫持到

### 7.2 Object.defineProperty和Proxy的优缺点？

**Proxy** 

- 可以直接监听整个对象，⽽⾮是对象的某个属性 

- 可以直接监听数组的变化

- 拦截⽅法丰富：多达13种，不限于`get` `set` `deleteProperty`、`has` 等。

  比 `Object.defineProperty` 强大很多 

**Object.defineProperty**

- 兼容性较好（可⽀持到 IE9）
- 如果是多层次就要递归



## 8. 如何理解Vue的响应式系统？

(考察MVVM)   M: model数据模型,    V:view视图模型,  VM: viewModel视图数据模型

双向:

1. 视图变化了, 数据自动更新   =>  监听原生的事件即可,  输入框变了,  监听输入框input事件
2. 数据变化了, 视图要自动更新  =>  vue2 和 vue3

### 8.1 基本原理

vue2.0 数据劫持:  Object.defineProperty  (es5)

vue3.0 数据劫持:  Proxy   (es6)

分析 :此题考查 Vue的 MVVM 原理

解答:  Vue的双向绑定原理其实就是 MVVM 的基本原理, Vuejs官网已经说明, 实际就是通过 Object.defineProperty方法 完成了对于Vue实例中数据的 **`劫持`**, 通过对于 data中数据 进行set的劫持监听, 然后通过**`观察者模式`**, 通知 对应的绑定节点 进行节点数据更新, 完成数据驱动视图的更新

简单概述 : 通过Object.defineProperty 完成对于数据的劫持, **通过观察者模式**, 完成对于节点的数据更新



### 8.2 观察者模式

观察者模式:  当对象间存在  **一对多**  关系时，则使用观察者模式（Observer Pattern）。

比如，当一个对象或者数据被修改时，则会自动通知依赖它的对象。

**意图：**定义对象间的一种 `一对多的依赖关系`，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。



拍卖会的时候，大家相互叫价，拍卖师(Dep) 会观察 最高标价(利用Object.defineProperty监听)，

一旦最高价变化了, 然后通知给其它竞价者(watcher观察者 - 订阅者, 订阅了价格的变化)，这就是一个观察者模式 



下图为Vue框架在数据初始化中使用观察者模式的示意图： 

![image-20221015170723425](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015170723.png)



![image-20221015170740502](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015170740.png)

Dep要进行 **依赖收集**，并通过一个subs数组, 记录观察者Watcher,  

Watcher 分为  **渲染 watcher、计算属性 watcher、侦听器 watcher**  三种 

收集依赖: 简单点说就是谁借了我的钱，我就把那个人  **记下来**  ，以后我的钱少了 我就通知他们说我没钱了 

```jsx
<div>
  <p>{{ msg }}</p>   // Watcher1(渲染), 依赖于msg
</div>

<div>
  <h1>{{ car }}</h1>   // Watcher2(渲染),  依赖于car
</div>

<div>
  <h1>{{ myMsg }}</h1>   // Watcher3(渲染), 依赖于myMsg
</div>

computed: {
  myMsg () {
    console.log('计算属性重新计算了')
    return this.msg + '20'  // Watcher4(计算属性中), 依赖于msg, msg变了重新计算
  }
}

watch: {
  msg (newValue) {
    console.log('新的msg', newValue) // Watcher5(侦听器), 将来msg变化, 这边要执行这个函数
  }
}

------------------------------------------------------------------

// 收集依赖 (dep结构有点类似于二维数组, (Map结构))   arr.type="msgDep"
dep: [
  msgDep: [Watcher5(侦听器), Watcher4(计算属性中), Watcher1(渲染)],
  carDep: [Watcher2(渲染)],
  myMsgDep: [Watcher3(渲染)]
]


// Watcher
{
  callback: Function, (数据变化后, 需要执行的回调)
  isRenderWatcher: Boolean, (是否是render的watcher, 是否要触发视图的更新, 往后放, 最后统一虚拟dom对比, 统一更新)
  ...
}
```

比如: 假定数据 money 变了, 那么没有任何与money相关的观察者, 就不需要进行任何更新操作, 也不需要执行任何的监视函数

然而: 假定数据 msg 变了, 就会通知到相关的Watcher, 且优先通知侦听器Watcher和计算属性Watcher, 后进行统一的渲染更新

1. 通知侦听器Watcher,  立刻执行配置的函数,  console.log('新的msg', newValue) 
2. 通知计算属性Watcher, 计算属性依赖的值变了, 需要重新计算
   且更新后, myMsg 变化了,  需要进行进行视图的渲染  (render)     (--- 要更新, 等着---)
3. 通过到watcher1, 渲染Watcher  (---要更新---)
4. 最后统一进行, 新旧虚拟dom的对比, 完成视图的更新



**当数据状态发生改变时，会被 Object.defineProperty 监听劫持到, 会通知到 Dep,  并根据收集的依赖关系,**  

**让订阅者Watcher进行数据更新（update）操作 ,  派发更新** 



总结概述: vue采用的是观察者模式, 是一种`一对多`的关系,  一上来vue在解析渲染时, 会进行依赖收集, 会将渲染 watcher、计算属性 watcher、侦听器 watcher,  都收集到对应的dep中, 将来Object.defineProperty 监听到数据变化, 就根据依赖关系, 派发更新



## 9. Vue中的key到底有什么用？

`key` 是为 Vue 中的虚拟 DOM 节点（vNode）标记唯⼀性的 id。

### 9.1 key的作用

作用:  给虚拟dom添加标识,  **(优化复用对比策略, 优化渲染性能)**

主要考察: 

1. vue 的更新机制 (差异化更新) 对比新旧虚拟dom, 找出不同的部分,  进行更新视图

   为什么对比虚拟dom, 而不对比真实的dom ? 真实的dom太复杂, 对比起来性能太差

2. 虚拟dom: 使用 js 对象的方式, 模拟真实的 dom 结构    {  type: 'div', className: 'box' , children: [] }

   属性的量大大的减少了, 没有真实dom的那么多无效的属性, 对比起来性能高很多

3. diff 算法: 默认的对比(diff) 机制,  同层兄弟元素, 是按照下标进行对比的, 但是加了 key,  **就相当于给虚拟dom加了个标识**

   对比策略, 就是对相同key的元素进行对比了, 在列表v-for中, key的使用尤为常见, 可以用于优化渲染性能

![image-20221015170803219](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015170803.png)

### 9.2 key的常见应用场景

key 的常见应用场景 => v-for,  v-for 遍历的列表中的项的顺序, 非常的容易改变

1 往后面加, 默认的对比策略, 按照下标,  没有任何问题

```jsx
// 旧
<ul>
  <li>张三</li>
  <li>李四</li>
</ul>

// 新
<ul>
  <li>张三</li>
  <li>李四</li>
  <li>王五</li>
</ul>
```

2 往前面加, 由于下标变了, 如果按照之前的下标对比, 元素是混乱的, 策略: 加上key

​    一旦加上了key, 就是按照 key 进行新旧dom的对比了

```jsx
// 旧 
<ul>
  <li key="17">张三</li>
  <li key="31">李四</li>
</ul>

// 新  [ { id: 17, name: '张三' }, ... ]
<ul>
  <li key="52">王五</li>
  <li key="17">张三</li>
  <li key="31">李四</li>
</ul>
```

**总结: key 就是给 虚拟dom 添加了一个 标识, 优化了对比策略!!!**





## 10. Vue 跳转路由时的传参方式 (query和params的区别)

1. 通过 query 传参

```jsx
this.$router.push('/login?username=pp&age=18&desc=xx')

this.$router.push({
    path: '/login',
    query: {
        username: 'pp',
        age: 18,
        desc: 'xxx'
    }
})

this.$router.push({
    name: 'login',
    query: {
        username: 'pp',
        age: 18,
        desc: 'xxx'
    }
})
```

**获取: this.$route.query.username**



2. 通过 params 传参, 必须通过命名路由的方式传递!

```jsx
this.$router.push({
	name: 'login',
	params: {
	    username: 'pp',
        age: 18
	}
})
```

**获取: this.$route.params.username**



**区别:**

1. params传参, 必须要用命名路由的方式传值

2. params传参, 不会显示在地址栏中, 刷新会丢失

   可以配合 localStorage 使用

   (1) A 跳转路由到 B, 通过 params 传值

   (2) B 页面中, 立刻通过  this.$route.params 获取参数  

   ​      (获取参数的逻辑, 优先从$route中拿, 如果拿不到(说明刷新了), 从本地取即可)

   (3) 拿到参数后, 立刻存到本地 (保证刷新丢失后, 还能从本地拿)

   (4) 实现功能...

B页面的逻辑

```jsx
created () {
    let username = this.$route.params.username
    if (username) {
        // 刚跳过来, 有参数, 立刻存起来
        localStorage.setItem('myParams', JSON.stringify(this.$route.params))
    } else {
        // 没有, 说明用户刷新了, 丢失了params, username参数, 本地拿
        username = JSON.parse(localStorage.getItem('myParams')).username
    }
}
```



## 11. Vue 项目进行 SEO 优化

Vue SPA单页面应用对SEO不太友好，当然也有相应的解决方案，下面列出几种SEO方案

1. SSR服务器渲染

   服务端渲染, 在服务端html页面节点, 已经解析创建完了, 浏览器直接拿到的是解析完成的页面解构

   关于服务器渲染：[Vue官网介绍](https://ssr.vuejs.org/zh/#什么是服务器端渲染-ssr-？) ，对Vue版本有要求，对服务器也有一定要求，需要支持nodejs环境。

   优势:  更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面

   缺点:  服务器nodejs环境的要求, 且对原代码的改造成本高!  `nuxt.js` (坑比较多, 做好踩坑的准备)

   

2. 静态化 (博客, 介绍性官网) 

   Nuxt.js 可以进行 generate 静态化打包, 缺点: 动态路由会被忽略。 `/users/:id`

   优势：

   - 编译打包时, 就会帮你处理,  纯静态文件，访问速度超快；
   - 对比SSR，不涉及到服务器负载方面问题；
   - 静态网页不宜遭到黑客攻击，安全性更高。

   不足：

   - 如果动态路由参数多的话不适用。



3. 预渲染 prerender-spa-plugin (插件)

   如果你只是对少数页面需要做SEO处理（例如  / 首页,  /about 关于等页面）

   预渲染是一个非常好的方式, 预渲染会在构建时, 简单的针对特定路由, 生成静态 HTML 文件 (打包时可以帮你解析静态化)

   优势: 设置预渲染简单, 对代码的改动小

   缺点: 只适合于做少数页面进行SEO的情况, 如果页面几百上千, 就不推荐了 (会打包很慢)



4. 使用Phantomjs `针对爬虫` 做处理

   Phantomjs是一个基于webkit内核的无头浏览器，没有UI界面，就是一个浏览器，

   其内的点击、翻页等人为相关操作需要程序设计实现。

   这种解决方案其实是一种旁路机制，原理就是通过Nginx配置， 判断访问的来源UA是否是爬虫访问，

   如果是则将搜索引擎的爬虫请求转发到一个node server，再通过PhantomJS来解析完整的HTML，返回给爬虫

![image-20221015170834891](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015170835.png)

优势：

- 完全不用改动项目代码，按原本的SPA开发即可，对比开发SSR成本小太多了；
- 对已用SPA开发完成的项目，这是不二之选。

不足：

- 部署需要node服务器支持；

- 爬虫访问比网页访问要慢一些，因为定时要定时资源加载完成才返回给爬虫；(不影响用户的访问)

- 如果被恶意模拟百度爬虫大量循环爬取，会造成服务器负载方面问题，

  解决方法是判断访问的IP，是否是百度官方爬虫的IP。



小结:

- 如果构建大型网站，如商城类 => SSR服务器渲染

- 如果只是正常公司官网, 博客网站等 => 预渲染/静态化/Phantomjs 都比较方便
- 如果是已用SPA开发完成的项目进行SEO优化，而且部署环境支持node服务器，使用 Phantomjs 

博客参考: [SEO优化方案](https://www.jb51.net/article/164285.htm)



## 12. Vue 项目权限处理

现在权限相关管理系统用的框架都是element提供的[vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/)模板框架比较常见。

权限控制常见分为三大块

- **菜单权限控制**
- **按钮权限控制**
- 请求url权限控制。

**权限管理在后端中主要体现在对接口访问权限的控制，在前端中主要体现在对菜单访问权限的控制。**

1. 按钮权限控制比较容易，主要采取的方式是从后端返回按钮的权限标识，然后在前端进行显隐操作 v-if / disabled。

2. url权限控制，主要是后端代码来控制，前端只需要规范好格式即可。

3. 剩下的菜单权限控制，是相对复杂一些的

   (1) **需要在路由设计时, 就拆分成静态路由和动态路由**

   ​       静态路由: 所有用户都能访问到的路由, 不会动态变化的 (登录页, 首页, 404, ...)

   ​	   动态路由: 动态控制的路由, 只有用户有这个权限, 才将这个路由添加给你 (审批页, 社保页, 权限管理页...)

   (2) 用户登录进入首页时, 需要立刻发送请求, 获取个人信息 (包含权限的标识)

   ![image-20221015171002769](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015171002.png)

   (3) **利用权限信息的标识, 筛选出合适的动态路由**, 通过路由的 **addRoutes 方法**, 动态添加路由即可!

   (4) router.options.routes (拿的是默认配置的项, 拿不到动态新增的) 不是响应式的! 

   ​	  为了能正确的显示菜单, 为了能够将来正确的获取到用户路由, 我们需要用**vuex管理routes路由数组**

   (5) 利用vuex中的 routes, 动态渲染菜单

   

   ## 13. Vue 项目支付功能

   支付宝方式：点击支付宝支付,  调用后台接口(携带订单号)，后台返回一个form表单(HTML字符串结构)，

    提交form就可以调用支付宝支付

   代码:

   ```jsx
   //  alipayWap: 后台接口返回的form 片段
   <div v-html="alipayWap" ref="alipayWap"></div>
   
   methods: {
   	toAlipay () {
   		this.$axios.get('xxx').then (res = > {
   			this.alipayWap = res;
                // 等待dom更新, 等页面中有这个form表单了
   			this.$nextTick(() => {
               	this.$refs.alipayWap.children[0].submit()
             	})
   		})
   	}
   }
   ```

   

![image-20221015171220444](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015171220.png)

微信支付：需要自己根据后台返回的url生成二维码页面，如图所示

![image-20221015171238125](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015171238.png)

博客参考1: https://blog.csdn.net/qq_36710522/article/details/90480914

博客参考2: https://blog.csdn.net/zyg1515330502/article/details/94737044

## 14. 如何处理打包出来的项目(首屏)加载过慢的问题

SPA应用: 单页应用程序, 所有的功能, 都在一个页面中, 如果第一次将所有的路由资源, 组件都加载了, 就会很慢!

加载过慢 => 一次性加载了过多的资源,  一次性加载了过大的资源

- 加载过多 => 路由懒加载, 访问到路由, 再加载该路由相关的组件内容
- 加载过大 => 图片压缩, 文件压缩合并处理, 开启gzip压缩等

比如:

1. 配置异步组件, 路由懒加载

   ```js
   const login = () => import('../pages/login.vue')
   ```

2. 图片压缩: 使用 webp 格式的图片, 提升首页加载的速度

3. CDN加速: 配置CDN加速, 加快资源的加载效率 (花钱)

4. 开启 gzip 压缩 (一般默认服务器开启的, 如果没开, 确实可能会很慢, 可以让后台开一下)

   ...	

![image-20221015171314423](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015171314.png)

博客: https://www.cnblogs.com/xidian-Jingbin/p/10643391.html





## 15. 你在项目中遇到过什么技术难题

**问题: 考察解决问题的能力!**

话术: 前端要学的东西确实很多，但是并不夸张, 肯多花点时间沉淀一般都会有解决方案

一般遇到难题 (这些前端所谓的难题, 一般都是一些没有做过, 没有尝试过得一些业务),  我们要时刻保持独立思考，

**知道自己要做什么业务**，**由此决定要学什么知识**, 然后**实现业务**, 举一反三，总结归纳!



比如1: 如果之前没有做过国际化, 换肤, 没有做过支付, 权限控制,  没有做过即时通信websocket,  excel导入导出, 就会觉得很难, 

但其实真正上手花时间去学着做了, 也都能逐步思考解决相关页面, 这些其实也都还 ok



比如2: 有时候, `复杂的或者困难的`, 并不是技术层面的, 而是`业务需求方面`的, 需要进行大量树形结构的处理

展示列表式数据时,  展示图表数据时,  筛选条件关联条件多了,  组件与组件的联动关系的控制也比较麻烦, 

将联动的条件, 存vuex,  然后 => 进行分模块管理也是比较合适的选择 

![image-20221015171338766](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221015171338.png)

## 16. 请简单介绍一下你的项目

**一定要做准备工作:** 

项目的介绍,  因人而异,  可以找不同的网站,  先从网站的功能业务角度出发,  去介绍

然后思考: 如果是现在让你写这样的功能页面, 你会如何实现!  然后手写记录下来, 推算合理性 (遇到什么问题, 怎么解决的!),

 逐步完善对于项目的介绍



以饿了么为例: https://github.com/bailicangdu/vue2-elm

1 基本业务介绍:  给用户提供外卖服务的

2 技术栈: vue2 + vuex + vue-router + webpack + ES6/7 + axios+ sass + flex + svg

3 功能需求介绍:

-  定位功能 
-  选择城市
-  搜索地址
-  展示所选地址附近商家列表
-  搜索美食，餐馆
-  根据距离、销量、评分、特色菜、配送方式等进行排序和筛选
-  餐馆食品列表页
-  购物车功能
-  店铺评价页面
-  单个食品详情页面 
-  商家详情页
-  登录、注册 
-  修改密码
-  个人中心
-  发送短信、语音验证
-  下单功能
-  订单列表
-  订单详情 
-  下载App
-  添加、删除、修改收货地址
-  帐户信息
-  服务中心 
-  红包
-  上传头像
-  付款

4 哪些模块你是会的, 就可以着重介绍, 哪些模块不太会做, 就查资料, 对比方案, 构思思路

## 17. 虚拟 DOM 实现原理 

如果直接操作真实的dom 性能低

- 虚拟DOM本质上是JavaScript对象,是对真实DOM的抽象 

- 状态变更时，记录新树和旧树的差异 

- 最后把差异更新到真正的dom

  ![image-20221018214809447](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221018214809.png)

![image-20221018214653014](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221018214700.png)

## 18. route 和 router 的区别是什么？ 

route 是“路由信息对象”，包括 path , params , hash , query , fullPath , matched , name 等路由信息参数。

router 是“路由实例对象”，包括了路由的跳转方法( push 、 replace )，钩子函数等。

$router: 全局路由对象，包含很多的属性和对象，包含所有的路由，任何页面都可以调用push（跳转页面）、replace（替换页面），go（页面的前进或者后退）

$route: 局部路由对象（当前激活的路由信息对象），可以获取当前路由的信息（path，name，params，query）

## 19. Vue 的 nextTick 的原理是什么？ 

**1）为什么需要 nextTick** 

Vue 是异步修改 DOM 的并且不鼓励开发者直接接触 DOM，但有时候业务需要必须对数据更改--刷新后 的 DOM 做相应的处理，这时候就可以使用 Vue.nextTick(callback)这个 api 了。 （vue是异步渲染的框架，数据更新之后，dom是不会立刻渲染，$nextTick会在dom渲染之后被触发，用来获取最新的dom节点）

**2）理解原理前的准备** 

首先需要知道事件循环中宏任务和微任务这两个概念(这其实也是面试常考点)。 

常见的宏任务有 script, setTimeout, setInterval, setImmediate, I/O, UI rendering 

常见的微任务有 process.nextTick(Nodejs),Promise.then(), MutationObserver; 

**3）理解 nextTick** 

而 nextTick 的原理正是 vue 通过异步队列控制 DOM 更新和 nextTick 回调函数先后执行的方式。如果 大家看过这部分的源码，会发现其中做了很多 isNative()的判断，因为这里还存在兼容性优雅降级的问 题。可见 Vue 开发团队的深思熟虑，对性能的良苦用心。

是将回调函数延迟在下一次dom更新数据之后调用，用于获取更新后的dom

**4）使用场景** 

1. 在生命周期函数created中进行dom操作，一定要放到nextTick函数中执行
2. 在数据变化后要执行某个操作，而这个操作需要使用随数据变化而变化的dom结构时，这个操作需要放到nextTick中。

## 20. vuex

**（1）vuex是什么？怎么使用？哪种功能场景使用它？** 

vue框架中状态管理。在main.js引入store，注入。新建一个目录store，….. export 。 

场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车 

**（2）vuex有哪几种属性？** 

有五种，分别是 State、 Getter、Mutation 、Action、 Module 

- vuex的State特性 

A、Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于一般Vue对象里面的data

B、state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新 

C、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中 

- vuex的Getter特性 

A、getters 可以对State进行计算操作，它就是Store的计算属性 

B、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用 

C、 如果一个状态只在一个组件内使用，是可以不用getters 

- vuex的Mutation特性 

Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态；Action可以包含任意异步操作。 

**（3）不用Vuex会带来什么问题？** 

可维护性会下降，想修改数据要维护三个地方； 

可读性会下降，因为一个组件里的数据，根本就看不出来是从哪来的； 

增加耦合，大量的上传派发，会让耦合性大大增加，本来Vue用Component就是为了减少耦合，现 在这么用，和组件化的初衷相背

## 21. v-for 和v-if 为什么不建议一起用

v-for 优先级高于 v-if，如果将两者放在一起，会执行 v-for，先循环列表，v-if 去判断，造成性能浪费。

## 22. v-if 和v-show 的区别

都是控制元素在页面上是否显示

- v-show指令是通过修改元素的display的CSS属性让其显示或者隐藏 
- v-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果

## 23. vue 中 ref 的作用

1. 获取页面中的DOM元素
2. 获取子组件对象

定义ref属性，用来给元素或者子组件注册引用信息，父组件通过$refs获取到对应的dom对象，和子组件的信息。

```vue
<template>
	<div class="home">
        <p ref="p" id="pid">
            我是p标签
        </p>
    	<HelloWorld ref="helloWorld"></HelloWorld>
    </div>
</template>
<script>
 import HelloWorld from "@/components/HelloWorld.vue";
 export default {
     name:"HomeVies",
     mounted(){
         console.log(this.$refs);
         console.log(this.$refs.helloWorld.message);
         console.log(this.$refs.helloWorld.add(1,2));
     },
     components:{
         HelloWorld,
     },
 };
</script>
```

## 24. vue 中常用的修饰符

**v-on的常用的修饰符**

- .stop:取消事件冒泡
- .prevent：取消默认事件

- .{keyCode|keyAlias}:@keyup.enter="keyup"

- .native：监听自定义组件根元素的原生事件

- .once：只触发一次回调

**v-model的常用的修饰符**

- .lazy：可以让数据在失去焦点或者回车的时候才会更新
- .number：将输入框中的内容转为数字类型
- .trim：去除收尾空格

## 25. vue 中哪些数组方法可以直接对数组修改实现视图更新

利用索引值设置数组的元素，直接修改数组的长度，都不可以触发视图更新

利用for循环反转数组也不可以触发视图更新

触发视图更新：

- push()
- pop()
- splice(0,this.arr.length)
- reverse()
- shift()/unshift()
- sort()
- concat()

## 26. vue 中如何使用自定义指令

局部注册

```vue
directives：{//自定义指令，不需要写v-，使用的时候需要添加v-
    focus：{
		inserted:function(){//表示被绑定的元素插入父节点的时候调用，bind/update
			//el:表示指令所绑定的元素
			//binding:对象，属性name：指令名，value：指令绑定值
			el.focus()//获取焦点
		}
    }
}
```

全局注册（main.js)

```vue
//Vue.directive("指令的名字"，"对象数据也可以是一个指令函数")
Vue.derective('focus',{
	inserted:function(el){
		el.focus()
	}
})
```

## 27. 组件中的data为什么必须是一个函数

组件是可复用的实例

局部作用域，每一次服用这个组件，返回的都是一个data，如果单纯的写成对象的形式，所有的组件实例公用一个data，造成数据污染。

## 28. vue2中是如何检测数组变化的

vue2中没有使用 defineProperty 对这个数组的每一项进行拦截（提供性能），而是选择重写数组{push}方法

数组中如果是对象的数据类型，也继续递归处理

## 29. vue 中如何进行依赖收集

每一个属性都有一个dep，存放我们所依赖的watcher，当属性变化后通知自己对应的watcher去更新

默认在渲染的时候（获取这个响应式数据），此时就会触发属性收集依赖dep.depend()

当属性发生改变时触发watcher 通过dep.notify()

## 30. vue 中diff算法

**vue2：深度递归+双指针**

1. 判断是不是同一个元素，不是同一个元素，直接替换
2. 是同一个元素=》比对属性=》比对儿子（1老的有儿子，新的没有儿子 2新的有儿子，老的没有儿子  3都是文本情况  4都有儿子）=》双指针：头头，尾尾，头尾，尾头=》对比查找继续复用

**vue3：采用最长递增子序列**

## 31. Vue-Router 导航守卫（路由守卫）作用

对路由进行权限控制，有的时候，需要通过路由来进行一些操作，比如常见的登录权限验证，当用户满足条件时，才进行跳转，导航守卫分为：全局守卫，独享守卫，组件内守卫，内置有三个参数：to、from、next；

全局守卫：全局前置守卫beforeEach（判断是否登录了，没有登录就跳转到登录页），全局后置守卫afterEach（跳转之后限制滚动行为回到页面顶部），独享守卫beforeEnter：如果不想配置守卫的话，可以为某些路由单独配置守卫。

## 32. 组件实例中的data为什么是一个函数，vue根实例中的data为什么可以是对象？

- 组件中的data必须是个函数，在创建多个组件实例的情况下，是为了确保多个组件实例data之间的数据不可相互干扰和污染。
- 每次在创建根实例的时候，使用new的方式，全局的范围内只创建一个，不会创建多个，不会存在污染的问题，因此可以不适用函数。

## 33. 在哪个生命周期中发起数据请求

可以在钩子created（创建后），beforeMount（挂在前），mounted（挂载后）中进行请求，因为在这三个钩子函数，data已经创建，可以将服务端返回的数据进行赋值操作。

## 34. 对模块化的理解

就是对代码和资源进行拆分，将一个大文件拆分成相互依赖的小文件，再进行同一的拼装和加载。

## 35. vue2和vue3的区别有哪些

1. 放弃es5的Object.defineProperty，使用ES6原生更快的proxy

2. 优化diff算法

   vue2：虚拟的dom是进行全量的对比

   vue3：新增了patchFlag（静态标记），只对比带有PF的节点

3. 静态的提升

   vue2：无论元素是否参与更新，每次都会被重新创建再进行渲染

   vue3：对于不参与更新的元素只做静态的提升，只会被创建一次，在渲染的时候直接复用即可

4. Api

   vue2的组件内容都是options api风格，也就是在data，methods，mounted等来组织代码，这样会让逻辑很分散，每次变动需要查找位置。

   vue3中使用setup：逻辑都放在里边，composition Api

5. 碎片化节点的优化

   vue2中，template下只允许存在一个根节点

   vue3中可以有多个根节点，为我们创建一个虚拟的fragment节点

6. 更好的ts支持

