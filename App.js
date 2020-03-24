/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react';
import LoadScreen from 'removi/assets/src/main/components/LoadScreen';
import AppLayout from 'removi/assets/src/app';

class App extends Component{
  handlePress = () => {
    this.props.navigation.navigate('Movie');
  }

  render(){
    return (
      <>
      <SafeAreaView style={styles.body}>
        <ScrollView>
          <Provider store={store}>
            <PersistGate
              loading={<LoadScreen />}
              persistor={persistor}>
              <AppLayout />
            </PersistGate>
          </Provider>
        </ScrollView>
      </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  body: {
    flex: 1,
    // backgroundColor: Colors.white,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#11121A' //'#0F1123' //'#101325'
  }
});

const AppNavigator = createStackNavigator({
  Home: App,
  // Categories,
  // Movie
});

export default AppNavigator;
