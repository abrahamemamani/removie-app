import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Icon name="search1" color="#555C75" size={20} />
          <TextInput
            style={styles.searchBar}
            placeholder="¿Qué quieres ver hoy?"
            placeholderTextColor="#555C75"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#232A40',
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'transparent',
    color: '#555C75',//#7685B0
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 20,
    paddingVertical: 15,
  }
});