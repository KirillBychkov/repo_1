import React from "react";
import Button from "./components/button";
import Input from "./components/input";
import List from "./components/list";
import "./style.sass";

const list = [
  {
    name: "Buy Milk",
    id: 1,
  },
  {
    name: "Go to the gym",
    id: 2,
  },
];

function App() {
  const addTask = function () {
   console.log('button click') 
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Button text="click me"  onclick={addTask} />
        <Input placeholder="enter text" />
      </div>
      <List listOfItems={list} />
    </div>
  );
}

export default App;
