import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import isEqual from 'lodash/isEqual';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class ModalPanel extends React.Component {
    constructor(props){
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.state = {
            open: false
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!isEqual(this.props.open, prevProps.open)) {
            this.setState({
                open: this.props.open
            });
        }
    }

    handleClose = () => {
        this.setState({ open: false });
        this.props.closePopupModal()
    };

    render() {
        const { open = false } = this.state;
        const data = this.props.data;

        if (!data) {
            return false;
        }

        return (
            <Dialog
                open={open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Details"}
                </DialogTitle>
                <DialogContent>
                    <List>
                        <ListItem>
                            <TextField
                                className={''}
                                id="input-with-icon-textfield"
                                label="Order Id"
                                value={data.orderId}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                className={''}
                                id="input-with-icon-textfield"
                                label="Company Name"
                                value={data.companyName}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                    readOnly: true,
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <TextField
                                className={''}
                                id="input-with-icon-textfield"
                                label="Last Modified"
                                value={data.lastModified}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                className={''}
                                id="input-with-icon-textfield"
                                label="Order Date"
                                value={data.orderDate}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                    readOnly: true,
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <TextField
                                className={''}
                                id="input-with-icon-textfield"
                                label="Plan"
                                value={data.plan}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                className={''}
                                id="input-with-icon-textfield"
                                label="Status"
                                value={data.status}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                    readOnly: true,
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <TextField
                                className={''}
                                id="input-with-icon-textfield"
                                label="Total"
                                value={data.total}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                    readOnly: true,
                                }}
                            />
                        </ListItem>
                    </List>
                    <DialogContentText id="alert-dialog-description">
                        Integration of Material Design, React, Redux and DevExtreme React Grid, feel free to check out the source.
                        <br/>
                        <br/>
                        <i>Made with <b>&hearts;</b> by Omar Sucapuca</i>
                        <br/>
                        <i>Developed and tested in Google Chrome</i>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            )
    }
}

export default ModalPanel;
