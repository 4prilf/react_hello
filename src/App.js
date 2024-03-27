import React from 'react';
import './App.css';
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

    //出发事件完成后才完全更新
  
    this.state.a=999
    /*
    this.setState({
      //什么都不干进行更新
    })
    */
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

export default App;