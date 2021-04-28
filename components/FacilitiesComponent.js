import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { GOLFCOURSES } from '../shared/golfcourses';


class Facilities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            golfcourses: GOLFCOURSES
        };
    }

    static navigationOptions = {
        title: 'Facilities'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderFacilityItem = ({item}) => {
            return (
                <ListItem 
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('GolfcourseInfo', { golfcourseId: item.id })}
                    leftAvatar={{ source: {uri: baseUrl + item.image}}}
                />
        );
    };

    return (
        <FlatList
            data={this.state.golfcourses}
            renderItem={renderFacilityItem}
            keyExtractor={item => item.id.toString()}
        />
        );
    }
}

export default Facilities;
