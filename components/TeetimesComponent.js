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
        title: 'Teetimes'
    };

    render() {
 	    const renderPartnerItem = ({item}) => {
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
        <Card title="Tee Times" image={require('./images/courselayout.png')}>
            <Text style={{ margin: 10}}>
            Book your Tee time online or call our Pro Shop at 253-473-3033 and reserve a round on our fun and challenging course.
            Whether you are professional tour player or and amateur 6 to 86 Meadow Park provides it all at an affordable price.
            </Text>
            
        </Card>
    );
}

export default Teetimes;