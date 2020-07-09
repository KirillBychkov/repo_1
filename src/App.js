import React, { useState } from "react";
import Button from "./components/button";
import Input from "./components/input";
import List from "./components/list";
import { initInputValue } from "./const";

import "./style.sass";

const App = () => {
  const [value, setValue] = useState(initInputValue);

  const addTask = () => {
    console.log(value);
    setValue(initInputValue);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Button text="click me" onclick={addTask} />
        <Input placeholder="enter text" value={value} setValue={setValue} />
      </div>
      <List />
    </div>
  );
}

export default App;
