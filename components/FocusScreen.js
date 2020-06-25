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

class FocusScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/phonebg.jpg')}
        style={styles.background}
      >
        <SafeAreaView>
          <Text style={styles.taskTitle}>Countdown timer here</Text>
          <Button
            title='Start/stop timer'
            color='black'
          />
          <Button
            title='Back to dashboard'
            onPress={() => this.props.navigation.navigate('DashboardScreen')}
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
