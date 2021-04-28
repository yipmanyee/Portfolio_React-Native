import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default function FacebookApp() {
    const [result, setResult] = useState(null);

    const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.facebook.com/MeadowParkGC');
    setResult(result);
};
    return (
    <View style={styles.container}>
        <SocialIcon 
        title="Connect With Facebook"
        button
        type="facebook"
        iconStyle={{marginRight: 25}}
        onPress={_handlePressButtonAsync} 
        />
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    },

});