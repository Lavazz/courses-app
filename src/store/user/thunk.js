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

export const fetchUserThunk = (token) => {
	return async function (dispatch) {
		fetchUser(token)
			.then((result) => {
				dispatch(setUserActionCreator(result));
			})
			.catch((e) => console.error('Failed fetch user'));
	};
};

export const logoutUserThunk = () => {
	return async function (dispatch) {
		logoutUser()
			.then((data) => {
				if (data && data.successful) {
					dispatch(deleteUserActionCreator());
					localStorage.removeItem('token');
				}
			})
			.catch((e) => console.error('Failed delete user'));
	};
};
