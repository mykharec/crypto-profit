import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from '../reducers/index';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));
