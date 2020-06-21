import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import DashboardScreen from './DashboardScreen';

class FocusScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.background}>
        <SafeAreaView>
          <Text style={styles.taskTitle}>Focus</Text>
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