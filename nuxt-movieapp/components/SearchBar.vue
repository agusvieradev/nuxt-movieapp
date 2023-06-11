<template>
    <div>
        <div
            class="flex w-auto md:items-center md:z-auto md:static absolute bg-black text-white left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
            <Icon name="heroicons-outline:search" color="white" class="ml-2" v-if="show" @click="show = !show" />
            <div class="flex items-center pr-5">
                <Transition>
                    <input type="text" class="rounded-md active:border-amber-300 text-black h-5 text-xs" v-if="!show">
                </Transition>
                <Transition>
                    <Icon name="heroicons-outline:x-mark" class="ml-2" color="white" v-if="!show" @click="show = !show" />
                </Transition>
            </div>
        </div>
    </div>
</template>