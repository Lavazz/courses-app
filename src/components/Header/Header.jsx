import React from 'react';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectIsAuth } from '../../store/user/selectors';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { deleteUserActionCreator } from '../../store/user/actions';

function Header() {
	const user = useSelector(selectUser);
	const isAuth = useSelector(selectIsAuth);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function onLogout() {
		dispatch(deleteUserActionCreator(user));
		localStorage.removeItem('token');
		navigate('/login');
	}
	return (
		<div className='Header'>
			<Logo />
			{isAuth && (
				<span className='wrapper'>
					<span className='center_block'>{user.name}</span>

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
