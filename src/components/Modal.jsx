import React from 'react'

const Modal = (props) => {
    const {open, setOpen,children} = props
  return (
    <div>
     <div className={`overlay animated ${open ? 'show' : ''}`}>
       <div className='modal'>
        <b className='close' onClick={() => setOpen(false)}>X</b>
        {children}
       </div>
     </div>
        
    </div>
  )
}

export default Modal