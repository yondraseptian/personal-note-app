import React from 'react'
import '../../styles/style.css'
import { Button } from './Button'
export const CardNotes = (props) => {
    const {title, date, body, onDelete,children,archived} = props
  return ( 
    <div className='note-item'>
      <div className='note-item__content'>
        <h3 className='note-item__title'>{title}</h3>
        <p className='note-item__date'>{date}</p>
        <p className='note-item__body'>
            {body}
        </p>
        </div>
        <div className='note-item__action'>
            <Button classname='note-item__delete-button' onclick={onDelete}>Hapus</Button>
            <Button classname='note-item__archive-button' onclick={archived}>{children}</Button>
        </div>
    </div>
  )
}
