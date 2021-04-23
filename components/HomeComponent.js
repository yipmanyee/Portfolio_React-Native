import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

function Home(props) {
    return (
        <ScrollView>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <Text>Meadow Park Golf Course</Text>
        <Image source = {require('./images/Logo.png')} 
        
        />
        </View>
        <Text>
        Meadow Park offers challenging play for golfers at every skill level, with 5 separate tee boxes on 
        its Championship 18 course. Well-groomed fairways and greens keep Meadow Park Golf Course difficult
        yet friendly, and the extensive new indoor/outdoor virtual practice facility offers junior golfers
        the opportunity to sharpen their skills.
        </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
        image: {
        width: 150,
        height: 150,
    },
})

export default Home;   