import { ADD_AUTHOR } from './types';
import { SET_AUTHORS } from './types';

export const addAuthorActionCreator = (payload) => ({
	type: ADD_AUTHOR,
	payload,
});
export const setAuthorsActionCreator = (payload) => ({
	type: SET_AUTHORS,
	payload,
});
