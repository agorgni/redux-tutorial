import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducer from './reducers';

const logger = createLogger({
    diff: true,
    duration: true,
});
const store = createStore(reducer, applyMiddleware(logger));

export default store;