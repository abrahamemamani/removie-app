import React, { Component } from 'react';
import {
  FlatList,
  View,
  StyleSheet
} from 'react-native';

import { SET_SELECTED_MOVIE } from 'removi/redux/types/moviesTypes';
import Layout from 'removi/assets/src/main/layouts/SuggestionsListLayout';
import Empty from 'removi/assets/src/main/components/Empty';
import Suggestion from 'removi/assets/src/main/layouts/Suggestion';
import { connect } from 'react-redux';

class SuggestionsList extends Component {

  renderEmpty = () => <Empty msg="No hay sugerencias" />
  keyExtractor = (item) => item.id.toString();


  renderItem = (item, allGenres) => (
    <Suggestion
      {...item}
      allGenres={allGenres}
      onPress={() => this.props.viewMovie(item)}
    />
  );
  
  render = () => {
    const {moviesPopular, allGenres} = this.props;
    return (
      <View style={styles.container}>
        <Layout
          title="Recomendadas para ti"
          >
          <FlatList
            data={moviesPopular}
            ListEmptyComponent={this.renderEmpty}
            renderItem={({item}) => this.renderItem(item, allGenres)}
            keyExtractor={this.keyExtractor}
          />
        </Layout>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
});

const mapStateToProps = reducers => (
  reducers.moviesReducer
);

const mapDispatchToProps = (dispatch) => ({
  viewMovie(item) {
    dispatch({
      type: SET_SELECTED_MOVIE,
      payload: {
        movie: item
      }
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionsList);
