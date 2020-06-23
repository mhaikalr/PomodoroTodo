import React from "react";
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
} from "react-native";

class AddTaskScreen extends React.Component {
  render() {
    return (
      <View style={{ justifyContent: "center", flex: 1 }}>
        <Button
          title="Back to Dashboard"
          onPress={() => this.props.navigation.navigate("DashboardScreen")}
        />
      </View>
    );
  }
}

export default AddTaskScreen;
