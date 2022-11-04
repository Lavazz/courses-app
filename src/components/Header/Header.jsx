import React from 'react';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectIsAuth } from '../../store/user/selectors';
import { useNavigate } from 'react-router-dom';
import { logoutUserThunk } from '../../store/user/thunk';

function Header() {
	const user = useSelector(selectUser);
	const isAuth = useSelector(selectIsAuth);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function onLogout() {
		dispatch(logoutUserThunk());
		navigate('/login');
	}
	return (
		<div className='Header'>
			<Logo />
			{isAuth && (
				<span className='wrapper'>
					<span className='center_block'>{user.name || user.email}</span>

					<span className='right_block'>
						<Button onClick={onLogout}>Logout</Button>
					</span>
				</span>
			)}
		</div>
	);
}

export default Header;
