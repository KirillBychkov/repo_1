import React from 'react';
import Button from './components/button';
import './style.sass';
import Input from './components/input'


function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <Button text='click me'/>
      <Input placeholder='enter text'/>
      </div>
    </div>
  );
}

export default App;
