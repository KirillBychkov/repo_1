import React from 'react';
import './style.sass';

 const Input = ({ placeholder, value, setValue }) => {
   const onChange = ({ target }) => setValue(target.value);

   return <div>
     <input
       className='input'
       type='text'
       placeholder={placeholder}
       value={value}
       onChange={onChange}
     />
   </div>
};

export default Input;