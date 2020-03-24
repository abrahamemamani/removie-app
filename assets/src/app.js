import React, { Component } from 'react';
// import { Text, View } from 'react-native';

import { connect } from 'react-redux';
import {SET_MOVIES_NOW_PLAYING, SET_MOVIES_POPULAR, SET_ALL_GENRES} from 'removi/redux/types/moviesTypes';

import API from 'removi/assets/src/config/api';
import Home from 'removi/assets/src/main/screens/Home';
import Header from 'removi/assets/src/main/components/sections/Header';
import SuggestionsList from 'removi/assets/src/main/components/containers/SuggestionsList';
import CarrouselList from 'removi/assets/src/main/components/containers/CarrouselList';
import Movie from 'removi/assets/src/main/screens/Movie';
import Search from 'removi/assets/src/main/components/Search';

class AppLayout extends Component {
  async componentDidMount() {
    const allGenres = await API.getAllGenres();
    this.props.dispatch({
      type: SET_ALL_GENRES,
      payload: allGenres
    });

    const moviesNowPlaying = await API.getNowPlaying();
    this.props.dispatch({
      type: SET_MOVIES_NOW_PLAYING,
      payload: moviesNowPlaying
    });

    const moviesPopular = await API.getPopular();
    this.props.dispatch({
      type: SET_MOVIES_POPULAR,
      payload: moviesPopular
    });
  }

  render() {
    const { selectedMovie } = this.props;
    return (
      <>
      {
        (selectedMovie)
        ? <Movie /> 
        : <Home>
            <Header />
            <Search />
            {/* <Button title="Go to Categories" onPress={() => this.handlePress()} /> */}
            <CarrouselList />
            <SuggestionsList />
          </Home>
        }
      </>
    )
  }
}

const mapStateToProps = reducers => ({
  selectedMovie: reducers.moviesReducer.selectedMovie,
  // allGenres: reducers.moviesReducer.allGenres
});

export default connect(mapStateToProps)(AppLayout);
