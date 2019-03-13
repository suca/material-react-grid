import {
    REQUEST_MOCK_DATA,
    RECEIVE_MOCK_DATA
} from '../actions/mockActions';
import initialState  from '../../initialState';
import isEqual from 'date-fns/isEqual';
import {
    CLEAR_FILTERS,
    REDUCE_DATA_BY_FILTERS,
} from '../actions/toolbarGridActions';

const mockReducers = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_MOCK_DATA:
            return {
                ...state,
                ...{ isLoading: true }
            };
        case RECEIVE_MOCK_DATA:
            return {
                ...state,
                ...{
                    isLoading: false,
                    rows: [...action.rows],
                }
            };
        case REDUCE_DATA_BY_FILTERS:

            const toFilter = [...state.rows];
            const newData = toFilter.filter(item => {
                const orderRes = action.filters.order ? parseInt(item.orderId) === parseInt(action.filters.order) : true;
                const companyRes = action.filters.company ? item.companyName === action.filters.company : true;
                
                const orderDateRes = action.filters.orderDate ?
                    (
                        isEqual(new Date(action.filters.orderDate), new Date(item.orderDate))
                    ) : true;

                const lastModifiedRes = action.filters.lastModifiedDate ?
                    (
                        isEqual(new Date(action.filters.lastModifiedDate), new Date(item.lastModified))
                    ): true;
                return orderRes && companyRes && orderDateRes && lastModifiedRes;
            });
            return {
                ...state,
                filters: action.filters,
                ...{
                    rows: newData,
                }
            };
        case CLEAR_FILTERS:
            return {
                ...state,
                filters: action.filters
            };
        default:
            return { ...state };
    }
};

export default mockReducers;
