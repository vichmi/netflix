
const API_KEY = '24bc5a3fb7b423800881a5b9802edc93';

const requests = {
    getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    getRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    getSearched: `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=`
};

export default requests;