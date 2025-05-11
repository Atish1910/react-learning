import React, { Children } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({isOpen, Children}) => {
    if(!isOpen) return null;

    return ReactDOM.createPortal (
        <div className='modal-01'>{Children}</div>,
        document.body
    );
};

export default Modal;