import React from 'react'

const Primarybtn = ({children,type, className}) => {
  return (
    <div>

        <button type={type} className={`${className}`}>{children}</button>
      
    </div>
  )
}

export default Primarybtn
