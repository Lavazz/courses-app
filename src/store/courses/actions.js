import { ADD_COURSE } from './types';
import { DELETE_COURSE } from './types';
import { GET_COURSES } from './types';
import { SET_COURSES } from './types';
import { UPDATE_COURSE } from './types';

export const addCourseActionCreator = (payload) => ({
	type: ADD_COURSE,
	payload,
});
export const deleteCourseActionCreator = (payload) => ({
	type: DELETE_COURSE,
	payload,
});
export const getCoursesActionCreator = (payload) => ({
	type: GET_COURSES,
	payload,
});
export const updatetActionCreator = (payload) => ({
	type: UPDATE_COURSE,
	payload,
});
export const setCoursesActionCreator = (payload) => ({
	type: SET_COURSES,
	payload,
});
