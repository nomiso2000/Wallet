import React from 'react';
import styl from './TestWindow.module.css';

const TestWindow = ({ handleCloseOfTestlWindow }) => {
  return (
    <div className={styl.overlay}>
      <div
        className={styl.testWindow}
        onClick={() => {
          handleCloseOfTestlWindow();
        }}
      >
        TestWindow
      </div>
    </div>
  );
};
export default TestWindow;
