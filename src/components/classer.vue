<template>
    <div class="classerContainer">
        <div >
            <a-row>
                <a-col :span="6">
                    <div class="flex items-center">
                        <svg t="1707056989034" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4326" width="38" height="38">
                        <path
                            d="M886.951936 438.203392c-63.514624 63.514624-166.499328 63.514624-230.013952 0l-63.895552-63.900672c-63.519744-63.514624-63.519744-166.494208 0-230.013952l63.895552-63.895552c63.515648-63.514624 166.499328-63.514624 230.013952 0l63.895552 63.895552c63.519744 63.519744 63.519744 166.499328 0 230.013952L886.951936 438.203392z"
                            fill="#FF9000" p-id="4327"></path>
                        <path
                            d="M444.669952 304.477184c0 89.827328-72.81664 162.644992-162.644992 162.644992l-90.361856 0c-89.827328 0-162.644992-72.81664-162.644992-162.644992l0-90.361856c0-89.827328 72.81664-162.644992 162.644992-162.644992l90.361856 0c89.827328 0 162.644992 72.81664 162.644992 162.644992L444.669952 304.477184z"
                            fill="#FF9000" p-id="4328"></path>
                        <path
                            d="M979.771392 828.194816c0 89.822208-72.81664 162.644992-162.644992 162.644992l-90.361856 0c-89.827328 0-162.644992-72.82176-162.644992-162.644992l0-90.366976c0-89.822208 72.81664-162.644992 162.644992-162.644992l90.361856 0c89.827328 0 162.644992 72.82176 162.644992 162.644992L979.771392 828.194816z"
                            fill="#FF9000" p-id="4329"></path>
                        <path
                            d="M444.669952 828.194816c0 89.822208-72.81664 162.644992-162.644992 162.644992l-90.361856 0c-89.827328 0-162.644992-72.82176-162.644992-162.644992l0-90.366976c0-89.822208 72.81664-162.644992 162.644992-162.644992l90.361856 0c89.827328 0 162.644992 72.82176 162.644992 162.644992L444.669952 828.194816z"
                            fill="#FF9000" p-id="4330"></path>
                    </svg>
                    </div>
                    
                </a-col>
                <a-col :span="12" class="flex items-center">
                <div class="flex items-center text-xl font-bold justify-around classerTitle">
                    <span class="titleBox" @click="goToHome" :class="{active:isActive==='首页' }">
                        首页
                    </span>
                    <span class="titleBox" @click="handleGetCategory('前端')" :class="{active:isActive==='前端' }">
                        前端
                    </span>
                    <span class="titleBox" @click="handleGetCategory('后端')" :class="{active:isActive==='后端' }">
                        后端
                    </span>
                    <span class="titleBox" @click="handleGetCategory('机器学习')" :class="{active:isActive==='机器学习' }">
                        机器学习
                    </span>
                </div>
                </a-col>
                <a-col :span="6" class="flex items-center justify-end">
                    <div class="flex items-center text-xl font-bold justify-end mr-2">
                    <span>
                        更多
                    </span>
                </div>
            </a-col>
            </a-row>
        </div>




    </div>
</template>
<script setup>
import {ref} from "vue"
import {getBlogByCategory} from "~/api/blogpost.js"
import { useRouter, } from 'vue-router'
const isActive=ref("首页")
const emit=defineEmits(['changeCategory'])
const router = useRouter()
const handleGetCategory = (category) => {
    isActive.value=category
    console.log(isActive.value);
    emit("changeCategory", category)
}
const goToHome=() => {
    isActive.value="首页"
    emit("changeCategory")
    router.push("/")
}

</script>
<style scoped>
.classerTitle{
    width: 100%;
}
.titleBox{
    width: 85px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.active{
    @apply bg-sky-400 rounded-xl cursor-pointer;
}
.titleBox:hover {
    @apply bg-sky-400 rounded-xl cursor-pointer;

}
.classerContainer {
    padding-top: 18px;
    position: relative;
    top: 20px;
    padding-left: 10px;
    width: 90%;
    height: 70px;
    border: 2px dashed #eaecef;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 15px 0px !important;
    /* box-shadow: 2px  2px 4px rgba(0, 0, 0, 0.1); */
    /* background: linear-gradient(45deg,#ace0f9,#fff1eb); */
    /* background-color: rgba(234,237,242,0.8);; */
    /* 浅灰色，50% 透明度 */
    @apply rounded-xl mb-3 ;
}
</style>