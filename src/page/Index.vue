<template>
     <!-- <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
        <a-layout class="Container">
      <a-layout-header :style="headerStyle"><Header></Header></a-layout-header>
      <a-layout-content  :style="contentStyle"><router-view class="bodyContainer"></router-view></a-layout-content>
      <a-layout-footer :style="footerStyle"><Footer></Footer></a-layout-footer>
    </a-layout>
    </a-space> -->
<div class="Container">
    <Header></Header>
   <router-view class="bodyContainer"></router-view>
   <Footer></Footer>
</div>


<!-- <div class="Container">
   <Header></Header>
   <router-view class="bodyContainer"></router-view>
   <Footer></Footer>
</div> -->
</template>
<script setup>
import Header from "~/layout/header.vue"
import Footer from "~/layout/footer.vue"
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  background: 'transparent',
};
const footerStyle = {
  textAlign: 'center',
  minHeight:"200px",
  color: '#fff',
  backgroundColor: '#7dbcea',
};
// const contentStyle={
//     flexGrow:1
// }

</script>
<style >
::-webkit-scrollbar {
    width: 8px; /* 纵向滚动条*/
    height: 5px; /* 横向滚动条 */
    background-color: #fff;
}

/*定义滚动条轨道 内阴影*/
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    background-color: #ccc;
}

/*定义滑块 内阴影*/
::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    background-color: #1890ff;
    border-radius: 10px;
}


</style>
<style scoped >
.AllContainer{
    @apply flex flex-col;
}
.Container{
    
    /* background-color: rgba(0,4,16,1)  */
    /* background: url(~/assets/background3.jpg); */
    /* background-position: center bottom; */
    /* 保证图片底部固定 */
    /* background-attachment: fixed; */
}

</style>