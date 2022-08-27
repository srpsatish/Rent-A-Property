import React from 'react';
import './custombutton.scss';

const FilledButton = ({ children, onClick, ...other }) => {
  return (
    <button onClick={onClick} className='filled-btn' {...other}>
      {children}
    </button>
  );
};

export default FilledButton;
