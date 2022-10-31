import { ADD_AUTHOR } from './types';
import { GET_AUTHORS } from './types';
import { SET_AUTHORS } from './types';

export const authorInitialState = [];

export const authorsReduser = (state = authorInitialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_AUTHORS:
			return payload;
		case ADD_AUTHOR:
			return state.concat(payload);
		case SET_AUTHORS:
			return state.concat(payload);
		default:
			return state;
	}
};
