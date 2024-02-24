<template>
    <div class="updateContainer">
        <div class="title flex items-center">
            <svg t="1706892680090" class="icon" viewBox="0 0 1792 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="5254" width="40" height="40">
                <path
                    d="M170.666667 0h1450.666666c93.866667 0 170.666667 76.8 170.666667 170.666667v682.666666c0 93.866667-76.8 170.666667-170.666667 170.666667H170.666667c-93.866667 0-170.666667-76.8-170.666667-170.666667V170.666667C0 76.8 76.8 0 170.666667 0z"
                    fill="#FFDF1F" p-id="5255"></path>
                <path
                    d="M1450.666667 256v512h-85.333334V256h-85.333333v512h-85.333333V256h-85.333334v597.333333h426.666667V256zM682.666667 256v597.333333h341.333333V768H768V597.333333h256V512H768V341.333333h256V256H768zM341.333333 256H256v597.333333h85.333333V341.333333h170.666667v512h85.333333V256H512z"
                    p-id="5256"></path>
            </svg>
            <span class="ml-2 text-xl text-dark-900 font-bold font-serif">最近更新</span>
        </div>
        <div v-for="(item, index) in recentBlog" :key="index"
            class="blogBox mb-3  animate__delay-0.5s cursor-pointer ">

            <a-image :width="100" :src="item.coverimageurl" />
            <div class=" flex flex-col text-lg font-serif items-end justify-center " @click="handleGetDetail(item)">
                <span class="boxTitle">{{ item.title }}</span>
                <span class="text-gray-400">{{ item.lastupdatetime }}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref,onBeforeMount } from 'vue';
import {getNewPost} from "~/api/blogpost.js"
import { useRouter, } from 'vue-router'
const router = useRouter()
const handleGetDetail=(content)=>{
    const id=content.articleID
    router.push(`/article/${id}`)
}
onBeforeMount(()=>{
    getNewPost().then(res=>{
        recentBlog.value = res.data;
    })
})
const recentBlog = ref([
]);
</script>
<style scoped>
.updateContainer{
    padding: 5px;
    position: relative;
    top: 60px;
    width: 350px;
    height: 350px;
    overflow-y: scroll;

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
    @apply  rounded-xl flex justify-start items-start flex-col shadow-lg bg-light-50;
}
.updateContainer:hover{
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px !important;
}

.blogBox {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: 100px;
    background-color:rgba(255,247,237,0.3);
    @apply flex items-center justify-between  rounded-xl;
}
.blogBox:hover{
    @apply animate-pulse;
}
.boxTitle{
    @apply font-bold text-sm;
}
.boxTitle:hover{
    @apply text-red-400;
}
::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}
</style>