import {
  SET_MOVIES_NOW_PLAYING,
  SET_MOVIES_POPULAR, 
  SET_SELECTED_MOVIE, 
  SET_ALL_GENRES
} from '../types/moviesTypes';

const initialState = {
  appName: "Removi",
  moviesPopular: [],
  moviesNowPlaying: [],
  allGenres: []
};

export default (state = initialState, action) => {
  switch(action.type){
    case SET_MOVIES_NOW_PLAYING:
      return {...state, moviesNowPlaying: [...action.payload]};
    case SET_MOVIES_POPULAR:
      return {...state, moviesPopular: [...action.payload]};
    case SET_SELECTED_MOVIE:
      return {...state, selectedMovie: action.payload.movie};
    case SET_ALL_GENRES:
      return {...state, allGenres: [...action.payload]}
    default: return state;
  }
}