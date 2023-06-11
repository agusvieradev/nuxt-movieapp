import { defineStore } from "pinia";

export const useMoviesStore = defineStore('AvaibleMovies', () => {
    const fetchMovies = ref([])
    const avaibleMovies = ref([]);
    const searchMovies = (movieName: string) => {
        
    }
    const filteredItems = computed(() => {
        //return items.filter(item => item.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
      });
})