import { ADD_AUTHOR } from './types';
import { GET_AUTHORS } from './types';
import { SET_AUTHORS } from './types';

export const addAuthorActionCreator = (payload) => ({
	type: ADD_AUTHOR,
	payload,
});
export const getAuthorsActionCreator = (payload) => ({
	type: GET_AUTHORS,
	payload,
});
export const setAuthorActionCreator = (payload) => ({
	type: SET_AUTHORS,
	payload,
});
