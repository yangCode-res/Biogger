<template>
    <div class="placeContainer">
        <div class="bgContainer">
            <span class="title">文章分类</span>
        <div class="subClasser">
            <div v-for="(item, index) in subCategoryList " class="subcategoryBox ml-6 flex items-center text-xl font-bold"
                @click="handleToClasser(item[0])">
                <TagOutlined />
                <span class="  ml-3">{{ item[0] }}</span>
                <span class="ml-4 text-light-300 text-lg">({{ (item[1]) }})</span>
            </div>

        </div>
        <div ref="eCharts" id="chart" style="width: 70%; height: 550px;" class="eCharts"></div>
        </div>
        
    </div>
</template>
<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import { getSubCategories } from "~/api/blogpost.js"
import {
    TagOutlined,
} from '@ant-design/icons-vue';
import { useRouter, } from 'vue-router'
const router = useRouter()
const handleToClasser = (subcategory) => {
    router.push(`/classer/${subcategory}`)
}
const eCharts = ref(null)
var option;
option = {
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
            ]
        }
    ]
};
var myChart = null
const subCategoryList = ref([])
onBeforeMount(() => {
    getSubCategories().then((res) => {
        subCategoryList.value = res.data
        console.log(res.data);
        res.data.forEach(item => {
            option.series[0].data.push({value:item[1],name:item[0]}) 
        })
    })
})
//echarts配置

onMounted(() => {
    getSubCategories().then((res) => {
        subCategoryList.value = res.data
        console.log(res.data);
        res.data.forEach(item => {
            option.series[0].data.push({value:item[1],name:item[0]}) 
        })
        var chartDom = document.getElementById('chart');
        if (chartDom) {
                console.log("找到了");
                myChart = echarts.init(chartDom,'roma');
                myChart.setOption(option)
            }
    })

})

</script>
<style scoped>
.title {
    position: absolute;
    top: 2%;
    @apply text-4xl font-bold;
}

.subcategoryBox {
    padding: 8px;
    width: auto;
    /* border: 1px solid #434444; */
    /* background: linear-gradient(90deg, #d1cfce, #1488c2); */
    background-color: rgb(194, 151, 86);
    border-radius: 12px;
    @apply cursor-pointer ;
}
.subcategoryBox:hover{
    @apply bg-sky-400;
}

.subClasser {
    position: absolute;
    top: 8%;
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
    min-height: 100vh;
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
.eCharts{
    position: absolute;
    top: 16%;
    left: 15%;
}
::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}</style>