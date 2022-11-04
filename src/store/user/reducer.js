import { SET_USER, DELETE_USER, GET_USER } from './types';

const token = localStorage.getItem('token');

export const userInitialState = {
	name: '',
	email: '',
	token,
	isAuth: !!token,
	role: '',
};

export const userReduser = (state = userInitialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case DELETE_USER:
			return {
				userInitialState,
				isAuth: false,
				token: '',
			};
		case SET_USER:
			return {
				...state,
				name: payload.name,
				email: payload.email,
				isAuth: true,
				token: localStorage.getItem('token'),
				role: payload.role,
			};
		case GET_USER:
			return { ...state, user: payload };
		default:
			return state;
	}
};
