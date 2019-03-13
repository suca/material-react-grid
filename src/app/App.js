import React  from "react";
import './App.scss';
import logo from '../logo.png';
import Paper from '@material-ui/core/Paper';


import GridPanelContainer from './containers/GridPanelContainer';
import ToolbarGridContainer from "./containers/ToolbarGridContainer";
class App extends React.PureComponent {
    render () {
        return (
            <div className="app-container">
                <div className="app-container__logo">
                    <img src={logo} alt=""/>
                    <h2> ORDERS </h2>
                </div>
                <ToolbarGridContainer />
                <Paper className='app-container__grid'>
                    <GridPanelContainer />
                </Paper>
            </div>
        );
    }
}

export default App;
