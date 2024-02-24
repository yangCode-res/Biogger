<template>
    <div class="homePageContainer">
        <div class="background-image flex items-center justify-center ">
            <span class="text-light-50 font-bold text-5xl font-serif backTitle">CountSheep</span>
            <div class="typing-container">
                {{ typedText }}
            </div>
        </div>
        <div class="homePage" ref="homePageRef">
            <img :class="{ 'slide-in': isCovered }" src="https://english-1309979517.cos.ap-nanjing.myqcloud.com/down.jpg"
                alt="Your Image" class="side-image" @click="handleToTop">
            <div class="down-arrow">
                <DownOutlined />
            </div>
            <a-row>
                <a-col :span="5" :offset="1">
                    <div class="right-scroll">
                        <showCard></showCard>
                        <Home></Home>
                        <announcement></announcement>
                        <update></update>
                        <labeList></labeList>
                        <placeOnFile></placeOnFile>
                        <information></information>
                    </div>

                </a-col>
                <a-col :span="18">
                    <div class="main-scroll">
                        <notice></notice>
                        <banner></banner>
                        <classer @changeCategory="handleChangCategory"></classer>
                        <div class="paperContainer">
                            <paper v-for="(item, index) in paperList" :key="index" :content="item"></paper>
                        </div>
                        <div class="pageContainer">
                            <a-pagination v-model:current="current1" v-model:pageSize="pageSize" show-size-changer
                                :total="total" @change="onShowSizeChange" />
                        </div>

                    </div>

                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script setup>
import showCard from '../components/showCard.vue';
import Home from '../components/scan.vue'
import announcement from '../components/announcement.vue'
import update from '../components/update.vue';
import labeList from '../components/labeList.vue';
import placeOnFile from '../components/placeOnFile.vue';
import information from '../components/information.vue';
import notice from '../components/notice.vue';
import banner from '../components/banner.vue';
import classer from '../components/classer.vue';
import paper from '../components/paper.vue';
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from 'vue';
import { getPostList, getBlogByCategory ,getBlogPostByPage,getBlogPostByCategoryAndPage} from '~/api/blogpost.js'
import {
    DownOutlined,
} from '@ant-design/icons-vue';
const current1=ref(0)
const pageSize=ref(10)
const total=ref(0)
const fullText = '努力努力再努力';
const typedText = ref('')

