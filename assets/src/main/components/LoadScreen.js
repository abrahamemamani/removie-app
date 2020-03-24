import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Dimensions
} from 'react-native'

export default class LoadScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("removi/assets/logo.png")}
          style={styles.logo}
        />
        <ActivityIndicator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#11121A',
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: Dimensions.get("window").height,

    flex: 1,
    backgroundColor: '#11121A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10
  }
});