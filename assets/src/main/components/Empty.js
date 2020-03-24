import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function Empty(props) {
  return (
    <>
      <Text>{props.msg}</Text>
    </>
  );
}

export default Empty;