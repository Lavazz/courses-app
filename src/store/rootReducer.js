import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coursesReducer } from './courses/reducer.js';
import { authorsReduser } from './authors/reducer.js';
import { userReduser } from './user/reducer.js';

export const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReduser,
	user: userReduser,
});

export const store = configureStore({ reducer: rootReducer });
