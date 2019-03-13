import { connect } from 'react-redux';
import { mockService } from '../services/mockService';
import GridPanel from '../components/GridPanel';

const mapStateToProps = (state, props) => {
    return {
        ...props,
        rows: state.mock.rows,
        filters: state.toolbarGrid.filters,
        isLoading: state.mock.isLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        mockService: (length) => {
            dispatch(mockService(length));
        },
    };
};

const GridPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GridPanel);

export default GridPanelContainer;
