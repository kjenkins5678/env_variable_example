import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = `&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
