<template>
    <SearchBar />
    <MoviesContainer />
</template>

<script setup lang="ts">

definePageMeta({
    middleware: "authenticated"
});

</script>
