import { defineStore } from "pinia";

export const useMoviesStore = defineStore('AvaibleMovies', () => {
  const fetchMovies: Ref = ref([]);
  const fetchDetailMovie: Ref = ref([]);

  const searchMovies = async (movieName: string) => {
    const parsedName: string = movieName.replace(/\s/g, "+");
    const { data: movies } = await useFetch(`http://www.omdbapi.com/?s=${parsedName}&plot=full&apikey=52bd4aea`);
    movies.value = toRaw(movies.value);
    fetchMovies.value = movies.value;
  };

  const searchMovieDetail = async (movieID: string) => {
    const { data } = await useFetch(`http://www.omdbapi.com/?i=${movieID}&plot=full&apikey=52bd4aea`);
    data.value = toRaw(data.value);
    console.log(data.value, "data")
  };

  return {
    fetchMovies,
    fetchDetailMovie,
    searchMovieDetail,
    searchMovies,
  };
});