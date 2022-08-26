import React from 'react';
import { NavLink } from 'react-router-dom';
import Down from '../../assets/dropdown.png';
import Logo from '../../assets/logo.png';
import FilledButton from '../custom-buttons/FilledButton';
import OutlinedButton from '../custom-buttons/OutlinedButton';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='header'>
      <NavLink to='/' className='logo-container'>
        <img src={Logo} alt='logo' className='logo' />
        Estatery
      </NavLink>
      <div className='nav-section'>
        <div className='navbar'>
          <NavLink to='/rent' className='nav-item'>
            Rent
          </NavLink>
          <NavLink to='/buy' className='nav-item'>
            Buy
          </NavLink>
          <NavLink to='/sell' className='nav-item'>
            Sell
          </NavLink>
          <div className='nav-item'>
            Manage Property
            <img src={Down} alt='down' className='drop' />
          </div>
          <div className='nav-item'>
            Resources
            <img src={Down} alt='down' className='drop' />
          </div>
          <NavLink to='/favorite' className='nav-item'>
            Favorite
          </NavLink>
        </div>
        <div className='login-buttons'>
          <OutlinedButton>Login</OutlinedButton>
          <FilledButton>Sign up</FilledButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
