import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function PrivateRoute({ children }) {
	const { isAdmin } = useAuth();

	return isAdmin ? children : <Navigate to='/courses' />;
}
