import React, { Component } from 'react';
import { SET_SELECTED_MOVIE } from 'removi/redux/types/moviesTypes';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';

import YouTube from 'react-native-youtube';

import API from 'removi/assets/src/config/api';
import MovieLayout from 'removi/assets/src/main/components/containers/MovieLayout';
import Header from 'removi/assets/src/main/components/sections/Header';

class Movie extends Component {

  constructor(props){
    super(props);
    this.state = {
      videoId: ''
    }
  }

  async componentDidMount() {
    const { movie } = this.props;
    this.setState({videoId: await API.getMovieVideo(movie.id)});
    console.log("VIDEOID ==> ", this.state.videoId); 
  }

  render() {
    const { handlePressClose, movie } = this.props;
    return (
      <MovieLayout>
        <Header>
          <TouchableOpacity onPress={() => handlePressClose()}>
            <Icon name="close" size={25} color="#fff" />
          </TouchableOpacity>
        </Header>
        <YouTube
          videoId={this.state.videoId} // The YouTube video ID
          play // control playback of video with true/false
          // fullscreen // control whether the video should play in fullscreen or inline
          // loop // control whether the video should loop when ended
          controls={0}
          rel={false}
          showinfo={true}
          // onReady={e => this.setState({ isReady: true })}
          // onChangeState={e => this.setState({ status: e.state })}
          // onChangeQuality={e => this.setState({ quality: e.quality })}
          // onError={e => this.setState({ error: e.error })}
          style={{ alignSelf: 'stretch', height: 300 }}
        />
        <Text style={styles.title}>{movie.title}</Text>
      </MovieLayout>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500'
  }
});

const mapStateToProps = (reducers) => ({
  movie: reducers.moviesReducer.selectedMovie,
});

const mapDispatchToProps = (dispatch) => ({
  handlePressClose() {
    dispatch({
      type: SET_SELECTED_MOVIE,
      payload: {
        movie: null
      }
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
