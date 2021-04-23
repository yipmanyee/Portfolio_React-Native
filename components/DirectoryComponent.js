import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { GOLFCOURSES } from '../shared/golfcourses';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            golfcourses: GOLFCOURSES
        };
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('GolfcourseInfo', { golfcourseId: item.id })}
                    leftAvatar={{ source: require('./images/golfcoursemain.jpg')}}
                />
        );
    };

    return (
        <FlatList
            data={this.state.golfcourses}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
        );
    }
}

export default Directory;
