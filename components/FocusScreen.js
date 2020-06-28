import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  Button,
} from 'react-native';
import DashboardScreen from './DashboardScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';
import { clockRunning } from 'react-native-reanimated';

class FocusScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/phonebg.jpg')}
        style={styles.background}
      >
        <SafeAreaView>
          <CountDown
            until={5}
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
          />
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskTitle: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FocusScreen;
