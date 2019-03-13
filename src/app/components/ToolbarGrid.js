import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FormControl, Input, InputLabel} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';

const propTypes = {
    reduceDataByFilters: PropTypes.func,
    clearFilters: PropTypes.func,
    mockService: PropTypes.func,
};
class ToolbarGridContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClearData = this.onClearData.bind(this);
        this.handleOrderChange = this.handleOrderChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleOrderDateChange = this.handleOrderDateChange.bind(this);
        this.handleLastModifiedDateChange = this.handleLastModifiedDateChange.bind(this);
    }

    state = {
        // The first commit of Material-UI
        order: '',
        company: '',
        orderDate: '',
        lastModifiedDate: '',
    };

    handleOrderDateChange = date => {
        if (date.target.value) {
            this.setState({ orderDate: date.target.value });
        }
    };

    handleLastModifiedDateChange = date => {
        if (date.target.value) {
            this.setState({ lastModifiedDate: date.target.value });
        }
    };
    handleOrderChange = event => {
        this.setState({
            order: event.target.value
        });
    };
    handleCompanyChange = event => {
        this.setState({
            company: event.target.value
        });
    };

    onClickHandler (e) {

        const filters ={};
        if (this.state.order) {
            filters['order'] = this.state.order;
        }
        if (this.state.company) {
            filters['company'] = this.state.company;
        }
        if (this.state.orderDate) {
            filters['orderDate'] = this.state.orderDate;
        }
        if (this.state.company) {
            filters['lastModifiedDate'] = this.state.lastModifiedDate;
        }
        this.props.reduceDataByFilters(filters);
        e.stopPropagation();
        e.preventDefault();
    }

    onClearData(e) {
        this.setState({
            order: '',
            company: '',
        });
        this.props.clearFilters();
        this.props.mockService(50);
        e.stopPropagation();
        e.preventDefault();
    }

    render() {

        return  <form className='app-container__header' noValidate>
            <Grid container spacing={8}>
                <Grid item xs={12} sm={3}>
                    <FormControl>
                        <InputLabel htmlFor="order-id">Order Id</InputLabel>
                        <Input id="order-id" autoComplete="off" value={this.state.order} onChange={this.handleOrderChange} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <FormControl>
                        <InputLabel htmlFor="company">Company</InputLabel>
                        <Input id="company" autoComplete="off" value={this.state.company} onChange={this.handleCompanyChange} />
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <FormControl>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container className='' justify="space-around">
                                <TextField
                                    id="date"
                                    label="Order Date"
                                    type="date"
                                    onChange={this.handleOrderDateChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <FormControl>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container className='' justify="space-around">
                                <TextField
                                    id="date"
                                    label="Last Modified"
                                    type="date"
                                    onChange={this.handleLastModifiedDateChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={1} className={'app-button__search'}>
                    <Button variant="contained" color="primary" onClick={this.onClickHandler}>
                        SEARCH
                        <SearchIcon />
                    </Button>
                </Grid>
                <Grid item xs={12} sm={1} className={'app-button__clear'}>
                    <Button variant="contained" color="default" onClick={this.onClearData}>
                        CLEAR
                        <ClearIcon />
                    </Button>
                </Grid>
            </Grid>
        </form>
    }
}

ToolbarGridContainer.propTypes = propTypes;
export default ToolbarGridContainer;