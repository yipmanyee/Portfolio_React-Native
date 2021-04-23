import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderGolfcourse({golfcourse}) {
    if (golfcourse) {
        return (
            <Card 
                featuredTitle={golfcourse.name}
                image={require('./images/golfcoursec18.jpg')}
            >
                <Text style={{margin: 10}}>
                    {golfcourse.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function GolfcourseInfo(props) {
    return <RenderGolfcourse golfcourse={props.golfcourse} />;
}

export default GolfcourseInfo;