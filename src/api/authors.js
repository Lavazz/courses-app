const host = 'http://localhost:4000';

export const fetchAuthors = async () => {
	const promise = await fetch(host + '/authors/all', {
		method: 'GET',
	});

	const result = await promise.json();
	return result.result;
};
