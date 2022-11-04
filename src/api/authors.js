import { host } from '../constants';

export const fetchAuthors = async () => {
	const promise = await fetch(host + '/authors/all', {
		method: 'GET',
	});

	const result = await promise.json();
	return result.result;
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

	const result = await promise.json();
	return result;
};
