import { rootReducer } from './rootReducer.js';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { coursesInitialState } from './courses/reducer.js';
import { authorInitialState } from './authors/reducer.js';
import { userInitialState } from './user/reducer.js';

const appInitialState = {
	courses: coursesInitialState,
	authors: authorInitialState,
	user: userInitialState,
};

export const getStore = (initialState = appInitialState) => {
	return createStore(rootReducer, initialState, composeWithDevTools());
};
