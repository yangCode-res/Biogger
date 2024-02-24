<template>
    <div class="noticeContainer">
        <icon :style="{ color: 'hotpink' }">
            <template #component>
                <svg t="1706984848684" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="9055" width="48" height="48">
                    <path
                        d="M776.1 922.9H247.9c-29.2 0-52.8-23.7-52.8-52.8V764.5c0-29.2 23.6-52.8 52.8-52.8h528.2c29.2 0 52.8 23.7 52.8 52.8v105.6c0 29.2-23.6 52.8-52.8 52.8z m-528.2-176c-4.7 0-9.1 1.9-12.5 5.2-3.3 3.3-5.2 7.8-5.2 12.4v105.6c0 4.7 1.9 9.1 5.2 12.5s7.8 5.2 12.5 5.2h528.2c4.7 0 9.1-1.9 12.5-5.2 3.3-3.3 5.1-7.8 5.1-12.5V764.5c0-4.7-1.9-9.1-5.1-12.4-3.3-3.3-7.8-5.2-12.5-5.2H247.9z m0 0"
                        fill="#76569A" p-id="9056"></path>
                    <path
                        d="M775.7 695.1h-70.4c-7.1 0-13.5-4.3-16.2-10.9-2.9-6.6-1.3-14.4 3.9-19.4 24.3-20.7 27.3-57.3 6.7-81.7-60.2-91.2-281.7-163-414.8-109.2-7.4 2.6-15.6 0-20.2-6.3-4.6-6.4-4.4-15 0.4-21.1L582 69.7c5.4-6.1 14.2-7.7 21.3-3.9 7.2 3.7 10.9 11.9 8.9 19.8-38.7 148.6 45.1 246.5 119 330.3 73.9 83.8 144.4 166.2 57.4 272.5-3.1 3.9-7.8 6.4-12.9 6.7z"
                        fill="#FFF433" p-id="9057"></path>
                    <path
                        d="M600 676.4H247.9c-4.7 0-9.1-1.9-12.5-5.2-3.3-3.3-5.2-7.8-5.2-12.5s1.9-9.1 5.2-12.5c3.3-3.3 7.8-5.1 12.5-5.1H600c4.7 0 9.1 1.9 12.5 5.1 3.3 3.3 5.2 7.8 5.2 12.5s-1.9 9.1-5.2 12.5c-3.3 3.4-7.8 5.2-12.5 5.2z m0 0"
                        fill="#76569A" p-id="9058"></path>
                    <path
                        d="M424 746.9c-4.7 0-9.1-1.9-12.5-5.2-3.3-3.3-5.2-7.8-5.2-12.5V623.6c0-9.7 7.9-17.6 17.6-17.6 9.7 0 17.6 7.9 17.6 17.6v105.6c0 4.7-1.9 9.1-5.2 12.5-3.2 3.3-7.7 5.2-12.3 5.2z m0 0"
                        fill="#76569A" p-id="9059"></path>
                    <path
                        d="M705.7 960.2c-4.7 0-9.1-1.9-12.5-5.2-3.3-3.3-5.2-7.8-5.2-12.5v-35.2c0-9.7 7.9-17.6 17.6-17.6 9.7 0 17.6 7.9 17.6 17.6v35.2c0 4.7-1.9 9.1-5.2 12.5-3.2 3.4-7.7 5.2-12.3 5.2z m-387.4 0c-4.7 0-9.1-1.9-12.5-5.2-3.3-3.3-5.2-7.8-5.2-12.5v-35.2c0-9.7 7.9-17.6 17.6-17.6s17.6 7.9 17.6 17.6v35.2c0 4.7-1.9 9.1-5.2 12.5-3.1 3.4-7.6 5.2-12.3 5.2z m422.6-213.3h-70.4c-7.1 0-13.5-4.3-16.2-10.9-2.9-6.6-1.3-14.4 3.9-19.4 24.3-20.7 27.3-57.3 6.7-81.7-60.2-91.2-281.7-163-414.8-109.2-7.4 2.6-15.6 0-20.2-6.3-4.6-6.4-4.4-15 0.4-21.1l316.9-376.8c5.4-6.1 14.2-7.7 21.3-3.9 7.2 3.7 10.9 11.9 8.9 19.8-38.7 148.6 45.1 246.5 119 330.3 73.9 83.8 144.4 166.2 57.4 272.5-3.1 3.9-7.8 6.4-12.9 6.7z m-35.2-35.3h27.5c57.7-76.4 15.8-131.7-61.6-220.8-66.3-75.3-145.9-166.8-137.8-298.2L293.3 477.5c147.9-25.7 340.9 46.8 401.1 138 21.1 27.6 25.1 64.6 10.6 96.1h0.7z m0 0"
                        fill="#76569A" p-id="9060"></path>
                </svg>
            </template>
        </icon>
        <span class="text-red-500 font-momo text-xl font-bold ml-2">{{ currentNotice.creationtime }}:</span>
        <span class="text-dark-50 text-xl font-bold ml-2 text scrolling-text font-serif" id="scrolling-text-container" @click="handleGoToNoticeShow">
            <p>
                {{ currentNotice.content }}
            </p>
        </span>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Icon, { HomeOutlined } from '@ant-design/icons-vue';
