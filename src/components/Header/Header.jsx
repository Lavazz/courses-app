import React from 'react';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './Header.css';

import { USER_NAME } from '../../constants.js';

function Header({ onLogout, isAuth }) {
	return (
		<div className='Header'>
			<Logo />
			{isAuth && (
				<span className='wrapper'>
					<span className='center_block'>{USER_NAME}</span>

					<span className='right_block'>
						<Button buttonText='Logout' onClick={onLogout} />
					</span>
				</span>
			)}
		</div>
	);
}

export default Header;
