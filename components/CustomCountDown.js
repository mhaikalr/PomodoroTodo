import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    SafeAreaView,
    Button,
} from 'react-native';
import CountDown from 'react-native-countdown-component';

class CustomCountDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRunning: false,
        }
    }
    render() {
        return (
            <SafeAreaView>
                <CountDown
                    until={60 * 25}
                    onFinish={() => alert('Time for a break!')}
                    timeToShow={['M', 'S']}
                    digitStyle={{ backgroundColor: '#FFF' }}
                    size={30}
                    timeLabelStyle={{ color: '#fff', fontWeight: 'bold' }}
                    digitTxtStyle={{ color: '#000999' }}
                    separatorStyle={{ color: '#fff' }}
                />
                <Button
                    title='Start/stop timer'
                    color='black'
                    onPress={() => { this.setState({ isRunning: !this.state.isRunning }) }}
                />
            </SafeAreaView>
        )
    }
};

export default CustomCountDown;