<template>
    <div>
        <header class="drop-shadow-xl ">
            <nav class="p-1 bg-black drop-shadow-xl flex items-center justify-between ">
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
                                PELICULAS
                            </NuxtLink>
                        </li>
                        <li class="mx-3 my-6 p-1 md:my-0">
                            <NuxtLink to="/series" class="text-sm text-bold hover:text-amber-300 duration-500">
                                SERIES
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <div
                        class="flex w-auto md:items-center md:z-auto md:static absolute bg-black text-white left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                        <Icon name="heroicons-outline:search" color="white" class="ml-2" v-if="show"
                            @click="show = !show" />
                        <div class="flex items-center pr-5">
                            <Transition>
                                <input type="text" class="rounded-md active:border-amber-300 text-black h-5 text-xs"
                                    v-if="!show">
                            </Transition>
                            <Transition>
                                <Icon name="heroicons-outline:x-mark" class="ml-2" color="white" v-if="!show"
                                    @click="show = !show" />
                            </Transition>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const movieName = ref();
const searchPlaceHolder = ref("Buscar");
const show = ref(true);
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