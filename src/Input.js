import React from 'react'

const Input = ({ placeholder, size, background, label, color }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        style={(background && { background }, color && { color })}
        className={`input-${size}`}
        value={label}
      />
    </div>
  )
}

export default Input
