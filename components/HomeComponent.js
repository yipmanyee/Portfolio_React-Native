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
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
    },
    image: {
        flex: 1,
        justifyContent: "space-evenly"
    },
    
});

export default Home;