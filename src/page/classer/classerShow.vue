<template>
    <div class="placeContainer">
        <div class="bgContainer">
            <div class="categoryParent">
            <div class="text-lg font-bold ml-1"><svg t="1707074108584" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="7395" width="28" height="28">
                    <path
                        d="M886.951936 438.203392c-63.514624 63.514624-166.499328 63.514624-230.013952 0l-63.895552-63.900672c-63.519744-63.514624-63.519744-166.494208 0-230.013952l63.895552-63.895552c63.515648-63.514624 166.499328-63.514624 230.013952 0l63.895552 63.895552c63.519744 63.519744 63.519744 166.499328 0 230.013952L886.951936 438.203392z"
                        fill="#FF9000" p-id="7396"></path>
                    <path
                        d="M444.669952 304.477184c0 89.827328-72.81664 162.644992-162.644992 162.644992l-90.361856 0c-89.827328 0-162.644992-72.81664-162.644992-162.644992l0-90.361856c0-89.827328 72.81664-162.644992 162.644992-162.644992l90.361856 0c89.827328 0 162.644992 72.81664 162.644992 162.644992L444.669952 304.477184z"
                        fill="#FF9000" p-id="7397"></path>
                    <path
                        d="M979.771392 828.194816c0 89.822208-72.81664 162.644992-162.644992 162.644992l-90.361856 0c-89.827328 0-162.644992-72.82176-162.644992-162.644992l0-90.366976c0-89.822208 72.81664-162.644992 162.644992-162.644992l90.361856 0c89.827328 0 162.644992 72.82176 162.644992 162.644992L979.771392 828.194816z"
                        fill="#FF9000" p-id="7398"></path>
                    <path
                        d="M444.669952 828.194816c0 89.822208-72.81664 162.644992-162.644992 162.644992l-90.361856 0c-89.827328 0-162.644992-72.82176-162.644992-162.644992l0-90.366976c0-89.822208 72.81664-162.644992 162.644992-162.644992l90.361856 0c89.827328 0 162.644992 72.82176 162.644992 162.644992L444.669952 828.194816z"
                        fill="#FF9000" p-id="7399"></path>
                </svg></div>
            <div class="subClasser">
                <div v-for="(item, index) in subCategoryList "
                    class="subcategoryBox ml-6 flex items-center text-lg font-bold" @click="handleToClasser(item[0])" :class="{active :item[0]===subcategory}">
                    <span class="  ml-3">{{ item[0] }}<sup>{{ item[1] }}</sup></span>
                </div>

            </div>
            <div class="text-lg font-bold mr-1">更多</div>
        </div>
        <span class="text-3xl flex justify-start font-bold paperTitle items-center">分类 - {{ subcategory }}</span>
        <div class="postContainer">
            <div v-for="(content,index) in postList" :key="index" class="postBox">
                <a-image :width="200" :height="140" :preview="false" class="rounded-xl"
                :src="content.coverimageurl" />
                
                <span class="postTitle" @click="handleGetDetail(content)">{{content.title}}</span>
                <div class="categoryBox">
                    <svg t="1707074108584" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="7395" width="20" height="20">
                    <path
                        d="M886.951936 438.203392c-63.514624 63.514624-166.499328 63.514624-230.013952 0l-63.895552-63.900672c-63.519744-63.514624-63.519744-166.494208 0-230.013952l63.895552-63.895552c63.515648-63.514624 166.499328-63.514624 230.013952 0l63.895552 63.895552c63.519744 63.519744 63.519744 166.499328 0 230.013952L886.951936 438.203392z"
                        fill="#FF9000" p-id="7396"></path>
                    <path
                        d="M444.669952 304.477184c0 89.827328-72.81664 162.644992-162.644992 162.644992l-90.361856 0c-89.827328 0-162.644992-72.81664-162.644992-162.644992l0-90.361856c0-89.827328 72.81664-162.644992 162.644992-162.644992l90.361856 0c89.827328 0 162.644992 72.81664 162.644992 162.644992L444.669952 304.477184z"
                        fill="#FF9000" p-id="7397"></path>
                    <path
                        d="M979.771392 828.194816c0 89.822208-72.81664 162.644992-162.644992 162.644992l-90.361856 0c-89.827328 0-162.644992-72.82176-162.644992-162.644992l0-90.366976c0-89.822208 72.81664-162.644992 162.644992-162.644992l90.361856 0c89.827328 0 162.644992 72.82176 162.644992 162.644992L979.771392 828.194816z"
                        fill="#FF9000" p-id="7398"></path>
                    <path
                        d="M444.669952 828.194816c0 89.822208-72.81664 162.644992-162.644992 162.644992l-90.361856 0c-89.827328 0-162.644992-72.82176-162.644992-162.644992l0-90.366976c0-89.822208 72.81664-162.644992 162.644992-162.644992l90.361856 0c89.827328 0 162.644992 72.82176 162.644992 162.644992L444.669952 828.194816z"
                        fill="#FF9000" p-id="7399"></path>
                </svg>
                    <span class="ml-2">{{ content.category }}</span>
                <a-divider type="vertical" style="height: 20px; background-color: #7cb305" />
                <svg t="1707074187095" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="7552" width="28" height="28">
                    <path
                        d="M51.2 512c0 254.976 205.824 460.8 460.8 460.8s460.8-205.824 460.8-460.8S766.976 51.2 512 51.2 51.2 257.024 51.2 512z"
                        fill="#FFF0F0" p-id="7553"></path>
                    <path
                        d="M448.512 328.704H342.016c-19.456 0-34.816 15.36-34.816 34.816v105.472c0 19.456 15.36 34.816 34.816 34.816h105.472c19.456 0 34.816-15.36 34.816-34.816V364.544c1.024-19.456-14.336-35.84-33.792-35.84M706.56 392.192L631.808 317.44c-13.312-13.312-35.84-13.312-50.176 0l-10.24 10.24-64.512 64.512c-6.144 6.144-10.24 15.36-10.24 24.576 0 9.216 4.096 18.432 10.24 24.576l10.24 10.24 54.272 54.272 10.24 10.24c13.312 13.312 35.84 13.312 50.176 0l64.512-64.512 10.24-10.24c13.312-13.312 13.312-34.816 0-49.152M448.512 540.672H342.016c-19.456 0-34.816 15.36-34.816 34.816v105.472c0 19.456 15.36 34.816 34.816 34.816h105.472c19.456 0 34.816-15.36 34.816-34.816V575.488c1.024-19.456-14.336-34.816-33.792-34.816m210.944 0H553.984c-19.456 0-34.816 15.36-34.816 34.816v105.472c0 19.456 15.36 34.816 34.816 34.816h105.472c19.456 0 34.816-15.36 34.816-34.816V575.488c1.024-19.456-15.36-34.816-34.816-34.816"
                        fill="#F78FBA" p-id="7554"></path>
                </svg>
                <span class="ml-1">{{ content.subcategory }}</span>
                </div>
                <span class="text-blue-gray-500 text-5xl font-serif font-semibold indexNumber">
                    {{ index+1 }}
                </span>
                <span class="updateTime text-xl font-bold text-blue-gray-500">
                    {{ content.creationtime }}
                </span>
            </div>

        </div>
        </div>
        

    </div>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import { getSubCategories,getBlogPostBySubCategory } from "~/api/blogpost.js"
