import React, { Component } from "react";
import Chart from "react-google-charts";
import axios from 'axios';

const chartHeader = [[
    'Month',
    'Bolivia',
    'Ecuador',
    'Madagascar',
    'Average',
]];

class Bar extends Component {

    render() {
        let chartData = []
        let chart = null;
        if (this.props.chartData) {
            console.log('loading chart')
            console.log(this.props.chartData)
            chartData = [...chartHeader, ...this.props.chartData]
            chart = <Chart
                width={'100%'}
                height={'300px'}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={chartData}
                options={{
                    title: 'Monthly Coffee Production by Country',
                    backgroundColor: '#20242B',
                    color: 'white',
                    titleTextStyle: {color: 'white'},
                    legend: {textStyle: {color: 'white'}},
                    vAxis: {
                        title: 'Cups',
                        titleTextStyle: {color: 'white'},
                        textStyle: {color: 'white'},
                        gridlines: {color: '#cccccc'}
                    },
                    hAxis: {
                        title: 'Month',
                        titleTextStyle: {color: 'white'},
                        textStyle: {color: 'white'},
                        gridlines: {color: '#cccccc'}
                    },
                    animation: {
                        duration: 1000,
                        easing: 'linear',
                        startup: true
                    },
                    seriesType: 'bars',
                    isStacked: true,
                    series: {
                        0: {color: '#2f4b7c'},
                        1: {color: '#665191'},
                        2: {color: '#a05195'},
                        3: { type: 'line' }
                    },
                    zIndex: 500
                }}
                rootProps={{ 'data-testid': '1' }}
            />;
        }

        return (
            <div style={{marginTop: '2%'}}>
                <h3> {this.props.hitCount} Hits</h3>
                {chart}
            </div>

        );
    }
}

export default Bar;
