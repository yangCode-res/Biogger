<template>
    <div class="homePage">
        <a-row>
            <a-col :span="5" :offset="3">
                <div class="right-scroll">
                    <showCard></showCard>
                    <Home></Home>
                    <div class="tocContainer" >
                        <span class="mb-1 text-orange-700 font-bold">目录</span>
                        <ul class="toc">
            <tocItem v-for="item in toc" :key="item.id" :item="item"></tocItem>
        </ul>
                    </div>
                    <update></update>
                </div>
                


            </a-col>
            <a-col :span="14">
                <div class="main-scroll">
                    <div class="imageContainer">

                        <a-image :preview="false" class="rounded-xl custom-image" :src="articleContent.coverimageurl" />
                        <div class="headerContent">
                            <div class="flex items-center text-light-50 text-2xl mb-4 font-bold ">
                                <div class="category flex items-center">
                                    <svg t="1707074108584" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="7395" width="28" height="28">
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
                                    <span class="ml-1">{{ articleContent.category }}</span>
                                </div>

                                <a-divider type="vertical" style="height: 30px; width: 2px; background-color: #dc2626" />
                                <span>#{{ articleContent.subcategory }}</span>
                            </div>
                            <div class="mb-4">
                                <span class="text-light-500 text-3xl font-bold "> {{ articleContent.title }}</span>
                            </div>

                            <div class="text-light-600 text-lg flex items-center font-bold  ">
                                <svg t="1707073823803" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="5334" width="28" height="28">
                                    <path
                                        d="M896 85.333333C299.008 85.333333 184.661333 605.013333 137.344 882.688l-2.346667 13.866667a36.138667 36.138667 0 0 0 35.626667 42.112h8.917333a42.666667 42.666667 0 0 0 41.344-32.128c1.877333-7.381333 3.584-13.525333 5.034667-18.304 34.218667-110.378667 101.12-171.776 200.746667-184.234667 170.666667-21.333333 298.666667-170.666667 341.333333-298.666667l-64-42.666666 42.666667-42.666667c42.666667-42.666667 85.504-106.666667 149.333333-234.666667z"
                                        fill="#F64E54" p-id="5335"></path>
                                </svg>
                                <span>发表于{{ articleContent.creationtime }}</span>
                                <a-divider type="vertical" style="height: 20px; background-color: #7cb305" />
                                <svg t="1707073918752" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="6332" width="25" height="25">
                                    <path
                                        d="M705.536 328.544c-314.56-271.744-641.056 51.2-641.056 51.2 352-603.84 772.192-160 772.192-160l121.92-115.52v407.104H554.272zM318.912 695.008c314.496 271.648 641.056-51.2 641.056-51.2-352 603.808-772.192 160-772.192 160L64 919.392V548.704h406.208z m0 0"
                                        fill="#0590DF" p-id="6333"></path>
                                </svg>
                                <span>更新于{{ articleContent.lastupdatetime }}</span>
                            </div>
                        </div>

                    </div>
                    <div class="content" v-html="htmlContent" ref="content" v-highlight>

                    </div>
                </div>

            </a-col>
        </a-row>
    </div>
</template>
<script setup>
import showCard from '../components/showCard.vue';
import Home from '../components/scan.vue'
import update from '../components/update.vue';
import tocItem from '../components/tocItem.vue';
import { ref, onBeforeMount, watch, onMounted, nextTick, watchEffect } from 'vue';
import { getPostById } from '~/api/blogpost.js'
import '@wangeditor/editor/dist/css/style.css' // 引入 css
const htmlContent = ref("")
const props = defineProps({
    id: Number
});
watch(
    () => props.id,
    newId => {
        getPostById(newId).then(res => {
            articleContent.value = res.data
            htmlContent.value = res.data.content
        })
    }
)
const articleContent = ref('');
onBeforeMount(() => {
    getPostById(props.id).then(res => {
        console.log(res.data);
        articleContent.value = res.data
        htmlContent.value = res.data.content
    })
})
const content = ref(null)
const toc = ref([])
onMounted(async () => {
    await nextTick();
    generateTOC();
})
function generateTOC(headings) {
    const toc = [];
    let currentLevel = 0;
    headings.forEach((heading,index) => {
        const level = parseInt(heading.tagName.substring(1)); // h1 -> 1, h2 -> 2, etc.
        console.log(level);
        heading.id=`heading-${index}`
        const tocItem = {
            id: heading.id,
            text: heading.textContent,
            tagName: heading.tagName.toLowerCase(),
            children: []
        };
        console.log(tocItem);
        if (level > currentLevel) {
            let lastItem = toc[toc.length - 1];
            while (currentLevel < level - 1) {
                if (!lastItem) {
                    break;
                }
                if (lastItem.children.length === 0) {
                    lastItem.children.push({ children: [] });
                }
                lastItem = lastItem.children[lastItem.children.length - 1];
                currentLevel++;
            }
            if (lastItem) {
                lastItem.children.push(tocItem);
            } else {
                toc.push(tocItem);
            }
            currentLevel = level;
        } else if (level === currentLevel) {
            toc.push(tocItem);
        } else {
            let parent = toc;
            let newCurrentLevel = level;
            while (newCurrentLevel < currentLevel) {
                parent = parent[parent.length - 1].children;
                newCurrentLevel++;
            }
            parent.push(tocItem);
            currentLevel = level;
        }
    });
    return toc;
}


