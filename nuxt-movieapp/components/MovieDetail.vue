<template>
    <Spinner v-if="loading" />
    <section v-else class="text-white body-font overflow-hidden">
        <div class="container px-5 lg:ml-12 lg:px-1 py-5">
            <div class="lg:w-full lg:h-1/6 flex flex-wrap">
                <img :alt="movieDetail.Title"
                    class=" w-full lg:w-2/6 object-cover object-center rounded border border-black"
                    :src="movieDetail.Poster">
                <div class="lg:w-1/2  w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 class="text-4xl title-font font-medium mb-1">{{ movieDetail.Title }}</h1>
                    <h2 class="text-sm title-font text-gray-400 tracking-widest">Actores: {{ movieDetail.Actors }}</h2>
                    <h2 class="text-sm title-font text-gray-400  tracking-widest mt-2">Premios: {{ movieDetail.Awards }}
                    </h2>
                    <p class="leading-loosed lg:w-5/6 lg:mt-5">{{ movieDetail.Plot }}</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <div class="flex-col">
                            <h2>Ratings</h2>
                            <h2 v-for="ratings, i in movieDetail.Ratings" class="text-sm title-font tracking-widest mt-2">{{
                                ratings.Source + ": " + ratings.Value }} </h2>
                        </div>
                    </div>
                    <div class="flex">
                        <NuxtLink to="/"
                            class="flex ml-auto text-white font-semibold bg-amber-400 border-0 py-2 px-6 focus:outline-none hover:bg-amber-400 rounded-md">
                            Volver al inicio</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { movieDetail, searchMovieDetail } = useMovies();
const loading = ref(true)
setTimeout(() => loading.value = false, 3000)
const route = useRoute();
searchMovieDetail(route.params.id);
</script>