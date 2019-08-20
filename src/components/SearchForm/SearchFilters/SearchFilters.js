import React from 'react';

import classes from './SearchFilters.css';
import SearchFilter from "./SearchFilter/SearchFilter";

const yearOptions = [
    {
        'value': '1y',
        'displayValue': 'Current Year'
    },{
        'value': '2y',
        'displayValue': 'Last 2 Years'
    },{
        'value': '3y',
        'displayValue': 'Last 3 Years'
    },{
        'value': '5y',
        'displayValue': 'Last 5 Years'
    },{
        'value': '10y',
        'displayValue': 'Last 10 Years'
    }
]

const docTypeOptions = [
    {
        'value': '10-K',
        'displayValue': 'SEC 10-K(Annual)',
        'disabled': false
    }, {
        'value': '10-Q',
        'displayValue': 'SEC 10-Q(Quarterly)',
        'disabled': false
    }, {
        'value': '14A',
        'displayValue': 'SEC DEF 14A(Proxy Statements)',
        'disabled': false
    }, {
        'value': 'AnnualReports',
        'displayValue': 'Investor Reports',
        'disabled': true
    }
]

const sectorOptions = [
    {
        'value': 'Technology',
        'displayValue': 'Technology'
    },{
        'value': 'Telecommunications',
        'displayValue': 'Telecommunications'
    }
]

const countryOptions = [
    {
        'value': 'us',
        'displayValue': 'United States'
    }
]

const graphTypeOptions = [
    {
        'value': 'stackedBar',
        'displayValue': 'Bar'
    }, {
        'value': 'area',
        'displayValue': 'Area'
    }, {
        'value': 'line',
        'displayValue': 'Line'
    }
]

const filterOptions = {
    'years': {
        'label': 'Years',
        'options': yearOptions
    },
    'docTypes': {
        'label': 'Document Types',
        'options': docTypeOptions
    },
    'sectors': {
        'label': 'Sectors',
        'options': sectorOptions
    },
    'countries': {
        'label': 'Countries',
        'options': countryOptions
    },
    'graphTypes': {
        'label': 'Graph Types',
        'options': graphTypeOptions
    }
}

const searchFilters = (props) => {
    let searchFilters =Object.keys(filterOptions)
        .map(filterKey => {
            return <SearchFilter key= {filterKey}
                                 label={filterOptions[filterKey]['label']}
                                 filterValues={filterOptions[filterKey]['options']}
                                 selectedValues={props.selected[filterKey]}
                                 updateFilters={(event) => props.updateQueryFilters(event.target.value, filterKey)} />
        });
    return (
        <div className={classes.SearchFilters}>
            {searchFilters}
        </div>
    );
}

export default searchFilters;