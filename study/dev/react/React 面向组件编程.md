---
sidebar_position: 2
---

# React 面向组件编程

![react2](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016191145.png)

![react3](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016195840.png)

## 1. 基本理解和使用

### 1.1 函数组件和类组件

**1. 函数组件**

```
//1、创建函数组件
 //props: JSX 所接收的属性（attributes）以及子组件（children）
        function Welcome(props){
            console.log(props);
            console.log(this);//undefined-->jsx的语法下，babel将模式变为严格模式
            return <h2>Hello,{props.name}</h2>
        }
 // 2、将组件渲染到页面
// 在react中定义的函数名就是组件名，组件名必须要大写
 //reactDOM执行render,解析组件标签，使用函数定义的，调用函数，将返回的虚拟DOM转为真实DOM，渲染到页面
        ReactDOM.render(<Welcome name="React组件"/>,document.getElementById('test'))
```

**2. 类组件**

```
 //1、创建class组件
      class Welcome extends React.Component {
        render() {
          //-->Welcome原型对象上
          console.log(this);
          return <h2>Hello,{this.props.name}</h2>;
        }
      }
      class App extends React.Component {
        render() {
          return (
            <div>
              <Welcome name="React组件"/>
              <Welcome name="React"/>
              <Welcome name="ReactClass组件"/>
              <Welcome name="React函数组件"/>
            </div>
          );
        }
      }
 // 将class组件渲染到页面
 //ReactDOM执行render,解析组件标签，使用类定义的，new Welcome-->实例化对象，通过实例对象去调用到原型上的render方法
//将返回的虚拟DOM转为真实DOM，渲染到页面
//每一次使用组件都会实例化组件
 //   ReactDOM.render(
//     <Welcome name="React组件" />,
 //     document.getElementById("test")
//   );
      ReactDOM.render(<App />,document.getElementById("test"));
```

### 1.2 注意

1. 组件名必须首字母大写

2. 虚拟DOM元素只能有一个根元素

3. 虚拟DOM元素必须有结束标签

### 1.3 渲染类组件标签的基本流程

1. React内部会创建组件实例对象

2. 调用render()得到虚拟DOM, 并解析为真实DOM

3. 插入到指定的页面元素内部

## 2. 组件核心属性: state

### 2.1 使用

```
 // 1、创建组件
    class Hello extends React.Component {
      // 第一种,直接将state对象定义Hello原型对象上，
      // state={Fname:"西瓜"}
      // 第二种，构造器定义state对象
      constructor() {
        super()
        this.state = { Fname: "西瓜", age: 18 }
        // this.changeAge=()=>{
        //     console.log(this);
        // }
      }
      // changeFname(){
      //     console.log(this);-->undefined，严格模式下，因为这个函数作为回调函数而存在，调用是在全局调用
      // }
//通过箭头函数指向实例对象
      changeFname = () => {
        // console.log(this);
        // this.state.Fname='香蕉'-->错误的
        // 改变state的唯一方法
        // this.setState({Fname:"香蕉"})
        this.setState((prevState, props) => {
          console.log(prevState);
          console.log(props);
          return { Fname: "香蕉" }
        })

      }
      changeAge = () => {
        this.setState({ age: this.state.age + 1 })
      }
      render() {
        console.log('render');
        return (
          <div>
            <h2>喜欢吃的水果是:{this.state.Fname}</h2>
            <h2>年龄是:{this.state.age}</h2>
            <button onClick={this.changeFname}>改变水果</button>
            <button onClick={this.changeAge}>改变年龄</button>
          </div>
        );
      }
    }
    //   2、将组件渲染到页面
    ReactDOM.render(<Hello sex="男" />, document.getElementById('test'))
    /*
    注意的点：
      1、render函数执行的次数-->1+n次，this指向组件对象
      2、状态数据，不能直接修改的，通过setState(参数可以是对象，也是可以一个函数,函数需要返回一个对象，函数会有两个参数，第一个是上一次的state,第二个是props)
      3、在组件自定义方法如果是使用普通的函数定义，里面的this是undefined，需要使用到箭头函数，this指向外部实例对象
    */
```

```
 // 1、创建函数组件
    function Welcome(props){
      console.log(props);
      return (
        <div>
        <h2>喜欢的水果是:{props.name}</h2>  
        </div>
      )
```



### 2.2 理解

1. state是组件对象最重要的属性, 值是对象(可以包含多个key-value的组合)

2. 组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件)

### 2.3 作用

1. 通过标签属性从组件外向组件内传递变化的数据

2. 注意: 组件内部不要修改props数据

### 2.4 强烈注意

1. 组件中render方法中的this为组件实例对象

2. 组件自定义的方法中this为undefined，如何解决？

- a)   强制绑定this: 通过函数对象的bind()
- b)   箭头函数

3. 状态数据，不能直接修改或更新

## 3. 组件核心属性: props

### 3.1使用

```
// 1、创建组件
      class Hello extends React.Component {
        // 第一种,直接将state对象定义Hello原型对象上，
        // state={Fname:"西瓜"}
        // 第二种，构造器定义state对象
        constructor(props){
            super()
            // console.log(props);
            this.state={Fname:props.name,age:props.age}//通过this去访问props,需要在constructor进行接受,super(props)
      }
      
        render() {
          console.log(this);
          const {name,age,data}=this.props
          return (
            <div>
              <h2>喜欢吃的水果是:{this.state.Fname}</h2>
              <h2>年龄是:{this.state.age}</h2>
              <h2>喜欢吃的水果是:{name}</h2>
              <h2>年龄是:{age+1}</h2>
              <h2>年龄是:{data.age}</h2>
            </div>
          );
        }
      }
//   2、将组件渲染到页面
    //批量操作
    const data={name:"西瓜",age:18, sex:"男",height:190}
    ReactDOM.render(<Hello {...data} data={data} age={18}/>,document.getElementById('test'))
    /*
    注意的点：
      1、render函数执行的次数-->1+n次，this指向组件对象
      2、状态数据，不能直接修改的，通过setState(参数可以是对象，也是可以一个函数,函数需要返回一个对象，函数会有两个参数，第一个是上一次的state,第二个是props)
      3、在组件自定义方法如果是使用普通的函数定义，里面的this是undefined，需要使用到箭头函数，this指向外部实例对象
    */
```



