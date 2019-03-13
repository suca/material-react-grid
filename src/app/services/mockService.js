import { generateRows } from '../services/generatorData';
import {
    requestMockData,
    receiveMockData,
} from '../actions/mockActions';

export const mockService = (length) => {
    return (dispatch) => {
        dispatch(requestMockData(length));

        return generateRows({length: length})
            .then(json => {
                dispatch(receiveMockData(json))
            })
    };
};
