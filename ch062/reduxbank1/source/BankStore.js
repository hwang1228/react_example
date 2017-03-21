import { createStore } from 'redux'
import bankReducer from './BankReducer';

const bankStore = createStore(bankReducer);
export default bankStore;