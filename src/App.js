import React from 'react';
import './App.css';

//{}:调用JavaScript
class App extends React.Component{
  f1(){
    console.log(this) 
  }
  f2(a,b){//推荐使用
    console.log(this,a,b)     
    return function(){
      console.log("return by f2",a,b)//并不显示
    }
  }
  f3(a,b){
    
    console.log(this,a,b)//并不显示
    a=a+1
    return function(){
      console.log("return by f3",a,b)
    }
 
  }
  render(){
    //去执行f1返回1的值
    //去执行f3但是，返回执行f3的值
    //f3首次渲染 67 点击渲染 return by function
    //index加载app组件首次渲染执行6，7

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



export default App;