watchEffect(() => {
    if (htmlContent.value) {
        nextTick().then(() => {
            const contentElement = document.querySelector('.content');
            const headings = contentElement.querySelectorAll('h1, h2, h3, h4, h5');
            console.log("headings",headings);
            toc.value = generateTOC(headings);
        });
    }
});
</script>
<style scoped>
.tocContainer {
    position: relative;
    top: 30px;
    height: 200px;
    width: 350px;
    padding-top: 10px;
    padding-left: 20px;
    @apply bg-light-50 rounded-xl flex text-xl text-dark-50 font-bold items-start flex-col ;
}

.content {
    min-height: 1000px;
    /* background-size: 100% 50px; */
    /* 横线间的垂直间距为20px */
    /* background-image: linear-gradient(to bottom, #6b7280 1px, transparent 1px); */
}

.category :hover {
    width: 50px;
    @apply bg-rose-300 rounded-lg;
}

.headerContent {
    position: absolute;
    width: 90%;
    height: 100%;
    padding-left: 30px;
    @apply flex flex-col items-start justify-center;
    /* @apply flex flex-col items-start justify-center; */
}

.imageContainer {
    position: relative;
    width: 100%;
    /* 或者指定宽度，如 width: 500px; */
    height: 350px;
    /* 指定高度 */
    overflow: hidden;
    /* 隐藏超出容器的图片部分 */
    display: flex;
    /* 使得容器成为flex容器，有助于居中图片（如果使用背景图方式） */
    justify-content: center;
    /* 水平居中（如果使用背景图方式） */
    align-items: center;
    /* 垂直居中（如果使用背景图方式） */
    @apply rounded-xl mb-2;
}

:deep(.custom-image) {
    width: 100%;
    /* 使图片宽度铺满容器 */
    height: 100%;
    /* 使图片高度铺满容器 */
    object-fit: cover;
    /* 覆盖整个容器，必要时裁剪图片 */
    object-position: center;
    /* 图片的中心与容器的中心对齐 */
}

/* 增加响应式设计的样式 */

.paperContainer {
    position: relative;
    top: 1%;
    height: 1700px;
    overflow: scroll;
}

.pageContainer {
    width: 90;
    @apply flex items-center justify-center mt-20;
}

.ant-card {
    height: 500px;
}

.homePage {
    padding: 20px;
    padding-top: 120px;
    padding-left: 0px;
    width: 100%;
    /* height: 1200px; */
    /* position: fixed; */
    /* top: 0;
    left: 0;
    height: 100%;
    background: url("~/assets/3gbizhi.png");
    background-size: cover;
    background-position: center bottom; */
    /* 保证图片底部固定 */
    /* background-attachment: fixed; */
}
.homePage::before{
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
.right-scroll {
    /* height: 1500px; */
    /* overflow-y: scroll; */
    @apply flex items-center flex-col;
}

.main-scroll {
    /* min-height: 900px; */
    /* overflow-y: scroll; */
    border: 3px solid #fff;
    /* overflow-y: scroll; */
    background-color: rgba(255, 255, 255, 0.7);
    /* 线条颜色和透明间隔 */
    padding: 3px;
    @apply flex flex-col rounded-xl;
}

::-webkit-scrollbar {
    /* display: none; */
    /* Chrome Safari */
}
code {
    background: #21252b;
}
pre {
    background: #21252b;
}
</style>

