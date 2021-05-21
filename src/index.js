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

//function call
function nameFormat(user){
return user.firstName+" "+user.lastName;
}
var user={
  firstName:'ABC',
  lastName:'DEF'
};
var element1=(
  <h1>Hello,{nameFormat(user)}</h1>
);
ReactDOM.render(
  element1,
  document.getElementById("function-call"),  
);

const title = user.firstName;
// This is safe:
var element3 = <p>{title}</p>;
var element2=function(){
  document.getElementById("function-call").appendChild=element3;
}
element2();

function tick() {
  const element = (
    <div>
      <p>updating element without affecting others</p>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('time'));
}

setInterval(tick, 1000);

// functional Components
function Welcome(props) {
  return <h1>functional {props.name}</h1>;
}

const functionalComponent = <Welcome name="components" />;
ReactDOM.render(
  functionalComponent,
  document.getElementById('function-components')
);

//
function Welcome1(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App1() {
  return (
    <div>
      <Welcome1 name="Sara" />
      <Welcome1 name="Cahal" />
      <Welcome1 name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App1 />,
  document.getElementById('app')
);

//
function formatDate(date) {
  return date.toLocaleDateString();
}

//Property access
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
ReactDOM.render( // passing values to component "Comment" from above obj element 
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('property')
);

// class syntax

class Clock extends React.Component { //same as function name and add --extends React.Component
  constructor(props) { //to intialize object 
    super(props);
    this.state = {date: new Date()};
  }

  render() {  //add empty render method 
    return (
      <div>
        <h1>class example</h1>
        <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,  // remove all props in its compponent
  document.getElementById('basic-class')
);

//Preventing Component from Rendering
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (      
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>        
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('warning')
);

//list & key usage

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  debugger
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('key')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);