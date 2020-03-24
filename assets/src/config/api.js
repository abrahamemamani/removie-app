import axios from 'axios';


// const BASE_API = 'https://yts.lt/api/v2/';

//https://api.themoviedb.org/3/movie/550?api_key=85385dc4bb5461585164b0571e3a16a7
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '85385dc4bb5461585164b0571e3a16a7';
const API_NOW_PLAYING = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;
const API_POPULAR = `${API_URL}movie/popular?api_key=${API_KEY}&language=es-ES&page=1`;
// https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
const API_GENRES = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=es-ES`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// Sizes: w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w200';

// const video = `${API_URL}movie/454626/videos?api_key=${API_KEY}&language=es-ES`;


class Api {
  constructor(){
    // this.getAllGenres()
  }

  getNowPlaying = async () => {
    try{
      const {data} = await axios.get(API_NOW_PLAYING);
      results = data.results.filter((item) => item.vote_average >= 7 && item.vote_average < 8 );
      return results;
    }
    catch(error){
      console.log(error);
    }
  }
  
  getPopular = async () => {
    try {
      const {data} = await axios.get(API_POPULAR);
      return data.results;
    }
    catch(error){
      console.log(error);
    }
  }

  getAllGenres = async () => {
    try {
      const {data} = await axios.get(API_GENRES);
      return data.genres;
    }
    catch(error){
      console.log(error);
    }
  }

  getMovieVideo = async (id) => {
    try{
      const uri = `${API_URL}movie/${id}/videos?api_key=${API_KEY}&language=es-ES`;
      const {data} = await axios.get(uri);
      return data.results[0].key;
    }
    catch(error){

    }
  }
}

export default new Api();