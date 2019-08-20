import React from 'react';

import Button from "@material-ui/core/Button";

import classes from "./SearchCards.css";
import SearchCard from "./SearchCard/SearchCard";

const searchCards = (props) => {
    console.log("loading search results")
    let searchCards = Array(10).fill().map((_, i) => {
        return (<SearchCard />);
    })
    return (
        (
            <React.Fragment>
                <div className={classes.ResultsHeader}>
                    <div>
                        <h4 style={{
                            margin: '1% 0'
                        }}>Displaying Results {props.resultOffset} - {props.resultOffset + 9}</h4>
                    </div>
                    <div className={classes.NavigationButtons}>
                        <Button
                            variant="outlined"
                            size="medium"
                            color="white"
                            disabled={props.resultOffset <=1}>Previous</Button>
                        <Button
                            variant="outlined"
                            size="medium"
                            color="white"
                            disabled={props.resultOffset + 9 >= props.hits}>Next</Button>
                    </div>

                </div>

                <div className={classes.ResultCards}>
                    {searchCards}
                </div>
            </React.Fragment>
        )
    )
}

export default searchCards;