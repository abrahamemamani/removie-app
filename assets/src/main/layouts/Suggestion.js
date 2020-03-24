import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Suggestion = (props) => {
  // const {title, medium_cover_image, genres, rating, synopsis} = props;
  const {title, poster_path, genre_ids, vote_average, overview} = props;
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
  const POSTER_SIZE = 'w200';

  const getGenreName = (id) => {
    const { allGenres } = props;
    return allGenres.filter((item) => item.id === id )[0].name;
  }
  
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.suggestion}>
        <View style={styles.suggestionBackground}>
          <View style={styles.suggestionWrapperImage}>
            <Image 
              style={styles.suggestionImage}
              source={{uri: IMAGE_BASE_URL + POSTER_SIZE + poster_path}}
            />
          </View>
          <View style={styles.suggestionInfoContainer}>
            <View style={styles.suggestionInfo}>
              <Text numberOfLines={1} style={styles.suggestionTitle}>{ title }</Text>
              <Text numberOfLines={3} style={[styles.suggestionText, styles.suggestionSynopsis]}>{ overview }</Text>
              <View style={styles.suggestionRatingContainer}>
                <Icon name="star" size={12} color="#FBAF0C" />
                <Text style={[styles.suggestionText, styles.suggestionRating]}>{ vote_average }</Text>
              </View>
              <Text style={[styles.suggestionText, styles.suggestionGenre]}>{ getGenreName(genre_ids[0]) }</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  suggestionBackground: {
    position: 'relative',
    backgroundColor: '#121623', //'#131930', //'#141831',
    height: 160,
    borderRadius: 8,
    marginTop: 40,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  suggestionWrapperImage: {
  },
  suggestionImage: {
    position: 'absolute',
    left: 3,
    top: -35,
    height: 165,
    width: 115,
    resizeMode: 'stretch',
    borderRadius: 3,
  },
  suggestionInfoContainer: {
    alignSelf: 'flex-end',
    alignContent: 'center',
    justifyContent: "center",
    alignItems: 'center'
  },
  suggestionInfo: {
    width: (Dimensions.get('window').width - 180),
    justifyContent: 'space-evenly',
    
  },
  suggestionTitle: {
    color: '#C5CAD9',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5
  },
  suggestionText: {
    color: '#555C75' // "#2F3F66"
  },
  suggestionRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2
  },
  suggestionRating: {
    color: '#C5CAD9',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 5
  },
  suggestionGenre: {
    // borderWidth: 1,
    // borderColor: '#555C75', //'#2F3F66',
    borderRadius: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#212031',
    color: '#D4D2D9',
    marginTop: 3
  },
  suggestionSynopsis: {
    fontSize: 15,
    marginVertical: 5
  }
});

export default Suggestion
