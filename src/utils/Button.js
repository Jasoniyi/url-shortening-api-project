import React from 'react'

const Button = ({ children, theme, textColor, bannerBg }) => {
  return (
    <button 
    className={`${theme} ${textColor} ${bannerBg} px-4 rounded-full`}>
        {children}
    </button>
  )
}

export default Button