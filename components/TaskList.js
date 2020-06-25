import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SectionList,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import FocusScreen from './FocusScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

class TaskList extends React.Component {
  renderSectionHeader = ({ section }) => {
    return <Text style={styles.headerRowText}>{section.title}</Text>;
  };
  renderItem = ({ item }) => {
    return (
      <View style={styles.itemRowContainer}>
        <TouchableOpacity style={styles.itemRowCheckbox}>
          <Ionicons name='md-checkmark-circle' size={20} color='#a6a6a6' />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemRowText}
          onPress={() => this.props.navigation.navigate('FocusScreen')}
        >
          <Text>{item.text}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#c7c7c7',
        }}
      />
    );
  };
  render() {
    return (
      <View style={styles.rootContainer}>
        <SectionList
          style={styles.rootContainer}
          sections={sections}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={extractKey}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const sections = [
  {
    title: 'To-do',
    data: [
      {
        id: 0,
        text:
          'Go to the very very very very very very very very very very very big supermarket',
      },
      { id: 1, text: 'Send email' },
    ],
  },
  {
    title: 'Completed',
    data: [
      { id: 2, text: 'Do laundry' },
      { id: 3, text: 'Collect dry cleaning' },
    ],
  },
];

const extractKey = (item, index) => item.id;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  // sectionListContainer: {
  //   alignItems: 'flex-end',
  //   justifyContent: 'flex-start',
  // },
  headerRowText: {
    width: '100%',
    backgroundColor: '#a6a6a6',
    paddingVertical: 13,
    paddingHorizontal: 15,
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  itemRowText: {
    flex: 10,
    paddingVertical: 13,
    fontSize: 15,
    textAlign: 'left',
    // backgroundColor: 'blue',
  },
  itemRowCheckbox: {
    flex: 1,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  itemRowContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    paddingHorizontal: 15,
  },
});

export default TaskList;
