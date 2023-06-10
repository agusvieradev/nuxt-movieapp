<template>
    <div class="detail">
        Detail of {{ id }}
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const {id} = route.params
    definePageMeta({
        layout:'home-layout'
    })
</script>