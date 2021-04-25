import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, } from 'react-native-elements'



class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render(){
	return (
        <ScrollView>
			<Card title="Meadow Park Golf Course" wrapperStyle={{ margin: 5 } }
                image={require('./images/proshop.jpg')}>
                    <Text style={{ margin: 10}}>
                    {`7108 Lakewood Dr\nTacoma, WA98467\nU.S.A.`}
                </Text>
                <Text style={{ margin: 10}}>
                    {`Phone: 1-253-473-3033\nEmail: meadow@mpgc.com`}
                </Text>
                </Card>
		</ScrollView>
    );
	}
}

export default Contact;