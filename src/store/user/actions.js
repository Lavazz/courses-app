import { SET_USER } from './types';
import { DELETE_USER } from './types';

export const setUserActionCreator = (payload) => ({
	type: SET_USER,
	payload,
});
export const deleteUserActionCreator = (payload) => ({
	type: DELETE_USER,
	payload,
});
