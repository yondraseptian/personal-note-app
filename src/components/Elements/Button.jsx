import React from 'react'
import '../../styles/style.css'

export const Button = (props) => {
  const {classname, children, onclick} = props
  return (
    <>
        <button className={classname} onClick={onclick}>{children}</button>
    </>
  )
}
