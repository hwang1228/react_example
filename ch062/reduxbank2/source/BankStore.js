import { createStore, applyMiddleware } from 'redux'
import bankReducer from './BankReducer';
import thunk from 'redux-thunk';

const logger = (store) => (next) => (action) => {
    console.log('Dispatching : ', action);
    return next(action);
}

const bankStore = createStore(bankReducer, applyMiddleware(logger, thunk));
export default bankStore;