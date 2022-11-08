import { SET_USER, DELETE_USER, GET_USER } from './types';

export const setUserActionCreator = (payload) => ({
	type: SET_USER,
	payload,
});
export const deleteUserActionCreator = () => ({
	type: DELETE_USER,
});
export const getUserActionCreator = (payload) => ({
	type: GET_USER,
	payload,
});
