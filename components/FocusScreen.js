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
import CustomCountDown from './CustomCountDown';

// class FocusScreen extends React.Component {
function FocusScreen({ route }) {
  const { taskToFocus } = route.params
  // render() {
  return (
    <ImageBackground
      source={require('../assets/phonebg.jpg')}
      style={styles.background}
    >
      <SafeAreaView>
        <Text style={styles.focusText} >{JSON.stringify(taskToFocus).replace(/['"]+/g, '')}</Text>
        <CustomCountDown />
      </SafeAreaView>
    </ImageBackground >
  );
  // }
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
  focusText: {
    fontSize: 20,
    color: '#000999',
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center'
  }
});

export default FocusScreen;
