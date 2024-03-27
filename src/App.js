import React from 'react';
import './App.css';
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

export default App;