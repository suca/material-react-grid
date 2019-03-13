import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = () => ({
    progress: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
});

const Loading = (props) => {
    const { classes } = props;
    return (
        <div className={classes.progress}>
            <CircularProgress />
        </div>
    );
};

Loading.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);