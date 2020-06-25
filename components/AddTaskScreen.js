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
  Button,
  TextInput
} from 'react-native';

class AddTaskScreen extends React.Component {
  state = {
    taskToAdd: ''
  }
  handleTextChange = (inputText) => {
    this.setState({ taskToAdd: inputText })
  }
  render() {
    return (
      <View style={styles.rootContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleTextChange}
          placeholder='Enter your task here'
          placeholderTextColor='blue'
        />
        <Button
          title='Add task'
          style={styles.button}
        />
        <Button
          title='Back to Dashboard'
          onPress={() => this.props.navigation.navigate('DashboardScreen')}
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    margin: 20,
    padding: 10,
  },
  button: {
    flex: 1
  }
})

export default AddTaskScreen;
