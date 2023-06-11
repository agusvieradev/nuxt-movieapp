<template>
    <div class=" w-72 p-1 shadow-lg mt-10  bg-transparent md:bg-white md:p-5 lg:p-6 md:w-80 rounded-md lg:w-96 md:mt-20">
        <h1 class="text-2xl md:text-3xl block font-bold text-white md:text-black ">
            Iniciar sesión
        </h1>
        <div class="mt-3">
            <label for="username" class="text-md md:text-xl block text-base mb-1 text-white md:text-black">
                Dirección de e-mail
            </label>
            <input type="email" v-model="email"
                class="border w-full text-base text-black px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
        </div>
        <div class="mt-3">
            <label for="password" class="text-md md:text-xl block text-base mb-1 text-white md:text-black">
                Contraseña
            </label>
            <input v-if="hidePassword" v-model="password" type="password"
                class="border w-full text-base text-black px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
            <input v-else v-model="password" type="text"
                class="border w-full text-base text-black px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
        </div>
        <div class="mt-3 flex justify-between items-center">
            <div>
                <input type="checkbox" @click="hidePassword = !hidePassword">
                <label class="text-md md:text-lg text-white md:text-black">
                    Mostrar contraseña
                </label>
            </div>
        </div>
        <div class="mt-5">
            <button type="submit"
                class=" py-1 w-full rounded-md bg-amber-400 text-white font-semibold border-none active:bg-white md:active:bg-transparent active:text-amber-400">
                INGRESAR
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
const hidePassword = ref(true);
const password = ref("");
const email = ref("")
</script>