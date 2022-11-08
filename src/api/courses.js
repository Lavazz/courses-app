import { host } from '../constants';

export const fetchCourses = async () => {
	const promise = await fetch(host + '/courses/all', {
		method: 'GET',
	});
	const result = await promise.json();
	return result.result;
};

export const deleteCourse = async (courseId) => {
	console.log('TOKEN:', localStorage.getItem('token'));
	console.log('ID:', courseId);
	const promise = await fetch(host + '/courses/' + courseId, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('token'),
		},
	});

	return promise.json();
};

export const updateCourse = async (updatedCourse) => {
	const promise = await fetch(host + '/courses/' + updatedCourse.id, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('token'),
		},
		body: JSON.stringify(updatedCourse),
	});

	return promise.json();
};

export const addCourse = async (newCourse) => {
	console.log('addCourse new course: ', newCourse);
	const promise = await fetch(host + '/courses/add', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('token'),
		},
		body: JSON.stringify(newCourse),
	});

	return promise.json();
};
