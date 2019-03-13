import React from 'react';
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual';
import {
    PagingState,
    SortingState,
    IntegratedPaging,
    IntegratedSorting,
    DataTypeProvider,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';
import Loading from './Loading';
import ModalPanel from './ModalPanel'

const DateFormatter = ({ value }) => value.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3-$2-$1');

const DateTypeProvider = props => (
    <DataTypeProvider
        formatterComponent={DateFormatter}
        {...props}
    />
);

const propTypes = {
    rows: PropTypes.array,
    filters: PropTypes.object,
    isLoading: PropTypes.bool,
    mockService: PropTypes.func.isRequired,
};

class GridPanel extends React.PureComponent {
    constructor(props) {
        super(props);

        /**
         * TODO Move these implementation code (column names) to the application file
         */
        this.state = {
            columns: [
                { name: 'orderId', title: 'Order Id' },
                { name: 'companyName', title: 'Company Name' },
                { name: 'orderDate', title: 'Order Date' },
                { name: 'lastModified', title: 'Last Modified' },
                { name: 'total', title: 'Total' },
                { name: 'status', title: 'Status' },
                { name: 'plan', title: 'Plan' },
            ],
            dateColumns: ['orderDate', 'lastModified'],
            rows: props.rows || [],
            pageSizes: [10, 15, 20, 0],
            sorting: [{ columnName: 'orderDate', direction: 'desc' }],
            defaultSorting: [{ columnName: 'orderDate', direction: 'desc' }],
            isLoading: props.isLoading,
            openModal: false,
            rowSelected: null
        };

        this.changeSorting = this.changeSorting.bind(this);
        this.tableRowRendering = this.tableRowRendering.bind(this);
    }

    componentDidMount() {
        this.props.mockService(50);
    }

    componentDidUpdate (prevProps) {

        if (!isEqual(this.props.rows, prevProps.rows)) {
            this.setState({
                rows: this.props.rows,
                isLoading: this.props.isLoading
            });
        }
    }

    changeSorting(sorting) {
        this.setState({
            sorting,
        });
    }

    tableRowRendering ({ row, ...restProps }) {
        return (<Table.Row
            {...restProps}
            onClick={() => {
                this.setState({
                    openModal: true,
                    rowSelected: row,
                })}
            }
            data-tooltip='Click here to see the details'
            style={{
                cursor: 'pointer',
                backgroundColor: '#f0f4c340',
            }}
        />);
    };

    render() {
        const {
            rows,
            columns,
            pageSizes,
            dateColumns,
            sorting,
            defaultSorting,
            isLoading
        } = this.state;
        const onCloseModal = ()=> {
            this.setState({
                openModal: false,
            })
        };

        return (
            <div>
                <Grid
                    rows={rows}
                    columns={columns}
                >
                    <SortingState

                        sorting={ sorting }
                        onSortingChange={ this.changeSorting }
                    />
                    <IntegratedSorting />
                    <PagingState
                        defaultCurrentPage={0}
                        defaultPageSize={10}
                    />
                    <IntegratedPaging />
                    <DateTypeProvider
                        for={dateColumns}
                    />
                    <Table rowComponent={this.tableRowRendering} />
                    <TableHeaderRow showSortingControls />
                    <PagingPanel
                        pageSizes={pageSizes}
                    />
                </Grid>
                {isLoading && <Loading />}
                <ModalPanel open={this.state.openModal} data={this.state.rowSelected} closePopupModal={onCloseModal} />
            </div>
        );
    }
}
GridPanel.propTypes = propTypes;
export default GridPanel;
