import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//to know how variables work in react
const name = 'SWARNA';
const element = <h1>Hello, {name} element</h1>;
debugger;
ReactDOM.render(
  element,
  document.getElementById('content')
);

//class
class Demo{
  method1(){
    var a=1;
    var b=2;
    var c=a+b;
    document.getElementById("class").innerHTML=c +" method1";
  }
  method2(){
    var a=10;
    var b=20;
    var c=a+b;
    document.getElementById("class").innerHTML=c +" method2";
  }
}
var demoObj=new Demo();
demoObj.method1();
demoObj.method2();

// arrow function
var a=(x)=>{       //function(){
    document.getElementById("function").innerHTML=x;
}
a("function declaration");

//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();