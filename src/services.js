export const fetchAuthors = async () => {
	const promise = await fetch('http://localhost:4000/authors/all', {
		method: 'GET',
	});

	const result = await promise.json();
	console.log('Aut2', result.result);
	return result.result;
};

export const fetchCourses = async () => {
	const promise = await fetch(`http://localhost:4000/courses/all`, {
		method: 'GET',
	});
	const result = await promise.json();
	console.log('Courses2', result.result);
	return result.result;
};

export const fetchUser = async (credentials) => {
	const promise = await fetch('http://localhost:4000/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	});
	const result = await promise.json();
	return result;
};

export const registerPost = async (newUser) => {
	const promise = await fetch(`http://localhost:4000/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newUser),
	});
	const result = await promise.json();
	return result;
};
