import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// import classes from './SearchBar.css'

const useStyles = makeStyles(theme => ( {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '0',
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: 0,
        paddingTop: '1%',
        backgroundColor: '#20242B'
    },
    textField: {
        margin: '0 ',
        width: '50%',
        height: '60px',
        padding: '0',
    },
    button: {
        margin: '0 2%',
        padding: '0',
        width: '10%',
        height: '56px',
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

export default function SearchBar(props) {
    const classes = useStyles();
    let buttonDisabled = props.searchTerms.trim() === '';
    return (
        <form className={classes.container}>
            {/*<h3>FIL Financial Search</h3>*/}
            <TextField
                id="outlined-name"
                label="Search"
                autoComplete={'off'}
                className={classes.textField}
                value={props.searchTerms}
                onChange={(event) => props.updateSearchTerms(event.target.value)}
                onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                        props.submitRequest();
                        ev.preventDefault();
                    }
                }}
                margin="normal"
                variant="outlined"
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={buttonDisabled}
                onClick={ props.submitRequest}>
                Search
            </Button>
        </form>
    );
}