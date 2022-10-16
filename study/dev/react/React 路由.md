---
sidebar_position: 4
---

# React 路由

![组件路由](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016210227.png)

## 1. 相关理解

### 1.1 SPA的理解

1. 单页Web应用（single page web application，SPA）。

2. 整个应用只有**一个完整的页面**。

3. 点击页面中的链接**不会刷新**页面，只会做页面的**局部更新。**

4. 数据都需要通过ajax请求获取, 并在前端异步展现。

### 1.2 路由的理解

**1.**   **什么是路由?**

1. 一个路由就是一个映射关系(key:value)

2. key为路径, value可能是function或component

**2.**   **路由分类**

1. 后端路由：

-   理解： value是function, 用来处理客户端提交的请求。
-   注册路由： router.get(path, function(req, res))
-   工作过程：当node接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据

2. 前端路由：

-    浏览器端路由，value是component，用于展示页面内容。

-    注册路由:

  ```
  <Route path="/test" component={Test}>
  ```

-    工作过程：当浏览器的path变为/test时, 当前路由组件就会变为Test组件

### 1.3 react-router-dom的理解

1. react的一个插件库。

2. 专门用来实现一个SPA应用。

3. 基于react的项目基本都会用到此库。

## 2. react-router-dom相关API

### 2.1 内置组件

1. `<BrowserRouter>`

2. `<HashRouter>`

3. `<Route>`

4. `<Redirect>`

5. `<Link>`

6. `<NavLink>`

7. `<Switch>`

### 2.2 其它

1. history对象

2. match对象

3. withRouter函数

## 3. 基本路由使用

![image-20221016211842283](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016211842.png)
