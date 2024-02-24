<template>
    <div class="commentsContainer">

        <div class="commentList">
            <div class="text-dark-50 text-4xl font-serif font-bold title">留言板</div>
            <div class="commentCompoent">
                <a-list class="comment-list" :header="`${data.length} replies`" item-layout="horizontal"
                    :data-source="data">
                    <template #renderItem="{ item }">
                        <a-list-item>
                            <a-comment :author="'游客' + item.id"
                                avatar="https://english-1309979517.cos.ap-nanjing.myqcloud.com/commentavatar.jpg">
                                <template #actions>
                                    <span v-for="(action, index) in item.actions" :key="index">{{ action }}</span>
                                </template>
                                <template #content>
                                    <p>
                                        {{ item.content }}
                                    </p>
                                </template>
                                <template #datetime>
                                    <a-tooltip :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
                                        <span>{{ item.datetime.fromNow() }}</span>
                                    </a-tooltip>
                                </template>
                            </a-comment>
                        </a-list-item>
                    </template>
                </a-list>
            </div>
            
            <div class="input">
                <a-list v-if="comments.length" :data-source="comments"
                    :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`" item-layout="horizontal">
                    <template #renderItem="{ item }">
                        <a-list-item>
                            <a-comment :author="item.author"
                                avatar="https://english-1309979517.cos.ap-nanjing.myqcloud.com/commentavatar.jpg"
                                :content="item.content" :datetime="item.datetime" />
                        </a-list-item>
                    </template>
                </a-list>
                <a-comment>
                    <template #avatar>
                        <a-avatar src="https://english-1309979517.cos.ap-nanjing.myqcloud.com/commentavatar.jpg"
                            alt="Han Solo" />
                    </template>
                    <template #content>
                        <a-form-item>
                            <a-textarea v-model:value="value" :rows="4" />
                        </a-form-item>
                        <a-form-item>
                            <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
                                Add Comment
                            </a-button>
                        </a-form-item>
                    </template>
                </a-comment>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue"
import dayjs from 'dayjs';
import { getCommentList, saveComment } from "~/api/comment.js"
import relativeTime from 'dayjs/plugin/relativeTime';
import { SmileOutlined } from '@ant-design/icons-vue';
import { notification } from 'ant-design-vue';
import { h } from 'vue';
const openNotification = () => {
    notification.open({
        message: 'Notification',
        description:
            '评论成功',
        icon: () =>
            h(SmileOutlined, {
                style: 'color: #108ee9',
            }),
    });
};
const handleSubmit = () => {
    saveComment({
        content: value.value
    }).then(()=>{
        openNotification()
        getData()
        value.value=""
    }
        
    )
}
onBeforeMount(() => {
    getData()

})
const getData = () => {
    getCommentList().then(res => {
        res.data.map(item => {
            item.datetime = dayjs(item.datetime).subtract(1, 'days')
            item.actions = ['Reply to'];
            return item
        })
        console.log(res.data);
        data.value = res.data
    })
}
dayjs.extend(relativeTime);
const data = ref([])

const comments = ref([]);
const submitting = ref(false);
const value = ref('');

</script>
<style scoped>
.title {
    position: absolute;
    top: 1%;
}

.input {
    position: absolute;
    bottom: 1%;
    width: 90%;
    @apply flex items-center justify-between;
}

.commentsContainer {
    min-height: 1200px;
    width: 100%;
}

.commentCompoent {
    position: absolute;
    width: 100%;
    max-height: 600px;
    top: 5%;
    overflow-y: scroll;
}

.commentsContainer::before {
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

.commentList {
    position: relative;
    padding: 20px;
    left: 20%;
    margin-top: 50px;
    margin-bottom: 20px;
    width: 60%;
    min-height: 85vh;
    overflow-x: hidden;
    border: 3px solid #fff;
    background-color: rgba(255, 255, 255, 0.9);
    @apply flex items-center justify-center rounded-xl;
}

:deep(.ant-input) {
    max-width: none;
    width: 1200px;
}</style>