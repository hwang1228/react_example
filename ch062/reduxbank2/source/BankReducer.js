import constants from './Constants';
import { combineReducers } from 'redux';
import update from 'react-addons-update';

const initialState = {
    initialBalance: 0,
    initialUI : {
        showInfo : true
    }
}

const uiReducer = (state = initialState.initialUI, action) => {
    switch(action.type) {
        case constants.TOGGLE_INFO : 
            return update(state, { showInfo : { $apply : currentState => !currentState }});
        default :
            return state;
    }
}

const balanceReducer = (state=initialState.initialBalance, action) => {
    switch (action.type) {
        case constants.DEPOSIT_INTO_ACCOUNT:
            return state + parseFloat(action.amount);
        case constants.WITHDRAW_FROM_ACCOUNT:
            return state - parseFloat(action.amount);
        default:
            return state;
    }
};

const bankReducer = combineReducers({ balance : balanceReducer, ui : uiReducer });
export default bankReducer;