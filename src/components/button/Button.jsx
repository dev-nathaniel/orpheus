import React from 'react'
import './Button.scss'

const Button = ({Icon, text, background, borderRadius, padding, textColor, reverse, margin}) => {
  return (
    <div className={`button ${textColor}-text-button`} style={{ borderRadius: borderRadius ? "5px" : null, padding: `${padding}`, flexDirection: reverse ? "row-reverse" : null, margin: margin ? margin : null  }}>
      <p className={textColor}>{text}</p>
      {Icon ? <Icon style={{fontSize: "21px", color: textColor==="black" ? "black" : "gold" }} /> : null }
    </div>
  )
}

export default Button