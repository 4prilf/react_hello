import React from 'react';
import './App.css';

  
function App() {
  /*
    function FnHello(){
      return <div>hello</div>
    }
  */
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
      {arr}
      <ClassHello></ClassHello>
      </div>
    );
  }


export default App;