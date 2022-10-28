import React from 'react';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './Header.css';
import PropTypes from 'prop-types';

function Header({ onLogout, isAuth, user }) {
	return (
		<div className='Header'>
			<Logo />
			{isAuth && (
				<span className='wrapper'>
					<span className='center_block'>{user.email}</span>

					<span className='right_block'>
						<Button buttonText='Logout' onClick={onLogout} />
					</span>
				</span>
			)}
		</div>
	);
}

Header.propTypes = {
	onLogout: PropTypes.func,
	isAuth: PropTypes.bool,
	user: PropTypes.object,
};

export default Header;
