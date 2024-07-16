import React, { Fragment, memo } from 'react'
import './modal.scss'

const Modal = ({ children, close }) => {
    return <Fragment>
        <div onClick={() => close(null)} className='overlay'></div>
        <div className='modal'> {children} </div>
    </Fragment>
}

export default memo(Modal)