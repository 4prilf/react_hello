import React from 'react';
import './App.css';

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


export default App;