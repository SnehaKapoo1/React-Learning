import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

// Simplify by Js Spread Operator ---> ...citrus

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Grapes", "Banana", ...citrus];

console.log(fruits);

// Js Spread Operator in objects

// const fullName = {
//   fName: "Rahul",
//   lName: "kumar"
// }

// const user ={
//   ...fullName,
//   id: 9,
//   username: "rahulkumarsoni"
// }

// console.log(user);

// trying without spread operator => ...
const fullName = {
  fName: "Rahul",
  lName: "kumar"
}

const user ={
  fullName,
  id: 9,
  username: "rahulkumarsoni"
}

console.log(user);