import {
    TagOutlined,
} from '@ant-design/icons-vue';
import { useRouter, } from 'vue-router'
const props = defineProps({
    subcategory: String,
})

const router = useRouter()
const subCategoryList = ref([])
const postList=ref([])
const handleToClasser = (subcategory) => {
    router.push(`/classer/${subcategory}`)
    getBlogPostBySubCategory(props.subcategory).then((res) => {
        postList.value = res.data
        console.log(res.data);
    })
}
const handleGetDetail=(content)=>{
    const id=content.articleID
    router.push(`/article/${id}`)
console.log(content);
}
onBeforeMount(() => {
    getSubCategories().then((res) => {
        subCategoryList.value = res.data
        console.log(res.data);
    })
    getBlogPostBySubCategory(props.subcategory).then((res) => {
        postList.value = res.data
        console.log(res.data);
    })
})
</script>
<style scoped>
.updateTime{
    position: absolute;
    bottom: 5px;
    right: 5px;
    /* color: rgba(188,196,178); */
}
.indexNumber{
    position: absolute;
    top: 5px;
    right: 5px;
}
.categoryBox{
    position: absolute;
    top: 55%;
    left: 38%;
    @apply flex items-center font-bold;
}
.postTitle{
    position: absolute;
    top: 30%;
    left: 38%;
    -webkit-transition: all .3s ease-in-out;
    @apply text-xl font-bold;
}
.postTitle:hover{
    color: #d42828;
}

.postContainer{
    padding-left: 50px;
    padding-right: 50px;
    width: 100%;
    position: absolute;
    top: 25%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 50px;
}
.postBox{
    position: relative;
    padding: 5px;
    width: 600px;
    height: 150px;
    overflow: hidden;
    background-color: rgba(242,207,172,0.6);
    --tw-bg-opacity: 0.05;
    @apply flex items-start justify-start rounded-xl cursor-pointer bg-opacity-0;
}
.paperTitle{
    position: absolute;
    left: 5%;
    top: 10%;
}
.paperList{
    position: absolute;
    top: 13%;
    @apply items-center justify-start;
}
.categoryParent {
    position: absolute;
    width: 90%;
    height: 50px;
    border: 3px solid #777777;
    top: 3%;
    border-radius: 10px;
    @apply flex items-center justify-between;
}

.title {
    position: absolute;
    top: 2%;
    @apply text-4xl font-bold;
}

.subcategoryBox {
    padding: 2px;
    user-select: none; /* 禁止文本选择 */
    width: auto;
    @apply cursor-pointer flex items-center justify-center;
}
.subcategoryBox:hover{
    width: auto;
    @apply bg-rose-200 rounded-xl;
}
.subcategoryBox.active {
    @apply bg-green-200 rounded-xl;
}

.subClasser {
    padding-left: 10px;
    height: 60px;
    border-radius: 10px;
    @apply flex items-center justify-center;
}

.placeContainer {
    
}
.bgContainer{
    position: relative;
    padding: 20px;
    left: 20%;
    margin-top: 50px;
    margin-bottom: 20px;
    width: 60%;
    min-height: 90vh;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 3px solid #fff;
    background-color: rgba(255, 255, 255, 0.9);
    @apply flex items-center justify-center rounded-xl;
}
.placeContainer::before{
    content: "";
    /* position: absolute; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('~/assets/3gbizhi.png');
    background-size: cover;
    background-position: center bottom;
    background-attachment: fixed;
    z-index: 0;
}
::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}
</style>