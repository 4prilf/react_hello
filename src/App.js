import React from 'react';
import './App.css';
/*01react组件和jsx
function App() {
/*
  function FnHello(){
    return <div>hello</div>
  }

 //首字母大写
  function FnHello(){
    return React.createElement('div',[],'hello')
  }

  class ClassHello extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return <div>hello class</div>
    }
  }
  let com1 = <FnHello></FnHello>
  let obj ={
    a:1
  }
  let arr = [com1,2,3]
  return (
    <div className="App">
    {false?<FnHello></FnHello>:obj.a}
    {true?<FnHello></FnHello>:obj.a}
    <FnHello></FnHello>
    <ClassHello></ClassHello>
    </div>
  );
}
*/

/*02react的事件绑定
class App extends React.Component{
  render(){
    return<div className="App">
      <div onClick={()=>{
        console.log(1)
      }}>
        123
      </div>
    </div>
  }
}
*/
/*
//{}:调用JavaScript
class App extends React.Component{
  f1(){
    console.log(this) 
  }
  f2(a,b){//推荐使用
    console.log(this,a,b) 
  }
  f3(a,b){
    console.log(a,b)
    return function(){
      console.log("return by function")
    }
  }
  render(){
    //去执行f1返回1的值
    //去执行f3但是，返回执行f3的值
    //f3首次渲染 67 点击渲染 return by function
    //index加载app组件首次渲染执行6，7
    //为什么首次渲染会加载两次6，7
    //什么是箭头函数，起着什么作用
    return<div className="App">
      <div onClick={this.f1}> 
      undefine  123
      </div>
      <div onClick={this.f2.bind(this,1,2)}>
        123    App
      </div>
      <div onClick={this.f3(6,7)}>
        123    App
      </div>
    </div>
  }
}
*/
//03响应式数据定义
  /*
class App extends React.Component{
  state = {
    a:0
  }
  b=123
  addA(){
  
    this.setState({
      a:888
    })
    console.log(this.state.a)//此时控制台打印的任然是0

    return this.state.a
    //出发事件完成后才完全更新
  
    this.state.a=999
    this.setState({
      //什么都不干进行更新
    })
    this.state.a=1000
    console.log(this.state.a)//此时控制台打印的是1000
    //页面显示居然是1000

    return this.state.a
//打印的state.a是addA中本身state.a的数值，在完成所有函数调用后才更新state.a
  }
  render(){
    return <div className='App'>
      {this.state.a}
      <button onClick={this.addA.bind(this)}>change</button>
      {this.b}
    </div>
  }
}
//结论：setdate是在完成所有函数回调后以当前的函数栈内对应数的值进行更新，setdata在哪都是完成函数回调后才执行，因此在书写时setdata要放在最后
//事实逻辑就是如此
*/
/*
//setdata的浅合并
class App extends React.Component{
  state ={//数据初始化，在index中引入，首次加载
    a:0,
    b:1,
    c:{
      c1:123,
      c2:321
    }
  }
  addA = () => {//后续设置
    this.setState({
      a:this.state.a+1,
      b:2,
      c:{
        c1:9
      }
    })
    console.log(this.state)//首次c1:123因为setdata实际最后执行
    //第二次执行后c2直接没了，因为数组的软合并
  }
  initC = () => {//后续设置
    this.setState({
      a:this.state.a+1,
      b:2,
      c:{
        ...this.state.c,//声明一遍数组元素，防止软合并丢失
        c1:9
      }
    })
    console.log("initC",this.state)
  }
  initState = ()=>{
    this.setState({
      a:this.state.a+1,
      b:2,
      c:{
        ...this.state.c,//声明一遍数组元素，防止软合并丢失
        c1:9
      }
    },()=>{
      console.log("initstate的setstate的第二个参数",this.state)//a=1
    })
    console.log("initstate的setstate下面",this.state)//a=0
    //事实证明的确setstate就是在最后执行
  }
  //不要在render中调用setstate render->setstate->重新加载render
  render(){
    return <div className='App'>
      {this.state.a}
      <button onClick={this.addA}>a加1</button>
      <button onClick={this.initC}>c2初始化</button>
      <button onClick={this.initState}>setstate第二个参数获取state</button>
    </div>
  }
}
*/

//PureComponent
/*class App extends React.Component 改为 class App extends React.PureComponent
//1.在state中首次加载state后，后续使用setstate有多次加载重复数据的现象，性能优化
    this.setState({
      a:2,
      b:2,
      c:{
        ...this.state.c,//声明一遍数组元素，防止软合并丢失
        c1:9
      }
    })
//2.PureComponent在对象，数组修改中的判定问题
对数组与对象purecompon是检查内存中地址有无改变进行判断
所以打印一直是123没有添加的4,console正常更新PureComponent的更新机制是检查内存地址
*/
/*
class App extends React.PureComponent{
  state ={//数据初始化，在index中引入，首次加载
    a:0,
    b:1,
    c:{
      c1:123,
      c2:321
    },
    arr: [1,2,3],
  }

  pure  () {//后续设置
    this.state.arr.push(4);
    this.setState({
      a:this.state.a+1,
      b:2,
      c:{
        c1:9
      },
      arr:this.state.arr
      //arr:[...this.state.arr]//数组重新声明，新内存地址
    })
    console.log(this.state)
  }
  render(){
    return <div className='App'>
      {this.state.arr}
      <button onClick={this.pure.bind(this)}>PureComponent</button>
    </div>
  }
}
*/
export default App;
