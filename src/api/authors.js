import { host } from '../constants';

export const fetchAuthors = async () => {
	const promise = await fetch(host + '/authors/all', {
		method: 'GET',
	});

	return promise.json();
};

export const addAuthor = async (newAuthor) => {
	const promise = await fetch(host + '/authors/add', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('token'),
		},
		body: JSON.stringify(newAuthor),
	});

	return promise.json();
};
