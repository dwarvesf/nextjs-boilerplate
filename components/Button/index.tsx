import React from 'react'

const Button: React.FC<any> = ({ children }) => {
  return (
    <button className="px-5 py-3 bg-yellow-600 text-white rounded">
      {children}
    </button>
  )
}

export default Button
