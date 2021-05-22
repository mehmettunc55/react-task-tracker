import React from 'react'

const Button = ({color, text, handleClick}) => {



    return (
        <div>
           <button className= 'btn'
           style={{backgroundColor:color}}
           onClick={handleClick}>
           {text}
           </button> 
        </div>
    )
}

export default Button
