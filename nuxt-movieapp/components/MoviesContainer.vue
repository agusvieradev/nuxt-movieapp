<template>
      <div v-if="moviesResult" class="flex flex-wrap  justify-center relative z-0 bg-grey-900 ">
            <div v-for="movie in moviesResult" :key="movie.imdbID">
                  <MovieCard :movie="movie" />
            </div>
      </div>
      <div v-if="notFound" class="flex flex-wrap  h-full items-center justify-center relative z-0 bg-grey-900 ">
            <h1 class="text-sm md:text-2xl text-white font-semibold text-center mt-16 md:mt-10 lg:mt-8 px-3 md:px-12">{{
                  notFound }}</h1>
      </div>
</template>

<script setup lang="ts">
const { moviesSearched } = useMovies();
const showMovies: Ref = ref(false);
const movieList: Ref = ref();
const notFound: Ref = ref("");
const moviesResult: any = computed(() => {
      watch(moviesSearched, (newVal: any, oldVal: any) => {
            if (newVal != undefined) {
                  notFound.value = "";
                  showMovies.value = true;
                  movieList.value = newVal;
            } else {
                  movieList.value = []
                  notFound.value = "Parece que no hay peliculas disponibles con ese nombre";
            }
      })
      return movieList.value;
});

</script>