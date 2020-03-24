import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

function Header(props) {
  return (
    <View style={styles.appHeader}>
      <View style={styles.headerContainer}>
        <View>
          <Image
            source={require('removi/assets/logo.png')}
            style={styles.logoImg} />
        </View>
        <View>
          {props.children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appHeader: {
    // backgroundColor: 'seagreen',
    paddingRight: 25
  },
  headerContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoImg: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    // backgroundColor: 'lightcoral'
  }
});

export default Header;
