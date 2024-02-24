<template>
    <div class="bgContainer">
        <div class="noticeContainer">
            <div class="imageContainer">
                <a-image :width="1430" :preview="false" class="rounded-xl"
                    src="https://english-1309979517.cos.ap-nanjing.myqcloud.com/H8KYJS038.jpeg" />
            </div>
            <div class="ListContainer">
                <div v-for="(item, index) in noticeList" :key="index" class="NoticeBox">

                    <span class="NoticeTitle">
                        {{ item.content }}
                    </span>
                    <span class="NoticeTime">
                        <span>{{ item.creationtime }}</span>
                        <span class="fa-tag fa-solid ml-4">网站公告</span>
                    </span>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { getNoticeList } from "~/api/blogpost.js"
import { ref, onBeforeMount } from 'vue'
const currentNotice = ref({ content: '', creationtime: '' });
onBeforeMount(() => {
    getNoticeList().then((res) => {
        console.log(res.data);
        noticeList.value = res.data;
    });
});
const noticeList = ref([
]
)
</script>
<style scoped>
.bgContainer {
    position: relative;
    padding-top: 50px;
    left: 20%;
    width: 60%;
    min-height: 1300px;
    height: auto;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 3px solid #fff;
    background-color: rgba(255, 255, 255, 0.9);
}

.noticeContainer {}

.noticeContainer::before {
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

.imageContainer {
    width: 1430px;
    height: 400px;
    overflow: hidden;
    @apply flex items-center justify-center rounded-xl;
}

.ListContainer {
    padding-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

}

.NoticeBox {
    position: relative;
    width: 450px;
    height: 220px;
    border-radius: 15px;
    background-color: rgba(254, 248, 239, 1);
    transition: width 0.5s;
    /* -webkit-animation: mymove 1s infinite; Chrome, Safari, Opera */


}

.NoticeBox:hover {
    /* height: 225px; */
    width: 460px;
    @apply cursor-pointer;
}

.NoticeTitle {
    position: absolute;
    top: 20%;
    left: 10%;
    @apply text-xl font-bold font-semibold;
}

.NoticeTime {
    position: absolute;
    bottom: 5%;
    left: 10%;
    @apply text-lg font-bold font-semibold text-gray-400;
}

::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}</style>