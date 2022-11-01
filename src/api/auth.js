import { host } from '../constants';

export const fetchUser = async (credentials) => {
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
	const promise = await fetch(`http://localhost:4000/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newUser),
	});
	return await promise.json();
};
