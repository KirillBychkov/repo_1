import React from 'react'

const Button = ({ text, onclick }) =>
    <button onClick={onclick}>
        {text}
    </button>

export default Button;