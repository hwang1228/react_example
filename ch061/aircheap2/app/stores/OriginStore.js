import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';

class OriginStore extends ReduceStore {
    getInitialState() {
        return '';
    }

    reduce(state, action) {
        switch(action.type) {
            case constants.CHOOSE_AIRPORT_ORIGIN : 
                return state = action.code;
            default : 
                return state;
        }
    }
}

export default new OriginStore(AppDispatcher);