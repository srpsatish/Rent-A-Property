import React from 'react';
import './custombutton.scss';

const FilledButton = ({ children }) => {
  return <button className='filled-btn'>{children}</button>;
};

export default FilledButton;
