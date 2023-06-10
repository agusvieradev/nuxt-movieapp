<template>
    <div
        class="group w-72 h-36 relative cursor-pointer m-2 rounded-md overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class=" bg-cover">
            <img class=" w-72 h-36  transition-transform duration-500  group-hover:scale-125"
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="" />
        </div>
        <div
            class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/50">
        </div>
        <div
            class="absolute inset-0 flex translate-y-[60%] flex-col mb-2 px-9 items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class="text-2xl font-bold text-white">{{cardName}}</h1>
            <p class="mb-1 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {{ cardInformation }}</p>
            <button
                class="rounded-md bg-amber-400 py-2 w-28 font-com  text-sm capitalize text-white shadow shadow-black/60 hover:bg-amber-500">
                Más info
                <Icon name="heroicons-outline:plus"></Icon>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
let cardInformation: string = "sdasdasdasdasdasdasdasdasd"
let cardName: string = "La peli"
</script>