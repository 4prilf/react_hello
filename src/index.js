import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const rot = ReactDOM.hydrateRoot(document.getElementById('rot'));
//ReactDOM的createRoot只能创建一个根DOM，其他的dom视为其子ROM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*
rot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
/*
setTimeout(()=>{
  root.unmount();
},2000)
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
