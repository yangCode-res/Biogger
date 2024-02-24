<template>
    <div class="paperContainer" @mouseover="mouseOverHandler" @mouseleave="mouseLeaveHandler">
        <div class="imageContainer">
            <a-image :width="360" :height="360" :preview="false" class="rounded-xl"
                :src="content.coverimageurl" />
        </div>
        <div class="titleContainer flex items-center justify-center" @click="handleGetDetail(content)">
                <p class="text-dark-500 text-2xl font-bold mb-4  titleP font-serif"> {{ content.title }}</p>
            <div class="text-gray-600 text-lg flex items-center  mb-2">
                <svg t="1707073823803" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="5334" width="22" height="22">
                    <path
                        d="M896 85.333333C299.008 85.333333 184.661333 605.013333 137.344 882.688l-2.346667 13.866667a36.138667 36.138667 0 0 0 35.626667 42.112h8.917333a42.666667 42.666667 0 0 0 41.344-32.128c1.877333-7.381333 3.584-13.525333 5.034667-18.304 34.218667-110.378667 101.12-171.776 200.746667-184.234667 170.666667-21.333333 298.666667-170.666667 341.333333-298.666667l-64-42.666666 42.666667-42.666667c42.666667-42.666667 85.504-106.666667 149.333333-234.666667z"
                        fill="#F64E54" p-id="5335"></path>
                </svg>
                <span class="ml-2 font-sans font-semibold text-rose-400">发表于{{ content.creationtime }}</span>
                
            </div>
            <div class="text-gray-600 text-lg flex items-center mb-2" >
                <svg t="1707073918752" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="6332" width="18" height="18">
                    <path
                        d="M705.536 328.544c-314.56-271.744-641.056 51.2-641.056 51.2 352-603.84 772.192-160 772.192-160l121.92-115.52v407.104H554.272zM318.912 695.008c314.496 271.648 641.056-51.2 641.056-51.2-352 603.808-772.192 160-772.192 160L64 919.392V548.704h406.208z m0 0"
                        fill="#0590DF" p-id="6333"></path>
                </svg>
                <span class="ml-2 font-sans font-semibold text-green-500">更新于{{ content.lastupdatetime }}</span>
            </div>
            <div class="text-gray-600 text-lg flex items-center font-bold mb-2 colo3">
                <svg t="1707074108584" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="7395" width="18" height="18">
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
                <span class="ml-1 mr-2">{{ content.category }}</span>
                <a-divider type="vertical" style="height: 20px; background-color: #7cb305" />
                <svg t="1707074187095" class="icon " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="7552" width="28" height="28">
                    <path
                        d="M51.2 512c0 254.976 205.824 460.8 460.8 460.8s460.8-205.824 460.8-460.8S766.976 51.2 512 51.2 51.2 257.024 51.2 512z"
                        fill="#FFF0F0" p-id="7553"></path>
                    <path
                        d="M448.512 328.704H342.016c-19.456 0-34.816 15.36-34.816 34.816v105.472c0 19.456 15.36 34.816 34.816 34.816h105.472c19.456 0 34.816-15.36 34.816-34.816V364.544c1.024-19.456-14.336-35.84-33.792-35.84M706.56 392.192L631.808 317.44c-13.312-13.312-35.84-13.312-50.176 0l-10.24 10.24-64.512 64.512c-6.144 6.144-10.24 15.36-10.24 24.576 0 9.216 4.096 18.432 10.24 24.576l10.24 10.24 54.272 54.272 10.24 10.24c13.312 13.312 35.84 13.312 50.176 0l64.512-64.512 10.24-10.24c13.312-13.312 13.312-34.816 0-49.152M448.512 540.672H342.016c-19.456 0-34.816 15.36-34.816 34.816v105.472c0 19.456 15.36 34.816 34.816 34.816h105.472c19.456 0 34.816-15.36 34.816-34.816V575.488c1.024-19.456-14.336-34.816-33.792-34.816m210.944 0H553.984c-19.456 0-34.816 15.36-34.816 34.816v105.472c0 19.456 15.36 34.816 34.816 34.816h105.472c19.456 0 34.816-15.36 34.816-34.816V575.488c1.024-19.456-15.36-34.816-34.816-34.816"
                        fill="#F78FBA" p-id="7554"></path>
                </svg>
                <span class="ml-1 mr-2">{{ content.subcategory }}</span>
                <a-divider type="vertical" style="height: 20px; background-color: #7cb305" />
                <svg t="1707074247371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="8582" width="24" height="24">
                    <path
                        d="M587 927H437C250 927 97 774 97 587V437C97 250 250 97 437 97h150c187 0 340 153 340 340v150c0 187-153 340-340 340z"
                        fill="#78D269" p-id="8583"></path>
                    <path
                        d="M289 344v318s44.4-31 107.4-31c63 0 107.3 31 107.3 31V348s-44.4-36-107.3-36c-63 0-107.4 32-107.4 32z m231.3 0v318s44.4-31 107.3-31c63 0 107.4 31 107.4 31V348s-44.4-36-107.4-36c-63 0-107.3 32-107.3 32z m0 0"
                        fill="#FFFFFF" p-id="8584"></path>
                    <path d="M256 376h16.5v304h198.2v16h82.6v-16h198.2V376H768v320H569.8l1 16H454.2v-16H256V376z m0 0"
                        fill="#FFFFFF" p-id="8585"></path>
                </svg>
                <span class="ml-1">{{ content.wordcount/1000 }}K</span>
            </div>
            
            


        </div>
        <div class="text-dark-300 text-2xl font-bold summary font-serif">
                <span>{{ content.summary }}</span>
            </div>
        <div class="decorativeLine">
        </div>
    </div>
