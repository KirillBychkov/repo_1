import React from 'react';
import './style.sass'

 const Input = ({ placeholder }) =>
    <div>
        <input className='input' type='text' placeholder={placeholder}/>
    </div>

export default Input;