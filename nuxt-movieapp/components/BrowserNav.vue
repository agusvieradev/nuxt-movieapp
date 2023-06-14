<template>
    <div class="sticky top-0 z-10">
        <header class="drop-shadow-xl ">
            <nav class="p-1 bg-gray-900 md:bg-black drop-shadow-xl flex items-center justify-center ">

                <div class="flex justify-between items-center w-full ">
                    <span class="flex justify-between items-center w-52 text-xl px-5 cursor-pointer ">
                        <p class="font-bold text-amber-300">BlockNuxter</p>
                        <NuxtLink
                            class="text-lg ml-5 text-white md:my-0 text-sm font-bold hover:text-amber-300 duration-500 opacity-0 md:opacity-100"
                            to="/">
                            Inicio
                        </NuxtLink>
                    </span>
                </div>
                <div class="relative mr-6">
                    <div>
                        <button type="button" @click="dropMenu = !dropMenu"
                            class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <img class="h-8 w-8 rounded-full"
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=826&t=st=1686700484~exp=1686701084~hmac=3362733ae1f0240a65341d33e84de445de72528b46f2cca9e63fcbb4cf294141"
                                alt="">
                        </button>
                    </div>

                    <div v-if="dropMenu"
                        class="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                        role="menu" aria-orientation="vertical">
                        <button href="#" class="block px-4 py-2 text-sm text-white" @click.default="logout">
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script setup lang="ts">

const dropMenu: Ref<boolean> = ref(false);
const name: Ref<string> = ref("");
const { logout } = useAuth();
</script>
