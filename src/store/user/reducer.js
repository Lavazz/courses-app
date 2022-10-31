import { SET_USER } from './types';
import { DELETE_USER } from './types';

const token = localStorage.getItem('token');

export const userInitialState = {
	name: '',
	email: '',
	token,
	isAuth: !!token,
};

export const userReduser = (state = userInitialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case DELETE_USER:
			return {
				...userInitialState,
				name: '',
				email: '',
			};
		case SET_USER:
			return {
				...userInitialState,
				name: payload.name,
				email: payload.email,
			};
		default:
			return state;
	}
};