### 3.2 理解

1. 每个组件对象都会有props(properties的简写)属性

2. 组件标签的所有属性都保存在props中

### 3.3 作用

1. 通过标签属性从组件外向组件内传递变化的数据

2. 注意: 组件内部不要修改props数据

### 3.4 类型限制

```
//对props的属性进行类型限制
      Hello.propTypes={
        name:PropTypes.string.isRequired,//限制name是字符串，并且必传
        age:PropTypes.number,//限制age是数值
        sayHi:PropTypes.func//限制sayHi为函数
      }
// 设置默认标签属性值
      Hello.defaultProps={
        name:"香蕉",
        age:18
      }
```

## 4. 组件核心属性: refs与事件处理

### 4.1 使用

Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。

```
 // 1、创建组件
      class Hello extends React.Component {
        // React.createRef()返回一个容器，这个容器就可以用来存储被ref标识的节点,一个容器对应一个dom元素
        myRef=React.createRef()
        myRef1=React.createRef()
        getValue = () => {
          // console.log(this.refs.input1.value)
          // console.log(this.input1.value)
          console.log(this.myRef.current.value);
        };
//官网已经不建议再去使用字符串形式的ref
// 建议使用回调函数的形式,在回调函数中会有接收一个参数，这个参数就是当前dom标签
// 使用React.createRef()-->react最推荐的一种形式
        render() {
          return (
            <div>
              {/*字符串形式*/}
              {/*<input ref="input1" type="text" />*/}
              {/*回调形式*/}
              {/*<input ref={(input)=>{this.input1=input}} type="text" />*/}
              {/*React.createRef()*/}
              <input type="text" ref={this.myRef}/>
              <input type="text" ref={this.myRef1}/>
              <button onClick={this.getValue}>打印输入框的内容</button>
            </div>
          );
        }
      }
      //   2、将组件渲染到页面
      ReactDOM.render(<Hello />, document.getElementById("test"));
```

![image-20221016184409139](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016184409.png)

### 4.2 理解

组件内的标签可以定义ref属性来标识自己

### 4.3 事件处理

![image-20221016192554025](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016192554.png)

1. 通过onXxx属性指定事件处理函数(注意大小写)

   1) React使用的是自定义(合成)事件, 而不是使用的原生DOM事件

   2) React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)

2. 通过event.target得到发生事件的DOM元素对象

## 5. 收集表单数据

包含表单的组件分类

1. 受控组件

2. 非受控组件

### 5.1 受控组件

在 HTML 中，表单元素（如`<input>`、 `<textarea>` 和 `<select>`）之类的表单元素通常自己维护 state，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 [`setState()`](https://react.docschina.org/docs/react-component.html#setstate)来更新。

我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

![image-20221016192936867](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016192936.png)

### 5.2 非受控组件

![image-20221016193242530](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016193242.png)

## 6. 组件的生命周期

### 6.1 理解

1. 组件从创建到死亡它会经历一些特定的阶段。

2. React组件中包含一系列勾子函数(生命周期回调函数), 会在特定的时刻调用。

3. 我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作。

### 6.2 生命周期流程图(旧)

![旧版生命周期图示](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016193442.png)

生命周期的三个阶段（旧）

   **1.** **初始化阶段:** 由ReactDOM.render()触发---初次渲染

1. constructor()
2. componentWillMount()
3. render()
4. componentDidMount()



   **2.** **更新阶段:** 由组件内部this.setSate()或父组件重新render触发

1. shouldComponentUpdate()

2. componentWillUpdate()

3. render()

4. componentDidUpdate()



   **3.** **卸载组件:** 由ReactDOM.unmountComponentAtNode()触发

1. componentWillUnmount()

### 6.3 生命周期流程图(新)

![image-20221016193739948](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016193740.png)

生命周期的三个阶段（新）

**1.** **初始化阶段:** 由ReactDOM.render()触发---初次渲染

1. constructor()

2. **getDerivedStateFromProps** 

3. render()

4. componentDidMount()



**2.** **更新阶段:** 由组件内部this.setSate()或父组件重新render触发

1. **getDerivedStateFromProps**

2. shouldComponentUpdate()

3. render()

4. **getSnapshotBeforeUpdate**

5. componentDidUpdate()



**3.** **卸载组件:** 由ReactDOM.unmountComponentAtNode()触发

1. componentWillUnmount()

### 6.4 重要的勾子

1. render：初始化渲染或更新渲染调用

2. componentDidMount：开启监听, 发送ajax请求

3. componentWillUnmount：做一些收尾工作, 如: 清理定时器

### 6.5 即将废弃的勾子

1. componentWillMount

2. componentWillReceiveProps

3. componentWillUpdate

现在使用会出现警告，下一个大版本需要加上UNSAFE_前缀才能使用，以后可能会被彻底废弃，不建议使用。

## 7. 列表渲染

![image-20221016194408639](https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016194408.png)
