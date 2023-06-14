const useMovies = () => {
    const moviesSearched: any = useState("movies", () => []);

    const movieDetail: any = useState("movieDetail", () => []);

    const searchMovies = async (movieName: string) => {
        const parsedName: string = movieName.replace(/\s/g, "+");
        const { data: movies }: any = await useFetch(`http://www.omdbapi.com/?s=${parsedName}&plot=full&apikey=52bd4aea`);
        movies.value = toRaw(movies.value);
        moviesSearched.value = movies.value.Search;
    };

    const searchMovieDetail = async (movieId: any) => {
        movieDetail.value = [];
        const { data } = await useFetch(`http://www.omdbapi.com/?i=${movieId}&plot=full&apikey=52bd4aea`);
        data.value = toRaw(data.value);
        movieDetail.value = data.value;
    };

    return {
        moviesSearched,
        movieDetail,
        searchMovies,
        searchMovieDetail
    }
};

export default useMovies;