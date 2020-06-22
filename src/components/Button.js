import React from 'react'

const Button = (props) => {
  console.log(props.id)
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
