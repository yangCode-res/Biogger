<template>
    <div class="placeContainer">
        <span class="flex items-center">
            <icon :style="{ color: 'hotpink' }">
                <template #component>
                    <svg t="1708369670453" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5343" width="40" height="40">
                        <path d="M512 514m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#69B452" p-id="5344">
                        </path>
                        <path d="M512 512m-253.15 0a253.15 253.15 0 1 0 506.3 0 253.15 253.15 0 1 0-506.3 0Z" fill="#FFFFFF"
                            p-id="5345"></path>
                        <path d="M512 512m-203.07 0a203.07 203.07 0 1 0 406.14 0 203.07 203.07 0 1 0-406.14 0Z"
                            fill="#D1F0C7" p-id="5346"></path>
                        <path
                            d="M622.12 497h-91.31a24.09 24.09 0 0 0-11.46-7.92V360.22a6 6 0 0 0-6-6h-2.81a6 6 0 0 0-6 6v128.93a24.06 24.06 0 1 0 26.19 38.08h91.49a6 6 0 0 0 6-6V503a6 6 0 0 0-6.1-6z"
                            fill="#69B452" p-id="5347"></path>
                    </svg>
                </template>
            </icon>
            <span class="text-dark-50 text-xl ml-1 font-bold font-serif">归档</span>
        </span>
        <div>
            <div class="FileButton text-dark-50" :class="{ 'animate__headShake animate__animated': isHovering }"
                @mouseenter="isHovering = true" @mouseleave="isHovering = false">
                <span>
                    2024
                </span>
                <span>
                    {{ lenghtOf2024 }}篇
                </span>
            </div>

        </div>
    </div>
</template>
<script setup>
import Icon, { HomeOutlined } from '@ant-design/icons-vue';
import { ref, onBeforeMount } from 'vue';
import { getBlogByYear2024 } from "~/api/blogpost.js"
const isHovering = ref(false);
const lenghtOf2024 = ref("0")
onBeforeMount(() => {
    getBlogByYear2024().then((res) => {
        lenghtOf2024.value = res.data.length;
    })
})
</script>
<style scoped>
.placeContainer {
    position: relative;
    padding: 10px;
    top: 120px;
    width: 350px;
    height: 250px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
    @apply rounded-xl shadow-lg bg-opacity-30;
}

.placeContainer:hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px !important;
}

.FileButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    border-radius: 10px;
    background-color: rgba(155, 156, 156, 0.5);
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
}</style>