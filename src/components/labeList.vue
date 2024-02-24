<template>
    <div class="labelContainer">
        <div class="title flex items-center">
            <icon :style="{ color: 'hotpink' }">
                <template #component>
                    <svg t="1706894995081" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="6340" width="40" height="40">
                        <path
                            d="M782.848 31.9488h-512c-17.7152 0-31.9488 14.336-31.9488 31.9488v927.9488l287.9488-287.9488 287.9488 287.9488V64c0.1024-17.7152-14.2336-32.0512-31.9488-32.0512z"
                            fill="#F0EEE2" p-id="6341"></path>
                        <path d="M270.848 64h512V128h-512z" fill="#BBAA9C" p-id="6342"></path>
                        <path
                            d="M478.8224 719.9744h-128c-8.8064 0-15.9744 7.168-15.9744 15.9744s7.168 15.9744 15.9744 15.9744h128c8.8064 0 15.9744-7.168 15.9744-15.9744s-7.0656-15.9744-15.9744-15.9744z m192-527.9744c-8.8064 0-15.9744 7.168-15.9744 15.9744s7.168 15.9744 15.9744 15.9744H718.848c8.8064 0 15.9744-7.168 15.9744-15.9744s-7.168-15.9744-15.9744-15.9744h-48.0256z m-320 79.9744c0 8.8064 7.168 15.9744 15.9744 15.9744h79.9744c8.8064 0 15.9744-7.168 15.9744-15.9744s-7.168-15.9744-15.9744-15.9744h-79.9744c-8.8064 0-15.9744 7.168-15.9744 15.9744z m-31.9488 288.0512h-64c-8.8064 0-15.9744 7.168-15.9744 15.9744s7.168 15.9744 15.9744 15.9744h64c8.8064 0 15.9744-7.168 15.9744-15.9744s-7.168-15.9744-15.9744-15.9744z m496.0256 64H718.848c-8.8064 0-15.9744 7.168-15.9744 15.9744s7.168 15.9744 15.9744 15.9744h96.0512c8.8064 0 15.9744-7.168 15.9744-15.9744s-7.168-15.9744-15.9744-15.9744z m-128-128h-32.0512c-8.8064 0-15.9744 7.168-15.9744 15.9744s7.168 15.9744 15.9744 15.9744h31.9488c8.8064 0 15.9744-7.168 15.9744-15.9744s-7.0656-15.9744-15.872-15.9744z m15.9744-416.0512c8.8064 0 15.9744-7.168 15.9744-15.9744s-7.168-15.9744-15.9744-15.9744h-64c-8.8064 0-15.9744 7.168-15.9744 15.9744s7.168 15.9744 15.9744 15.9744h64z m-384 32.0512h48.0256c8.8064-0.2048 15.7696-7.5776 15.5648-16.384-0.2048-8.4992-7.0656-15.36-15.5648-15.5648h-48.0256c-8.8064 0.2048-15.7696 7.5776-15.5648 16.384 0.2048 8.4992 7.0656 15.36 15.5648 15.5648z m95.9488 384c0 8.8064 7.168 15.9744 15.9744 15.9744s15.9744-7.168 15.9744-15.9744-7.168-15.9744-15.9744-15.9744-15.9744 7.0656-15.9744 15.9744z"
                            fill="#D8D5BA" p-id="6343"></path>
                        <path
                            d="M846.848 991.9488V64C846.848 28.672 818.176 0 782.848 0h-512C235.52 0 206.848 28.672 206.848 64v927.9488c0 17.7152 14.336 32.0512 31.9488 32.0512 8.4992 0 16.5888-3.3792 22.6304-9.4208l265.3184-265.4208 265.4208 265.4208c12.4928 12.4928 32.768 12.4928 45.2608 0 6.0416-5.9392 9.4208-14.1312 9.4208-22.6304z m-64-77.2096L549.4784 681.3696c-12.4928-12.4928-32.768-12.4928-45.2608 0L270.848 914.7392V159.9488h512v754.7904z m0-786.7392h-512V64h512V128zM382.8736 415.9488h128v128c0 8.8064 7.168 15.9744 15.9744 15.9744s15.9744-7.168 15.9744-15.9744v-128h128c8.8064-0.2048 15.7696-7.5776 15.5648-16.384-0.2048-8.4992-7.0656-15.36-15.5648-15.5648h-128V256c0-8.8064-7.168-15.9744-15.9744-15.9744s-15.9744 7.168-15.9744 15.9744v128h-128c-8.8064 0.2048-15.7696 7.5776-15.5648 16.384 0.2048 8.4992 7.0656 15.36 15.5648 15.5648z"
                            fill="#5F4E56" p-id="6344"></path>
                    </svg>
                </template>
            </icon>
            <span class="text-xl font-bold text-dark-50 font-serif">标签</span>
        </div>
        <div class="labelBox">
            <span v-for="item in labelList" class="label" :style="{ color: getRandomColor() }" >{{ item[0] }}<sup>{{item[1]}}</sup></span>
        </div>
        
    </div>
</template>
<script setup>
import {ref,onBeforeMount} from "vue"
import Icon, { HomeOutlined } from '@ant-design/icons-vue';
import {getSubCategories} from "~/api/blogpost.js"
const labelList=ref([])
onBeforeMount(()=>{
    getSubCategories().then(res=>{
        labelList.value=res.data
        console.log("labe;",labelList.value);
    })
})
const getRandomColor=()=> {
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = Math.floor(Math.random() * 70 + 50); // 生成127-255之间的亮色值
      color += value.toString(16).padStart(2, '0');
    }
    return color;
    }
</script>
<style scoped>
.labelBox{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
}
.labelContainer {
    position: relative;
    padding: 5px;
    top: 4%;
    width: 350px;
    height: 200px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
    @apply  rounded-xl shadow-lg;
}
.labelContainer:hover{
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px !important;
}
.label{
    padding: 3px;
    width: 100px;
    @apply font-serif font-bold text-base cursor-pointer rounded-xl flex items-center justify-center;
}
.label:hover{
    width: 100px;
    @apply bg-blue-100;
}
</style>