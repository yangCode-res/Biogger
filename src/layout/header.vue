<template>
    <div class="flex items-center justify-between  headerContainer">
        <div class=" flex items-center  justify-between  ">
            <BuildFilled class="text-3xl text-light-50" />
            <!-- <div @mouseover="handleOver" @mouseout="handleOut" class="flex cursor-pointer  justify-center">
                <span class="text-black font-bold font-serif text-2xl ml-2 trademark animate__animated animate__bounceOut animate__delay-0.5s" v-if="nvaStatus"> 数羊CountSheep</span>
                <span class="text-black font-bold font-serif text-2xl ml-2 trademark homeButton animate__animated animate__bounceIn animate__delay-0.5s" v-if="!nvaStatus" @click="returnHome">
                    <HomeOutlined />
                </span>
            </div> -->
            <div class="flex cursor-pointer justify-center" @mousemove="handleOver"
                      @mouseout="handleOut" @click="returnHome">
                <span v-if="nvaStatus"
                      class="text-light-50 font-bold font-serif text-2xl ml-2 trademark"
                      :class="{'animate__animated': true, 'animate__bounceOut': isBouncingOut, 'animate__bounceIn': !isBouncingOut && !nvaStatus}"

                      @animationend="handleAnimationEnd">
                  数羊CountSheep
                </span>
                <span v-else
                      class="text-black font-bold font-serif text-2xl ml-2 trademark homeButton"
                      :class="{'animate__animated': true, 'animate__bounceIn': !isBouncingOut && !nvaStatus } "
                      
                      >
                    <HomeOutlined />
                </span>
            </div>

        </div>

        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" style="color: #fff;" @click="handleClick" />
    </div>
    <div>
        <a-modal v-model:open="open" title="搜索" @ok="handleOk" width="1000px" :footer="null" :bodyStyle="{background: 'transparent'}">
            <a-input-search
      v-model:value="searchValue"
      placeholder="input search text"
      enter-button
      @search="onSearch"
    />
      <p v-for="(item,index) in searchList" class="searchItem" @click="handleGetDetail(item)">
        <a-tooltip placement="topLeft" :title="item.summary">
            <a-typography-text
    :style=" { width: '100px' } "
    :ellipsis="item.summary"
    :content="item.title"
  />
    </a-tooltip>
        
      </p>
    </a-modal>
    </div>

</template>
<script setup>
import { h, ref,watch } from 'vue';
import { MailOutlined, AppstoreOutlined, BuildFilled, SettingOutlined, RiseOutlined, SearchOutlined, HomeOutlined } from '@ant-design/icons-vue';
import { useRouter, } from 'vue-router'
import {getBlogPostByKeyword} from '~/api/blogpost.js'
//搜索功能
const open=ref(false)
const searchList=ref([])
const searchValue=ref('')
const onSearch=()=>{
    getBlogPostByKeyword(searchValue.value).then(res=>{
        console.log(res.data);
        searchList.value=res.data.content
    })
}
const handleGetDetail=(content)=>{
    open.value=false
    searchValue.value=""
    const id=content.articleID
    router.push(`/article/${id}`)
}

const router = useRouter()
const returnHome=()=>{
    router.push('/')

}
const nvaStatus = ref(true);
const isBouncingOut = ref(false); // 控制是否处于 bounceOut 动画中
const isHover=ref(false)
const handleOver = () => {
    isBouncingOut.value = true;
    isHover.value=true // 开始播放 bounceOut 动画
};

const handleOut = () => {
    isBouncingOut.value = false;
    isHover.value=false
};

const handleAnimationEnd = () => {
    if (isBouncingOut.value) {
        nvaStatus.value = false; // 动画完成后更新状态
        isBouncingOut.value = false; // 重置动画状态，准备下一次动画
    }
};
watch(isHover, (val) => {
    console.log(val);
    if(val==false){nvaStatus.value = true;
        // setTimeout(() => {
            
        // }, 500);
        // nvaStatus.value=true
    }

})
// const handleOver=()=>{
//     nvaStatus.value=false
// }
// const handleOut=()=>{
//     nvaStatus.value=true
// }
const handleClick = e => {
    if(e.key==="search"){
        console.log("ok");
        open.value=true
    }
    else{
        router.push(e.key)
    }
    
};
// const nvaStatus=ref(true)
const current = ref(['mail']);
const items = ref([
    {
        key: 'search',
        icon: () => h(SearchOutlined),
        label: '搜索',
        title: '搜索',
    },
    {
        key: '/editor',
        icon: () => h(MailOutlined),
        label: '写博客',
        title: '写博客',
    },
    {
        key: '/',
        icon: () => h(AppstoreOutlined),
        label: '主页',
        title: '主页',
    },
    {
        key: '/comments',
        icon: () => h(SettingOutlined),
        label: '留言',
        title: '留言',

    },
    {
        key: '/place',
        icon: () => h(RiseOutlined),
        label: '统计',
        title: '统计',
    },
    {
        key: '/alipay',
        label: h(
            'a',
            {
                href: 'https://antdv.com',
                target: '_blank',
            },
            '其它',
        ),
        title: '其它',
    },
]);

</script>
<style scoped>
.ant-menu {
    width: 35%;
    border-bottom:none;
    @apply text-2xl font-bold;
}

.trademark {
    width: 200px;
    height: 40px;
    border-radius: 5%;
    translate: 0.4s;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out; 
    @apply flex items-center justify-center mb-1;
}

.homeButton{
    background-color: #64748B;
}
.headerContainer{
    position: relative;
    /* background: rgba(255,255,255,0.8) !important; */
    padding-left: 8%;
    padding-right: 5%;
    height: 65px;
    /* border-bottom: 1px solid #e5e7eb; */
    /* box-shadow: 0 5px 6px -5px rgba(133,133,133,0.6); */
    z-index: 1000 !important;
}
:deep(.ant-menu){
    background: transparent;
}
:deep(.ant-modal){
    background: rgba(0, 0, 0, .8) !important;
}
.searchItem{
    width: 100%;
    height: 64%;
    padding: 5px;
    margin-top: 10px;
    border: 1px solid #64748B;
    background-color: rgba(209, 122, 51, 0.8);
    @apply rounded-xl cursor-pointer;
    &:hover{
        background-color: rgba(210, 211, 174, 1);
    }
}

</style>