import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { GOLFCOURSES} from '../shared/golfcourses';
import { RATES } from '../shared/rates';
import { COURSEMAPS } from '../shared/coursemaps';
import { PARTNERS } from '../shared/partners';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/golfcoursemain.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            golfcourses: GOLFCOURSES,
            coursemaps: COURSEMAPS,
            partners: PARTNERS,
            rates: RATES
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.golfcourses.filter(golfcourse => golfcourse.featured)[0]}
                />
                <RenderItem 
                    item={this.state.coursemaps.filter(coursemap => coursemap.featured)[0]}
                />
                <RenderItem 
                    item={this.state.partners.filter(partner => partner.featured)[0]}
                />
                <RenderItem 
                    item={this.state.rates.filter(rate => rate.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;