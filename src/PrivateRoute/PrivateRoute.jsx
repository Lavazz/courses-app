import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAdmin } from '../utils/isAdmin';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/user/selectors';

export function PrivateRoute({ children }) {
	const user = useSelector(selectUser);
	const admin = isAdmin(user);

	return <>{admin ? children : <Navigate to='/courses' />} </>;
}
