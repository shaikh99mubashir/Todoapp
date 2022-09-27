import React from 'react'

const Button = (prop) => {
  return (
    <div>
      <button className={prop.classes} onClick={prop.btnClicked}>{prop.buttonValue}</button>
    </div>
  )
}

export default Button
