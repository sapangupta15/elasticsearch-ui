import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '15%',
        maxWidth: '18%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, labelName, theme) {
    return {
        fontWeight:
            labelName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function SearchFilter(props) {
    const classes = useStyles();
    const theme = useTheme();

    const [labelValue, setLabelValue] = React.useState([]);

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
        <React.Fragment>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                    ref={inputLabel}
                    htmlFor={props.label}
                    style={{fontWeight:theme.typography.fontWeightLight}}>
                    {props.label}
                </InputLabel>
                <Select
                    multiple
                    value={props.selectedValues}
                    onChange={props.updateFilters}
                    input={<OutlinedInput labelWidth={labelWidth} name={props.label} id={props.label} />}
                    renderValue={selected => (
                        <div className={classes.chips} >
                            {selected.map(value => (
                                <Chip key={value} label={value} className={classes.chip} />
                            ))}
                        </div>
                    )}
                    MenuProps={MenuProps}
                >
                    {props.filterValues.map(filterVal => (
                        <MenuItem key={filterVal.value}
                                  value={filterVal.value}>
                            {filterVal.displayValue}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </React.Fragment>
    );
}
