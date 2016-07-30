/**
 * 
 * 
 * 
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
    
class MarketOverview extends Component {

    constructor(props){
        super(props);

        this.setState({
            marketData: ''
        })
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData(){
        var moment = require('moment');
        var date = moment().add(-2, 'days').format();
        var url = "https://quandl.com/api/v3/datasets/YAHOO/INDEX_GSPC.json"
        + "?column_index=4"
        + `&start_date=${date}`
        + "&collapse=daily"
        + "&transform=rdiff"
        + "&api_key=4hJJ17vxCEe5cMdAoxUr";
        fetch(url).then((response) => {
            return response.json();
        })
        .then((results) => {
            var rdiff = results.dataset.data[0][1];
            var percentDiff = (rdiff*100).toFixed(2) + '%';
            console.log(percentDiff);
            this.setState({
                marketData: percentDiff
            })
        });
    }

    render() {

        return (
            <Text></Text>
        );
    }
}

module.exports = MarketOverview;
