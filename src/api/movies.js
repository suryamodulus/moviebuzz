import axios from "axios";
import { API_BASE_URL, API_KEY } from "config";

export const getPopularMovies = async (page) => {
  const response = await axios.get(
    `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
  );
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(
    `${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};
