import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import { router } from "./router";
import "ant-design-vue/dist/reset.css";
import * as echarts from 'echarts';
import("~/roma.js")
window.echarts = echarts;
const app = createApp(App);
import "virtual:windi.css";
// 动画 animate.css
import 'animate.css';
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import 'highlight.js/styles/monokai-sublime.css'
app.directive('highlight',function (el) {
    console.log('directive');
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
        hljs.highlightBlock(block)
    })
})
app.use(Antd);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
