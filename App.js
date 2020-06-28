import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import FocusScreen from './components/FocusScreen';
import DashboardScreen from './components/DashboardScreen';
import AddTaskScreen from './components/AddTaskScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='DashboardScreen'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          }
        }}
      >
        <Stack.Screen
          name='DashboardScreen'
          component={DashboardScreen}
          options={{ headerShown: false }} />
        <Stack.Screen
          name='FocusScreen'
          component={FocusScreen}
          options={{ title: 'Complete this task' }} />
        <Stack.Screen
          name='AddTaskScreen'
          component={AddTaskScreen}
          options={{ title: 'Add new task' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
  }
});

export default App;
