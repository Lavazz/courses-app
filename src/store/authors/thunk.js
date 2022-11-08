import { fetchAuthors, addAuthor } from '../../api/authors';
import { setAuthorsActionCreator, addAuthorActionCreator } from './actions';

export const getAuthorsThunk = () => {
	return function (dispatch) {
		fetchAuthors()
			.then((result) => {
				dispatch(setAuthorsActionCreator(result.result));
			})
			.catch((e) => {
				console.error('Failed to fetch authors', e);
			});
	};
};

export const addAuthorThunk = (newAuthor) => {
	return async function (dispatch) {
		return addAuthor(newAuthor)
			.then((result) => {
				dispatch(addAuthorActionCreator(result.result));
			})
			.catch((e) => {
				console.error('Failed to fetch author', e);
			});
	};
};
