import { loginUser, fetchUser, logoutUser } from '../../api/auth';
import { setUserActionCreator, deleteUserActionCreator } from './actions';

export const loginUserThunk = (credentials) => {
	return async function (dispatch) {
		loginUser(credentials)
			.then((response) => {
				localStorage.setItem('token', response.result);
				return response.result;
			})
			.then((token) => {
				dispatch(fetchUserThunk(token));
			})
			.catch((e) => console.error('Failed fetch user'));
	};
};

export const fetchUserThunk = () => {
	return async function (dispatch) {
		fetchUser()
			.then((result) => {
				dispatch(setUserActionCreator(result.result));
			})
			.catch((e) => console.error('Failed fetch user'));
	};
};

export const logoutUserThunk = () => {
	return async function (dispatch) {
		logoutUser()
			.then((result) => {
				localStorage.removeItem('token');
				dispatch(deleteUserActionCreator());
			})
			.catch((e) => console.error('Failed delete user'));
	};
};
