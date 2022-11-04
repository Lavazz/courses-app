import { host } from '../constants';

export const loginUser = async (credentials) => {
	const promise = await fetch(host + '/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	});
	return await promise.json();
};

export const registerUser = async (newUser) => {
	const promise = await fetch(host + '/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newUser),
	});
	return await promise.json();
};

export const fetchUser = async (token) => {
	const promise = await fetch(host + '/users/me', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
		},
	});
	const result = await promise.json();
	return result.result;
};

export const logoutUser = async () => {
	console.log('In delete token: ', localStorage.getItem('token'));
	const promise = await fetch(host + '/logout', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('token'),
		},
	});
	const result = await promise.json();

	return result;
};
