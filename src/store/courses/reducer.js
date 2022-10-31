import { ADD_COURSE } from './types';
import { DELETE_COURSE } from './types';
import { GET_COURSES } from './types';
import { UPDATE_COURSE } from './types';
import { SET_COURSES } from './types';

export const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_COURSES:
			return payload;
		case DELETE_COURSE:
			return state.filter((course) => course.id !== payload);
		case ADD_COURSE:
			return state.concat(payload);
		case UPDATE_COURSE:
			return state.map((course) =>
				course.id === payload.id ? payload : course
			);
		case SET_COURSES:
			return state.concat(payload);
		default:
			return state;
	}
};
