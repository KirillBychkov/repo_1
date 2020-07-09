import React, { useState } from "react";
import Button from "./components/button";
import Input from "./components/input";
import List from "./components/list";
import { initInputValue, initListItems } from "./const";
import { uuid } from 'uuidv4';

import "./style.sass";

const App = () => {
  const [value, setValue] = useState(initInputValue);
  const [list, setList] = useState(initListItems);

  const addTask = () => {
    if(value.length !== 0) {
      let newItem = {
        name: value,
        id: uuid(),
        done: false,
      };
      const newList = [ ...list ];
      newList.push(newItem);
      setList(newList);
      setValue(initInputValue);
    }
  };
  
  const setIsDone = id => {
    const newList = list.map((elem) => {
      if(elem.id === id) elem.done = !elem.done;
      return elem;
    });
    setList(newList);
  };
  
  const deleteItem = id => {
    const newList = list.filter(elem => elem.id !== id)
    setList(newList);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Button text="click me" onClick={addTask} />
        <Input placeholder="enter text" value={value} setValue={setValue} />
      </div>
      <List list={list} setIsDone={setIsDone} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
