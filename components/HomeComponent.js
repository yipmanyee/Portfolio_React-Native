import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet, } from 'react-native';

class Home extends Component {

        static navigationOptions = {
        title: 'Home'
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./images/golfcoursemain.jpg')} style={styles.image}>
                    <Text style={styles.text}>Meadow Park Golf Course</Text>
                </ImageBackground>
                <Text>Welcome to Meadow Park Golf Course, a fun and challenging place to play,
                    practice and socialize. Whether you are professional tour player or and amateur 6 to 86 Meadow Park 
                    provides it all at an affordable price.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column"
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    image: {
        flex: 1,
        justifyContent: "space-evenly"
    },
    text: {
        color: "white",
        fontSize: 35,
        textAlign: "center"
    },

});

export default Home;