import { rootReducer } from './rootReducer.js';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

export const getStore = () => {
	return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};