</template>
<script setup>
import { ref,watch } from 'vue';
import { useRouter, } from 'vue-router'

const router = useRouter()
const props=defineProps({
    content:Object,
})
const mouseOverHandler=(event)=>{
    
    const summaryElement=event.target.querySelector('.summary');
    if(summaryElement){
        summaryElement.classList.add('animate-summary');
    }
    const titleContainerElement=event.target.querySelector('.titleContainer');
    if(titleContainerElement){
        titleContainerElement.classList.add("animate-titleContainer")
    }
    const titleP=event.target.querySelector('.titleP');
    if(titleP){
        titleP.classList.add("animate-titleP")
    }
}
const mouseLeaveHandler=(event)=>{
    const summaryElement=event.target.querySelector('.summary');
    if(summaryElement){
        summaryElement.classList.remove('animate-summary');
    }
    const titleContainerElement=event.target.querySelector('.titleContainer');
    if(titleContainerElement){
        titleContainerElement.classList.remove("animate-titleContainer")
    }
    const titleP=event.target.querySelector('.titleP');
    if(titleP){
        titleP.classList.remove("animate-titleP")
    }
}
const handleGetDetail=(content)=>{
    const id=content.articleID
    router.push(`/article/${id}`)
console.log(content);
}
</script>
<style scoped>
/* 动画效果样式 */
.animate-summary {
    opacity: 1 !important;
    transform: translateY(0) !important;
    pointer-events: auto;
}

.decorativeLine {
    position: absolute;
    right: 6px;
    width: 5px;
    height: 20%;
    background-color: #ec4899;
}

.paperContainer {
    position: relative;
    padding: 3px 3px 3px 3px;
    width: 770px !important;
    height: 300px !important;
    /* border: 3px solid #ec4899; */
    /* box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06); */
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
     /* background: linear-gradient(45deg,#fff1eb,#ace0f9); */
    @apply rounded-xl bg-transparent border-solid flex items-center;
}

.imageContainer {
    overflow: hidden;
    width: 360px;
    height: 100%;
}

.titleContainer {
    width: 390px;
    position: absolute;
    right: 2%;
    @apply flex items-center justify-center flex-col;
}

.summary {
    width: 50%;
    position: absolute;
    bottom: 20%;
    opacity: 0;
    transform: translateY(100%);
    left: 48%;
    /* left: 63%; */
    transition: opacity 0.3s, transform 0.3s;
    pointer-events: none;
    text-align: center;
    @apply flex justify-center items-center;
}
.titleContainer{
    transition: transform 0.3s;
}
.animate-titleContainer{
    transform: translateY(-15%);
}
.animate-titleP{
    @apply text-red-500;
}
/* .paperContainer:hover .summary {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
} */
.paperContainer:hover{
    @apply cursor-pointer;
}

</style>