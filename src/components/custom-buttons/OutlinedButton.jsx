import React from 'react';
import './custombutton.scss';

const OutlinedButton = ({ children, onClick, ...other }) => {
  return (
    <button onClick={onClick} className='outlined-btn' {...other}>
      {children}
    </button>
  );
};

export default OutlinedButton;
