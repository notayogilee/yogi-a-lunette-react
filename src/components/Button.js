import React from 'react'

const Button = (props) => {

  return (
    <button
      className="circle"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button;
