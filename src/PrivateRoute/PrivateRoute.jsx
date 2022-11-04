import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../customeHooks/useAuth';

export function PrivateRoute({ children }) {
	const { isAdmin } = useAuth();

	return <>{isAdmin ? children : <Navigate to='/courses' />} </>;
}
