import React from "react";
import Button from "./components/button";
import Input from "./components/input";
import List from "./components/list";

import "./style.sass";

const App = () => {

  const addTask = () => {
   console.log('button click') 
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Button text="click me"  onclick={addTask} />
        <Input placeholder="enter text" />
      </div>
      <List />
    </div>
  );
}

export default App;
