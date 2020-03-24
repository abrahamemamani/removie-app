import React from 'react';
import { 
  View,
  Text,
  StyleSheet
} from 'react-native';

const CarrouselListLayout = (props) => (
  <View>
    <Text style={styles.title}>{props.title}</Text>
    <View>
      {props.children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  title: {
    color: '#C5CAD9',
    fontSize: 22,
    paddingBottom: 15,
    fontWeight: 'bold'
  }
});

export default CarrouselListLayout;