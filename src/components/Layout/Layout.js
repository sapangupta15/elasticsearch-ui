import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import classes from './Layout.css';

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                {/*<AppBar position="static"  style={{backgroundColor: '#101215'}} >*/}
                {/*    <Toolbar>*/}
                {/*        <Typography variant="h5" color="inherit">*/}
                {/*            FIL Financial Search*/}
                {/*        </Typography>*/}
                {/*    </Toolbar>*/}
                {/*</AppBar>*/}
                <main >
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;