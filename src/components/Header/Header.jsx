import React, { useState } from 'react';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './Header.css';

import { USER_NAME } from '../../constants.js';
import { Link } from 'react-router-dom';
function Header({ onLogout, isAuth }) {
	return (
		<div className='Header'>
			<Logo />
			<span className='wrapper'>
				{isAuth && <span className='center_block'>{USER_NAME}</span>}

				<span className='right_block'>
					{/* <Link to='/login'> */}
					<Button buttonText='Logout' onClick={onLogout} />
					{/* </Link> */}
				</span>
			</span>
		</div>
	);
}

export default Header;
