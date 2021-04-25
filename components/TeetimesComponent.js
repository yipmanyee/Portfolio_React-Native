import React, {Component} from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';

class Teetimes extends Component {
     	constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS,
        };
    }

    static navigationOptions = {
        title: 'Tee Times'
    };

    render() {
	    const renderRateItem = ({item}) => {
            return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require("./images/golfcart.jpg") }}
            />
    );
};
        
	return (
        <ScrollView>
			<Mission />	
                    <Card title="Tee Times">
                        <FlatList
                        data={this.state.partners}
                        renderItem={renderPartnerItem}
                        keyExtractor={item => item.id.toString()}
            />
            </Card>
		</ScrollView>
    );
	}
}

function Mission() {
    return (
        <Card title="Our  Mission">
            <Text style={{ margin: 10}}>
            Meadow Park Golf Course is a fun and challenging place to play, practice and socialize. 
            Whether you are professional tour player or and amateur 6 to 86 Meadow Park provides it all at an affordable price.
            </Text>
        </Card>
    );
}

export default Teetimes;