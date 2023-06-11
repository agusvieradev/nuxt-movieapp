<template>
    <div>
        <header class="drop-shadow-xl ">
            <nav class="p-1 bg-black drop-shadow-xl flex items-center justify-center ">
                <div class="flex justify-between">
                    <div class="flex justify-between items-center w-full ">
                        <span class="text-xs cursor-pointer mx-2 md:hidden block">
                            <button class="flex item-center text-white-200 hover: text-white  hover ">
                                Menu
                            </button>
                        </span>
                        <span class="text-xl px-5 cursor-pointer ">
                            <p class="font-bold text-amber-300" @click="router.push('/')">BlockNuxter</p>
                        </span>
                    </div>
                    <ul
                        class="flex md:items-center md:z-auto md:static absolute bg-black text-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                        <li class="mx-3 my-6 p-1 md:my-0">  
                            <NuxtLink class="text-sm text-bold  hover:text-amber-300 duration-500" to="/">
                                INICIO
                            </NuxtLink>
                        </li>
                        <li class="mx-3 my-6 p-1 md:my-0">
                            <NuxtLink to="/movies" class="text-sm text-bold hover:text-amber-300 duration-500 ">
                                STOCK
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="relative ml-3">
                    <div>
                        <button type="button" @click="dropMenu = !dropMenu"
                            class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span class="sr-only">Open user menu</span>
                            <img class="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="">
                        </button>
                    </div>
                    <Transition>
                        <div v-if="dropMenu"
                            class="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu" aria-orientation="vertical">
                            <a href="#" class="block px-4 py-2 text-sm text-white">Hola {{ name }}</a>
                            <a href="#" class="block px-4 py-2 text-sm text-white">Cerrar sesión</a>
                        </div>
                    </Transition>
                </div>
            </nav>
        </header>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const movieName = ref("");
const searchPlaceHolder = ref("Buscar");
const show = ref(true);
const dropMenu = ref(false);
const name = ref("");
</script>

<style scoped>
.router-link-exact-active {
    color: rgb(252 211 77);
}

.v-enter-active {
    transition: all 0.3s ease-out;
}

.v-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.2, 0.2, 1);
}

.v-enter-from,
.v-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>