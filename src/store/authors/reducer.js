import { ADD_AUTHOR } from './types';
import { SET_AUTHORS } from './types';

export const authorInitialState = [];

export const authorsReduser = (state = authorInitialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_AUTHOR:
			return [...state, payload];
		case SET_AUTHORS:
			return payload;
		default:
			return state;
	}
};
