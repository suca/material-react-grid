import {
    CLEAR_FILTERS,
    REDUCE_DATA_BY_FILTERS
} from '../actions/toolbarGridActions';
import initialState from '../../initialState';
import mockReducers from './mockReducers';

const toolbarGridReducers = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_FILTERS:
            return {
                ...mockReducers(undefined, action)
            };
        case REDUCE_DATA_BY_FILTERS:
            return {
                ...mockReducers(undefined, action)
            };
        default:
            return state;
    }
};

export default toolbarGridReducers;
