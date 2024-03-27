import React from 'react';
import './App.css';

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

export default App;