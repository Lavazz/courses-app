import { host } from '../constants';

export const loginUser = async (credentials) => {
	const promise = await fetch(host + '/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	});
	return promise.json();
};

export const registerUser = async (newUser) => {
	const promise = await fetch(host + '/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newUser),
	});
	return promise.json();
};

export const fetchUser = async (token) => {
	const promise = await fetch(host + '/users/me', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
		},
	});

	return promise.json().result;
};

export const logoutUser = async () => {
	const promise = await fetch(host + '/logout', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('token'),
		},
	});

	return promise.json();
};
