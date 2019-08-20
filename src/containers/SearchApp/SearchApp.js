import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';

import classes from './SearchApp.css';
import SearchBar from "../../components/SearchForm/SearchBar/SearchBar";
import SearchFilters from "../../components/SearchForm/SearchFilters/SearchFilters";
import Bar from "../../components/Charts/Bar/Bar";
import SearchCards from "../../components/SearchCards/SearchCards";

class SearchApp extends Component {

    state = {
        searchTerms: '',
        filters: {
            years: [],
            docTypes: [],
            sectors: [],
            countries: [],
            graphTypes: []
        },
        showChart: false,
        chartData: [],
        hits: null,
        showSearchResults : false,
        searchResultData : []
    }

    updateSearchTerms = (searchTerms) => {
        this.setState({searchTerms: searchTerms});
        // console.log(searchTerms)
    }

    updateQueryFilters = (filterValues, filterKey) => {
        let updatedFilters = {...this.state.filters};
        updatedFilters[filterKey] = filterValues;
        this.setState({filters: updatedFilters});
        console.log(filterValues, filterKey)
    }


    loadChartData () {
        axios.get('assets/response.json')
            .then((response) => {
                let random = Math.floor(Math.random() * (+10 - +1)) + +1;
                console.log(random)
                console.log('loading data')
                let data = response.data.data.map(entry => {
                    let rowData = [];
                    rowData.push(new Date(entry.date));
                    rowData.push(random * entry.bolivia);
                    rowData.push(random * entry.ecuador);
                    rowData.push(random * entry.madagascar);
                    rowData.push(Math.round((rowData[1] + rowData[2] + rowData[3])/3));
                    return rowData;
                });
                this.setState(
                    {showChart: true,
                        chartData: data,
                        hits: 230});
            });
    }

    loadSearchresults () {
        axios.get('assets/response.json')
            .then((response) => {
                    console.log("inside result load");
                    this.setState({showSearchResults: true})
                });
                // this.setState(
                //     {showChart: true,
                //         chartData: data});
    }

    submitRequest = () => {
        if (this.state.searchTerms.trim()) {
            console.log("submitting request")
            console.log(this.state)
            this.loadChartData();
            this.loadSearchresults();
        }
    }

    render() {
        let chart = this.state.showChart ?
            (
             <React.Fragment>
                 <Bar
                     chartData= {this.state.chartData}
                     hitCount={this.state.hits} />
                 <Divider
                     variant="fullWidth"
                     style={{
                         marginTop: '1%',
                         marginBottom: '1%'
                     }} />
             </React.Fragment>   
            ): null;

        let searchResults = this.state.showSearchResults ? <SearchCards resultOffset={1} hits={this.state.hits}/> : null;


        return (
            <div className={classes.SearchApp}>
                <div className={classes.SearchHeader}>
                    <SearchBar
                        searchTerms={this.state.searchTerms}
                        updateSearchTerms={this.updateSearchTerms}
                        submitRequest={this.submitRequest} />
                    <SearchFilters
                        updateQueryFilters={this.updateQueryFilters}
                        selected={this.state.filters}/>
                </div>
               <div>
                   {chart}
               </div>
                <div style={{marginTop: '1%'}}>
                    {searchResults}
                </div>
            </div>

        );
    }
}

export default SearchApp;