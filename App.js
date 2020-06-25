import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// You can import from local files
import FocusScreen from './components/FocusScreen';
import DashboardScreen from './components/DashboardScreen';
import AddTaskScreen from './components/AddTaskScreen';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

function App() {
  return (
    <View style={styles.mainContainer}>
      <AppContainer />
    </View>
  );
}

const AppNavigator = createSwitchNavigator(
  {
    DashboardScreen,
    FocusScreen,
    AddTaskScreen,
  },
  {
    initialRouteName: 'AddTaskScreen',
  }
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
