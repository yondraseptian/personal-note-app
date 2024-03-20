import React from 'react'

export const Input = (props) => {
    const { placeholder, classname ,value, name,onchange} = props
  return (
    <div>
        <input type="text" value={value} onChange={onchange} name={name} className={ classname}  placeholder={placeholder} />
    </div>
  )
}
