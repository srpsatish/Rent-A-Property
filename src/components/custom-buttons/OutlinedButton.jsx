import React from 'react';
import './custombutton.scss';

const OutlinedButton = ({ children }) => {
  return <button className='outlined-btn'>{children}</button>;
};

export default OutlinedButton;
