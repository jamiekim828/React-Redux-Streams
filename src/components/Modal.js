import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      // everytime click the background going back to streams list
      onClick={props.onDismiss}
      className='ui dimmer modals visible active'
    >
      <div
        // inside of this box clicking will not make event of
        // going back to the list (history.push('/'))
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visible active'
      >
        <div className='header'>{props.title}</div>
        <div className='content'>{props.content}</div>
        <div className='actions'>{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