const onShowSizeChange=()=>{
    if(pageStatus.value=="首页"){
        getBlogPostByPage(current1.value-1,pageSize.value).then(res=>{
        paperList.value = res.data.content
        total.value=res.data.totalElements
    })
    }
    else{
        getBlogPostByCategoryAndPage(category,current1.value-1,pageSize.value).then(res => {
        paperList.value = res.data.content
        total.value=res.data.totalElements
        console.log(res.data);
    })
    }
    
}
const handleToTop = () => {
    window.scrollTo({
        top: document.querySelector('.background-image').offsetTop, // 或者一个特定的值，如0
        behavior: 'smooth' // 平滑滚动
    });
}
const isCovered = ref(false)
const homePageRef = ref(null)
const handleScroll = () => {
    if (homePageRef.value) {
        const homePageTop = homePageRef.value.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // 判断homepage是否完全进入视口内
        isCovered.value = homePageTop <= 0;

    }
};
onMounted(() => {
    document.querySelector('.down-arrow').addEventListener('click', function () {
        // 滚动到页面顶部
        window.scrollTo({
            top: document.querySelector('.homePage').offsetTop, // 或者一个特定的值，如0
            behavior: 'smooth' // 平滑滚动
        });
    });
    window.addEventListener('scroll', handleScroll);
    let index = 0;
    const typeEffect = () => {
    const intervalId = setInterval(() => {
        typedText.value += fullText[index];
        index++;
        if (index === fullText.length) {
            clearInterval(intervalId); // 清除当前的定时器
            setTimeout(() => { // 如果你想要在重新开始之前有延迟
                typedText.value = ''; // 重置文本
                index = 0; // 重置索引
                typeEffect(); // 重新调用函数以重启定时器
            }, 1000); // 延迟1秒后重新开始
        }
    }, 450);
};

typeEffect(); // 首次调用以启动效果
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
onBeforeMount(() => {
    // getPostList().then(res => {
    //     paperList.value = res.data
    //     console.log(res.data);
    // })
    getBlogPostByPage(0,10).then(res => {
        paperList.value = res.data.content
        total.value=res.data.totalElements
        console.log(res.data);
    })
})
const paperList = ref([
]);
const pageStatus=ref("首页")
const handleChangCategory = (category) => {
    if (category == null) {
        pageStatus.value="首页"
        getBlogPostByPage(0,10).then(res => {
        paperList.value = res.data.content
        total.value=res.data.totalElements
        console.log(res.data);
    })
    }
    else{
        pageStatus.value=category
        getBlogPostByCategoryAndPage(category,0,10).then(res => {
        paperList.value = res.data.content
        total.value=res.data.totalElements
        console.log(res.data);
    })
    }
    
}

</script>
<style scoped>
.homePageContainer {
    /* position: relative; */
    /* height: auto; */
    /* height: 3570px; */
    min-height: 3330px;
    /* overflow: scroll; */
    
}

.backTitle {
    position: absolute;
}

.paperContainer {

    display: grid;
    
    grid-template-columns: 750px 750px;
    grid-column-gap: 47px;
    grid-template-rows: repeat(5,300px);
    grid-row-gap: 20px;
    width: 90%;
    position: relative;
    top: 9%;
    overflow: hidden;
    height: 1620px;
    /* height: 1700px; */
    /* overflow: scroll; */
}

.pageContainer {
    width: 90;
    @apply flex items-center justify-center mt-20;
}



.homePage {
    position: relative;
    padding: 20px 20px 20px 20px;
    top: 100vh;
    padding-left: 50px;
    /* height: auto; */
    margin: 0 auto;
    width: 100%;
    z-index: 2;
    /* 确保内容在云彩之上 */
    background: linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%);
    background: rgba(255, 255, 255, 1);
}

.right-scroll {
    height: 2200px;
    /* overflow-y: scroll; */
    @apply flex items-center flex-col;
}

.main-scroll {
    width: 100%;
    height: auto;
    overflow: hidden;
    /* overflow-y: scroll; */
    @apply flex flex-col;
}

::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}

.background-image {
    position: fixed;
    /* margin-top: 65px; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('~/assets/background.jpg');
    /* 替换为你的图片路径 */
    background-size: cover;
    background-position: center bottom;
    /* 保证图片底部固定 */
    background-attachment: fixed;
    /* 背景图片固定，不随滚动条滚动 */
}



.homePage::before {
    content: "";
    position: absolute;
    top: -150px;
    left: 0;
    width: 100%;
    height: 150px;
    background: url('~/assets/bannerwave.png') repeat-x;
    z-index: 1;
    background-size: 100% 150px;
    animation: moveBackground 10s linear infinite;
}

.homePage::after {
    content: "";
    position: absolute;
    top: -167px;
    left: 0;
    width: 100%;
    height: 150px;
    background-size: 100% 150px;
    background: url('~/assets/bannerwave2.png') repeat-x;
    z-index: 2;
    animation: moveBackground 8s linear infinite;
}

@keyframes moveLeft {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(-100%);
    }
}

@keyframes moveRight {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0%);
    }
}

@keyframes moveBackground {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -1000px 0;
    }

    /* 调整此值以匹配你的背景图像或渐变宽度 */
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(10px);
        /* 箭头向下移动的距离，可根据需要调整 */
    }
}

.down-arrow {
    position: absolute;
    top: -130px;
    /* 根据需要调整，使其位于云彩下方 */
    left: 50%;
    cursor: pointer;
    z-index: 3;
    /* 确保箭头位于最上层 */
    animation: bounce 1s linear infinite;
    @apply text-5xl text-light-50;
}

.side-image {
    position: fixed;
    top: 0;
    right: 0;
    transform: translateY(-240%);
    /* 初始状态，图片隐藏在视口之外 */
    transition: transform 1s ease-out;
    /* 平滑过渡动画 */
}

/* 动态类控制图片弹出 */
.slide-in {
    transform: translateY(0);
    /* 动画结束状态，图片完全可见 */
    @apply cursor-pointer;
}

.typing-container {
    position: absolute;
    top: 40%;
    font-family: 'Courier New', Courier, monospace;
    font-size: 44px;
    color: #fff;
}
</style>