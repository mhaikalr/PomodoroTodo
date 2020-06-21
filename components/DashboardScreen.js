import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import FocusScreen from './FocusScreen';
import TaskList from './TaskList';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

class DashboardScreen extends React.Component {
  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.headerRootContainer}>
          <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.headerBackground}
            resizeMode='stretch'>
            <Text style={styles.headerFont}>My Tasks</Text>
            <Text style={styles.dateFont}>{currentDate}</Text>
          </ImageBackground>
        </View>
        <View style={styles.bodyRootContainer}>
          <SafeAreaView style={styles.taskListContainer}>
            <TaskList />
          </SafeAreaView>
          <TouchableOpacity style={styles.floatingButton} >
            <Icon name="plus" size={20} color="#d8dfeb" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// to refactor
const currentDate =
  new Date().getDate() +
  '-' +
  (new Date().getMonth() + 1) +
  '-' +
  new Date().getFullYear();

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  headerRootContainer: {
    flex: 1,
  },
  headerBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerFont: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingLeft: 20,
    paddingBottom: 10,
  },
  dateFont: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'right',
    padding: 10,
  },
  bodyRootContainer: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: '#d8dfeb',
    alignItems: 'center',
  },
  taskListContainer: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.0)',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    flex: 1,
  },
  floatingButton: {
    borderWidth: 1,
    borderColor: '#a6a6a6',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: '#2e72ff',
  },
});

export default DashboardScreen;
