import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { GOLFCOURSES } from '../shared/golfcourses';
import { baseUrl } from '../shared/baseUrl';

function RenderGolfcourse({golfcourse}) {
    
    if (golfcourse) {
        return (
            <Card 
                featuredTitle={golfcourse.name}
                image={{url: baseUrl + golfcourse.image}}
            >
                <Text style={{margin: 10}}>
                    {golfcourse.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class GolfcourseInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            golfcourses: GOLFCOURSES
        };
    }

    render() {
        const golfcourseId = this.props.navigation.getParam('golfcourseId');
        const golfcourse = this.state.golfcourses.filter(golfcourse => golfcourse.id === golfcourseId)[0];
        return <RenderGolfcourse golfcourse={golfcourse} />;
    }
}

export default GolfcourseInfo;