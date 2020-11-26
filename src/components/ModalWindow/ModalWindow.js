import React from 'react';
import styl from './ModalWindow.module.css';
import { useState } from 'react';
import TestWindow from '../TestWindow/TestWindow';

const ModalWindow = ({
  // getEvent,
  // handleCloseModalWindow,
  handleDeleteLetter,
  handleEditLetter
}) => {
  const [renderEditWindow, setRenderEditWindow] = useState(false);
  
  return (
    <>
    {renderEditWindow ?  <TestWindow />:
    
      <div
        id="ModalWindowId"
        className={styl.modalWindow}
        onMouseOver={event => {
          // console.log('event.currentTarget.id', event.currentTarget.id),
            // getEvent(event.currentTarget.id);
        }}
        // onMouseOut={getEvent(false)}
      >
        <div
          className={styl.editSvg}
          onClick={() => {
            setRenderEditWindow(true);
            console.log('renderEditWindow', renderEditWindow),
            handleEditLetter()
              // handleCloseModalWindow(false)
              
          }}
        ></div>
        <div
          className={styl.deleteSvg}
          onClick={() => {
            console.log('del'), handleDeleteLetter();
          }}
        ></div>
      </div>
}
    </>
  );
};
export default ModalWindow;
