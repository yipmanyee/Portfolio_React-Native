import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { GOLFCOURSES } from '../shared/golfcourses';
import GolfcourseInfo from './GolfcourseInfoComponent';
import { View } from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            golfcourses: GOLFCOURSES,
            selectedGolfcourse: null
        };
    }

    onGolfcourseSelect(golfcourseId) {
        this.setState({selectedGolfcourse: golfcourseId});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Directory
                    golfcourses={this.state.golfcourses}
                    onPress={golfcourseId => this.onGolfcourseSelect(golfcourseId)}
                />
                <GolfcourseInfo
                    golfcourse={this.state.golfcourses.filter(
                        golfcourse => golfcourse.id === this.state.selectedGolfcourse)[0]}
                />
            </View>
        );
    }
}

export default Main;