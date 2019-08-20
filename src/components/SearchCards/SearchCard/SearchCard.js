import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from "@material-ui/core/CardHeader";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        flexBasis: '18%',
        boxSizing: 'border-box',
        cursor: 'pointer',
        margin: '1%',
        backgroundColor: '#20242B'
    },
    content: {
        paddingTop: 0,
        paddingBottom: 0
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SearchCard (props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <CardHeader
                title="APPLE INC."
                subheader="2019  Q2  10-Q"
                titleTypographyProps={{variant: 'h6', component:'h4'}}
                subheaderTypographyProps={{color: 'textSecondary'}}>
            </CardHeader>
            <CardContent className={classes.content}>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}