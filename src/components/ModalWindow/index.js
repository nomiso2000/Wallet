import React from 'react';
import styl from './ModalWindow.module.css';
import { useState } from 'react';
import TestWindow from '../TestWindow/index';

const ModalWindow = ({ getEvent, handleDeleteLetter, handleEditLetter }) => {
  return (
    <>
      <div
        id="ModalWindowId"
        className={styl.modalWindow}
        onMouseOver={event => {
          getEvent(true);
        }}
      >
        <div
          className={styl.editSvg}
          onClick={() => {
            handleEditLetter();
          }}
        ></div>
        <div
          className={styl.deleteSvg}
          onClick={() => { handleDeleteLetter();
          }}
        ></div>
      </div>
    </>
  );
};
export default ModalWindow;
