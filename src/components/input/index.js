import React from 'react';
import './style.sass'

 function Input({ placeholder }) {
    return (
        <div>
            <input className='input' type='text' placeholder={placeholder}/>
        </div>
    )
}
export default Input;