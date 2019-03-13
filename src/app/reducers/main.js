import { combineReducers } from "redux/es/redux";
import mockReducers from './mockReducers';
import toolbarGridReducers from './toolbarGridReducers';

const reducers = combineReducers({
    mock: mockReducers,
    toolbarGrid: toolbarGridReducers
});

export default reducers;
