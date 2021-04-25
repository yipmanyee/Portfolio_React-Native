import React, {Component} from 'react';
import { Alert, Modal, Pressable, Text, View, ScrollView, StyleSheet, 
    Picker, Switch, Button } from 'react-native';
import { Card, ListItem, Icon, Input } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { timing } from 'react-native-reanimated';

class Teetimes extends Component {
        constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            showCalendar: false,
            golfers: 1,
            holes: 18,
            showModal: false
        };
    }

    static navigationOptions = {
        title: 'Teetimes'
    };

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        this.setState({
            date: new Date(),
            showCalendar: false,
            golfers: 1,
            holes: 18,
            showModal: false    
        });
    }

    render() {
        return (
            <ScrollView>
                <Mission />	
                <Icon 
                    name='calendar'
                    type='font-awesome'
                    color='#20972D'
                    raised
                    reverse
                    size={40}
                    onPress={() => this.toggleModal()}
                /> 

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.showModal}
                        onRequestClose={() => this.toggleModal()}
                    >
                        <View style={styles.formRow}>
                            <Text style={styles.formLabel}>Date</Text>
                                <Button
                                    onPress={() =>
                                        this.setState({showCalendar: !this.state.showCalendar})
                                    }
                                    title={this.state.date.toLocaleDateString('en-US')}
                                    color='#20972D'
                                    accessibilityLabel='Tap me to select a reservation date'
                                />
                        </View>
                        {this.state.showCalendar && (
                            <DateTimePicker
                                value={this.state.date}
                                mode={'date'}
                                display='default'
                                onChange={(event, selectedDate) => {
                                    selectedDate && this.setState({date: selectedDate, showCalendar: false});
                                }}
                                style={styles.formItem}
                            />
                        )}
                        <View style={styles.formRow}>
                            <Text style={styles.formLabel}>Number of Golfers</Text>
                                <Picker
                                    style={styles.formItem}
                                    selectedValue={this.state.golfers}
                                    onValueChange={itemValue => this.setState({golfers: itemValue})}
                                >
                                <Picker.Item label='1' value='1' />
                                <Picker.Item label='2' value='2' />
                                <Picker.Item label='3' value='3' />
                                <Picker.Item label='4' value='4' />
                                </Picker>
                        </View> 
                        <View style={styles.formRow}>
                            <Text style={styles.formLabel}>9 or 18 Holes</Text>
                                <Switch
                                    style={styles.formItem}
                                    value={this.state.holes}
                                    trackColor={{true: '#20972D', false: null}}
                                    onValueChange={value => this.setState({holes: value})}
                                />
                        </View>
                        <View style={styles.formRow}>
                            <Text style={styles.formLabel}>With or Withour Cart</Text>
                                <Switch
                                    style={styles.formItem}
                                    value={this.state.cart}
                                    trackColor={{true: '#20972D', false: null}}
                                    onValueChange={value => this.setState({cart: value})}
                                />
                        </View>
                        <View style={styles.formRow}>
                            <Button
                                onPress={() => this.handleReservation()}
                                title='Search'
                                color='#20972D'
                                accessibilityLabel='Tap me to search for available teetimes to reserve'
                            />
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        );
	}
}

function Mission() {
    return (
        <Card title="Tee Times"         
        image={require('./images/courselayout.png')}>
            <Text style={{ margin: 10}}>
            Book your Tee time online or call our Pro Shop at 253-473-3033 and reserve a round on our fun and challenging course.
            Whether you are professional tour player or and amateur 6 to 86 Meadow Park provides it all at an affordable price.
            </Text>
            
        </Card>
    );
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    modal: { 
        justifyContent: 'center',
        margin: 20
    },
});

export default Teetimes;