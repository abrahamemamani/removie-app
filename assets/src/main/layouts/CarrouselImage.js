import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CarrouselImage = (props) => {
  // const {title, medium_cover_image, genres, rating, synopsis} = props;
  const {title, backdrop_path, genre_ids, vote_average} = props;
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
  const BACKDROP_SIZE = 'w1280';

  return (
    <View style={styles.carrouselContainer}>
      <Image
        style={styles.carrouselImage}
        source={{uri : IMAGE_BASE_URL + BACKDROP_SIZE + backdrop_path}}
      />
      <View style={styles.carrouselInfoContainer}>
        <Text style={[styles.carrouselText, styles.carrouselTitle]}>{ title }</Text>
        <View style={styles.carrouselRatingContainer}>
          <Icon name="star" size={20} color="#FBAF0C" />
          <Text style={[styles.carrouselText, styles.carrouselRating]}>{ vote_average }</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  carrouselContainer: {
    position: 'relative'
  },
  carrouselImage: {
    // height: 500,
    // width: (Dimensions.get('window').width * 75) / 100,
    // resizeMode: 'stretch',
    // borderRadius: 10,
    height: 200,
    width: (Dimensions.get('window').width * 75) / 100,
    resizeMode: 'stretch',
    borderRadius: 10
  },
  carrouselInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    // backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  carrouselText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  carrouselTitle: {
    width: '70%'
  },
  carrouselRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  carrouselRating: {
    marginLeft: 7,
    fontSize: 24
  }
});

export default CarrouselImage;
