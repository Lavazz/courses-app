import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { rootReducer } from './rootReducer.js';
import { coursesInitialState } from './courses/reducer.js';
import { authorInitialState } from './authors/reducer.js';
import { userInitialState } from './user/reducer.js';

const appInitialState = {
	courses: coursesInitialState,
	authors: authorInitialState,
	user: userInitialState,
};

const store = createStore(rootReducer, appInitialState, composeWithDevTools());

export default store;

// const getStore = () => {
// 	return createStore(rootReducer, appInitialState, composeWithDevTools());
// };

// export default getStore;
