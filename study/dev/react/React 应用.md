---
sidebar_position: 3
---

# React 应用(基于React脚手架)

![react4](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016200333.png)

![组件通信](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016202747.png)

![hook](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016202857.png)

## 1. 使用create-react-app创建react应用

### 1.1 react脚手架

1. xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目

- 包含了所有需要的配置（语法检查、jsx编译、devServer…）
- 下载好了所有相关的依赖
- 可以直接运行一个简单效果

2. react提供了一个用于创建react项目的脚手架库: create-react-app

3. 项目的整体技术架构为: react + webpack + es6 + eslint

4. 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化

### 1.2. 创建项目并启动

**第一步**，全局安装：npm i -g create-react-app

**第二步**，切换到想创项目的目录，使用命令：create-react-app hello-react

**第三步**，进入项目文件夹：cd hello-react

**第四步**，启动项目：npm start

### 1.3. react脚手架项目结构

 public ---- 静态资源文件夹

- ​          favicon.icon ------ 网站页签图标

- ​          **index.html --------** **主页面**

- ​          logo192.png ------- logo图

- ​          logo512.png ------- logo图

- ​          manifest.json ----- 应用加壳的配置文件

- ​          robots.txt -------- 爬虫协议文件


src ---- 源码文件夹

- ​          App.css -------- App组件的样式

- ​          **App.js --------- App****组件**

- ​          App.test.js ---- 用于给App做测试

- ​          index.css ------ 样式

- ​          **index.js -------** **入口文件**

- ​          logo.svg ------- logo图

- ​          reportWebVitals.js

  ​                 --- 页面性能分析文件(需要web-vitals库的支持)

- ​          setupTests.js

  ​                 ---- 组件单元测试的文件(需要jest-dom库的支持)

## 2. 组件通信

### 2.1 父传子

![image-20221016200854760](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016200854.png)

![image-20221016200915389](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016200915.png)

### 2.2 子传父

![image-20221016201116115](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016201116.png)

![image-20221016201159075](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016201159.png)

### 2.3 兄弟通信

![image-20221016201449254](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016201449.png)

![image-20221016201509524](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016201509.png)

### 2.4 跨级通信

Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。

**API**

- `React.createContext`

```
const MyContext = React.createContext(defaultValue);
```

创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 `Provider` 中读取到当前的 context 值。

**只有**当组件所处的树中没有匹配到 Provider 时，其 `defaultValue` 参数才会生效。此默认值有助于在不使用 Provider 包装组件的情况下对组件进行测试。注意：将 `undefined` 传递给 Provider 的 value 时，消费组件的 `defaultValue` 不会生效。

- `Context.Provider`

```
<MyContext.Provider value={/* 某个值 */}>
```

每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。

Provider 接收一个 `value` 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。

当 Provider 的 `value` 值发生变化时，它内部的所有消费组件都会重新渲染。从 Provider 到其内部 consumer 组件（包括 [.contextType](https://zh-hans.reactjs.org/docs/context.html#classcontexttype) 和 [useContext](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext)）的传播不受制于 `shouldComponentUpdate` 函数，因此当 consumer 组件在其祖先组件跳过更新的情况下也能更新。



- `Context.Consumer`

```
<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>
```

一个 React 组件可以订阅 context 的变更，此组件可以让你在[函数式组件](https://zh-hans.reactjs.org/docs/components-and-props.html#function-and-class-components)中可以订阅 context。

这种方法需要一个[函数作为子元素（function as a child）](https://zh-hans.reactjs.org/docs/render-props.html#using-props-other-than-render)。这个函数接收当前的 context 值，并返回一个 React 节点。传递给函数的 `value` 值等价于组件树上方离这个 context 最近的 Provider 提供的 `value` 值。如果没有对应的 Provider，`value` 参数等同于传递给 `createContext()` 的 `defaultValue`。



![image-20221016202150897](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016202150.png)

![image-20221016202217703](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016202217.png)

## 3. Hook

*Hook* 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

### 3.1 useState()

**useState** 是允许你在 React 函数组件中添加 state 的 Hook

在 class 中，我们通过在构造函数中设置 **this.state** 为 **{ count: 0 }**来初始化 count state 为 0：

```
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      count: 0    };  }
```

在函数组件中，我们没有 **this**，所以我们不能分配或读取 **this.state**。我们直接在组件中调用 **useState** Hook：

```
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量  const [count, setCount] = useState(0);
```



[^]: **useState方法的返回值是什么？**

返回值为：当前 state 以及更新 state 的函数。这就是我们写 `const [count, setCount] = useState()` 的原因。这与 class 里面 `this.state.count` 和 `this.setState` 类似

![image-20221016203825941](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016203825.png)

**读取 State**

当我们想在 class 中显示当前的 count，我们读取 **this.state.count**：

```
  <p>You clicked {this.state.count} times</p>
```

在函数中，我们可以直接用 **count**:

```
  <p>You clicked {count} times</p>
```

**更新 State**

在 class 中，我们需要调用 **this.setState()** 来更新 **count** 值：

```
  <button onClick={() => this.setState({ count: this.state.count + 1 })}>    Click me
  </button>
```

在函数中，我们已经有了 **setCount** 和 **count** 变量，所以我们不需要 **this**:

```
  <button onClick={() => setCount(count + 1)}>    Click me
  </button>
```

### 3.2 useEffect()

*Effect Hook* 可以让你在函数组件中执行副作用操作

[^]: **useEffect 做了什么？**

通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它。在这个 effect 中，我们设置了 document 的 title 属性，不过我们也可以执行数据获取或调用其他命令式的 API。



[^]: **为什么在组件内部调用 useEffect？**

将 **useEffect** 放在组件内部让我们可以在 effect 中直接访问 **count** state 变量（或其他 props）。我们不需要特殊的 API 来读取它 —— 它已经保存在函数作用域中。Hook 使用了 JavaScript 的闭包机制，而不用在 JavaScript 已经提供了解决方案的情况下，还引入特定的 React API。



[^]: **useEffect 会在每次渲染后都执行吗？**

是的，默认情况下，它在第一次渲染之后*和*每次更新之后都会执行。（我们稍后会谈到[如何控制它](https://zh-hans.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)。）你可能会更容易接受 effect 发生在“渲染之后”这种概念，不用再去考虑“挂载”还是“更新”。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。

![image-20221016204857400](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016204857.png)

![image-20221016204829476](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016204956.png)

### 3.3 useRef()

**useRef** 返回一个可变的 ref 对象，其 **.current** 属性被初始化为传入的参数（**initialValue**）。返回的 ref 对象在组件的整个生命周期内持续存在。

![image-20221016205324949](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016205325.png)

### 3.4 useContext()

```
const value = useContext(MyContext);
```

接收一个 context 对象（`React.createContext` 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 `<MyContext.Provider>` 的 `value` prop 决定。

当组件上层最近的 `<MyContext.Provider>` 更新时，该 Hook 会触发重渲染，并使用最新传递给 `MyContext` provider 的 context `value` 值。即使祖先使用 [`React.memo`](https://zh-hans.reactjs.org/docs/react-api.html#reactmemo) 或 [`shouldComponentUpdate`](https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate)，也会在组件本身使用 `useContext` 时重新渲染。

别忘记 `useContext` 的参数必须是 *context 对象本身*：

- **正确：** `useContext(MyContext)`
- **错误：** `useContext(MyContext.Consumer)`
- **错误：** `useContext(MyContext.Provider)`
