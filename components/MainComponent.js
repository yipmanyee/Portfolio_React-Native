import React, {Component} from 'react';
import Home from './HomeComponent';
import {View} from 'react-native';
import { render } from 'react-dom';

class Main extends Component {
    constructor(props){}

    render() {
    return(
        <View style = {{flex: 1}}>
            
            <Text>
                Best Golf Course in Tacoma
            </Text>
        </View>
    );
}
}

export default Main;