import {
	fetchCourses,
	addCourse,
	deleteCourse,
	updateCourse,
} from '../../api/courses';
import {
	setCoursesActionCreator,
	addCourseActionCreator,
	deleteCourseActionCreator,
	updateCourseActionCreator,
} from './actions';

export const getCoursesThunk = () => {
	return function (dispatch) {
		fetchCourses()
			.then((result) => {
				dispatch(setCoursesActionCreator(result));
			})
			.catch((e) => {
				console.error('Failed to fetch courses', e);
			});
	};
};

export const addCourseThunk = (newCourse) => {
	return function (dispatch) {
		addCourse(newCourse)
			.then((result) => {
				dispatch(addCourseActionCreator(newCourse));
			})
			.catch((e) => {
				console.error('Failed to fetch courses', e);
			});
	};
};

export const deleteCourseThunk = (courseId) => {
	return function (dispatch) {
		deleteCourse(courseId)
			.then(() => {
				dispatch(deleteCourseActionCreator(courseId));
			})
			.catch((e) => {
				console.error('Failed to fetch courses', e);
			});
	};
};

export const updateCourseThunk = (changedCourse) => {
	return function (dispatch) {
		updateCourse(changedCourse)
			.then((result) => {
				dispatch(updateCourseActionCreator(result.result));
			})
			.catch((e) => {
				console.error('Failed to fetch courses', e);
			});
	};
};
