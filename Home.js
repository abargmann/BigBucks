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

var MarketOverview = require('./MarketOverview')

class Home extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.header}>
                    Hello
                </Text>
                <TouchableHighlight
                    style={styles.button}>
                    <Text style={styles.buttonText}>Up</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}>
                    <Text style={styles.buttonText}>Down</Text>
                </TouchableHighlight>
                <MarketOverview>
                </MarketOverview>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        padding: 10,
    },
    header: {
        fontSize:30,
        marginTop:10,
    },
    button: {
        height: 70,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center' 
    },
    buttonText: {
        fontSize: 22,
        color: '#FFFFFF',
        alignSelf: 'center'
    }
});

module.exports = Home;
