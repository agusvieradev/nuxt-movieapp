<template>
    <div>
        <form class="mt-6 p-5 md:px-20">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Icon name="heroicons-outline:search" class="w-3 h-3 lg:w-5 lg:h-5 text-gray-500 dark:text-gray-400">
                    </Icon>
                </div>
                <input @keyup.enter="searchMovies(searchBarText)" v-model="searchBarText"
                    class="block w-full p-2 lg:p-4 pl-8 lg:pl-10 text-sm text-gray-900  placeholder:text-sm rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escribe un titulo para buscar peliculas disponibles">
                <button @click.prevent="searchMovies(searchBarText)"
                    class="text-white absolute right-2.5 bottom-2.5 bg-amber-400 hover:bg-amber-500 text-md font-bold rounded-md text-sm px-4 py-2  hidden  lg:block ">Buscar</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
const { searchMovies } = useMovies();
const searchBarText: Ref<string> = ref("");
</script>