import {  onBeforeMount, watch,onMounted } from 'vue';
import {getNoticeList} from "~/api/blogpost.js"
import { useRouter, } from 'vue-router'
const router = useRouter()
const handleGoToNoticeShow=()=>{
    router.push("/notice")
}
const currentNotice = ref({ content: '', creationtime: '' });
onBeforeMount(() => {
  getNoticeList().then((res) => {
    console.log(res.data);
    noticeList.value = res.data;
    updateNotice()
  });
});
const noticeList = ref([
]
)
let noticeIndex = 0; // 当前通知索引

// 更新通知内容的方法
function updateNotice() {
  currentNotice.value = noticeList.value[noticeIndex++ % noticeList.value.length]; // 循环通知
  // 重启动画
  const el = document.getElementById('scrolling-text-container').querySelector('p');
  el.style.animation = 'none';
  setTimeout(() => {
    el.style.animation = '';
  }, 0);
}

// onMounted(() => {
//   updateNotice(); // 组件挂载时更新第一条通知
// });

watch(currentNotice, (newVal, oldVal) => {
  // 当通知更新后设置定时器
  const el = document.getElementById('scrolling-text-container').querySelector('p');
  const width = el.offsetWidth; // 获取元素宽度
  const containerWidth = document.getElementById('scrolling-text-container').offsetWidth; // 获取容器宽度
  const duration = (width + containerWidth) / 50; // 基于速度计算动画时间

  // 监听动画结束
  el.addEventListener('animationend', updateNotice, { once: true });

  // 重设动画时间
  el.style.animationDuration = `${duration}s`;
});
</script>
<style scoped>
.noticeContainer {
    padding-left: 10px;
    width: 90%;
    height: 80px;
    border: 2px dashed  #eaecef;
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 15px 0px !important; */
    /* background: linear-gradient(45deg,#fff1eb,#ace0f9); */
    /* border: 1px solid rgba(27, 106, 180, 0.959); */
    /* 浅灰色，50% 透明度 */
    /* box-shadow: 2px  2px 4px rgba(0, 0, 0, 0.1); */
    @apply rounded-xl flex items-center;
}

.text:hover {
    cursor: pointer;
    @apply text-sky-600;
}

@keyframes scroll-left {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

.scrolling-text {
    width: 80%;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
}

.scrolling-text p {
    display: inline-block;
    animation: scroll-left 10s linear forwards; /* 删除infinite，添加forwards保持动画结束状态 */
    /* 应用动画，10秒完成一次滚动，无限次数 */
}</style>