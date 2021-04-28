import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, ScrollView, Button } from 'react-native';
import { Card, SocialIcon } from 'react-native-elements'
import FacebookApp from '../shared/facebook';

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
                    <Text style={{ margin: 10}}>Phone: 1-253-473-3033</Text>     
                    <Text style={{ margin: 10}}>Email: meadow@mpgc.com</Text>   
                    <FacebookApp />    
                </Card>
            </ScrollView>
    );
	}
}

export default Contact;