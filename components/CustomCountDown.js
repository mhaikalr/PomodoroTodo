import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Button,
} from 'react-native';
import CountDown from 'react-native-countdown-component';

class CustomCountDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRunning: false,
            until: 60 * 25,
            id: 0,
            first: true
        }
    }
    render() {
        return (
            <View>
                <CountDown
                    until={this.state.until}
                    onFinish={() => { alert('Time for a break!') }}
                    timeToShow={['M', 'S']}
                    digitStyle={{ backgroundColor: '#FFF' }}
                    size={30}
                    timeLabelStyle={{ color: '#fff', fontWeight: 'bold' }}
                    digitTxtStyle={{ color: '#000999' }}
                    separatorStyle={{ color: '#fff' }}
                    running={this.state.isRunning}
                    id={this.state.id}
                />
                <Button
                    title='Start/stop timer'
                    color='black'
                    onPress={() => { this.setState({ isRunning: !this.state.isRunning, first: false }) }}
                />
                <Button
                    title='Reset timer'
                    color='black'
                    onPress={() => { this.state.first ? console.log(this.state.id) : this.setState({ isRunning: false, until: 60 * 25, first: true, id: this.state.id + 1 }) }}
                />
            </View>
        )
    }
};

export default CustomCountDown;