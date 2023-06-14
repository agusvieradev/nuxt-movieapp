<template>
    <div
        class="group w-32 h-48 md:w-64 lg:w-72  xl:w-80 relative cursor-pointer  m-3 lg:mt-9 rounded-md overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class="bg-contain relative">
            <img class="w-full transition-transform duration-500  group-hover:scale-125" :src="cardImg" :alt="cardTitle" />
        </div>
        <div
            class="absolute inset-0 w-32 h-48 md:w-64 lg:w-72  xl:w-80 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/50">
        </div>
        <div
            class="absolute inset-0 flex translate-y-[60%] flex-col mb-2 px-9 items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class="text-xs md:text-xl  w-32 md:w-64 lg:w-full font-black md:font-bold text-white">{{ cardTitle }}</h1>
            <div class="flex-col w-32 md:w-full mt-1 md:mt-6">
                <p
                    class="mb-1 text-xs md:text-lg text-start italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {{ cardInformation }}</p>
                <div class="flex items-center  mt-3 ">
                    <NuxtLink :to='toMovieDetail'
                        class="rounded-md bg-amber-400 py-2 mr-3 md:mr-5 w-16 md:w-28 font-com text-xs md:text-lg font-bold capitalize text-white shadow shadow-black/60 hover:bg-amber-500"
                        title="Ver más información de esta pelicula">
                        Más info
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ movie: any }>();
const movie: any = props.movie;
const cardTitle: string = movie.Title;
const cardImg: string = movie.Poster;
const cardInformation: string = `Año: ${movie.Year}`;
const toMovieDetail: string = `/detail/${movie.imdbID}`
</script>
