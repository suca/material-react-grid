import { connect } from 'react-redux';
import ToolbarGrid from '../components/ToolbarGrid';
import { reduceDataByFilters, clearFilters } from '../actions/toolbarGridActions';
import { mockService } from '../services/mockService';

const mapStateToProps = (state, props) => {
    return {
        ...props,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        reduceDataByFilters: (filters) => dispatch(reduceDataByFilters(filters)),
        clearFilters: () => dispatch(clearFilters()),
        mockService: (length) => dispatch(mockService(length)),
    };
};

const ToolbarGridContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToolbarGrid);

export default ToolbarGridContainer;
