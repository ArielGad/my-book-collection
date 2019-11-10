import {START_FETCHING, STOP_FETCHING} from '../actions/types'

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case START_FETCHING:
            return true;

        case STOP_FETCHING:
            return false;

        default:
            return state
    }

};

export default loadingReducer