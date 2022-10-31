const host = 'http://localhost:4000';

export const fetchCourses = async () => {
	const promise = await fetch(host + '/courses/all', {
		method: 'GET',
	});
	const result = await promise.json();
	return result.result;
};
