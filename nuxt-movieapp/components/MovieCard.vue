<template>
    <div
        class="group w-72 md:w-96 h-40 md:h-52 relative cursor-pointer  m-2 rounded-md overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class=" bg-cover relative">
            <img class=" w-72 md:w-96 h-40 md:h-52 transition-transform duration-500  group-hover:scale-125"
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="" />
        </div>
        <div
            class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/50">
        </div>
        <div
            class="absolute inset-0 flex translate-y-[60%] flex-col mb-2 px-9 items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class="text-2xl font-bold text-white">{{ cardName }}</h1>
            <div class="flex-col w-full">
                <p
                    class="mb-1 text-lg text-start italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {{ cardInformation }}</p>
                <div class="flex items-center mt-3">
                    <button
                        class="rounded-md bg-amber-400 py-2 mr-5 w-28 font-com  text-sm capitalize text-white shadow shadow-black/60 hover:bg-amber-500"
                        title="Ver más información de esta pelicula">
                        Más info
                    </button>
                    <button
                        class="flex items-center justify-center rounded-full h-8 w-8  bg-white hover:bg-amber-400 hover:text-white "
                        title="Agregar a disponibles">
                        <Icon name="heroicons-outline:plus"></Icon>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
let cardInformation: string = "sdasdasdasdasdasdasdasdasd"
let cardName: string = "La peli"
</script>