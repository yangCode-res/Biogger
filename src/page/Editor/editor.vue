<template>
  <div class="EditorContainer">
    <div class="mb-4 flex items-center">
      <a-form layout="inline" :model="formState" v-bind="formItemLayout">
        <a-form-item
      name="group"
      label="文章标题"
      :rules="[{ required: true, message: 'Please input group name!' }]"
    >
      <a-input v-model:value="formState.title" />
    </a-form-item>
        <a-form-item name="select" label="Select" has-feedback
          :rules="[{ required: true, message: '请选择您的博文类别' }]">
          <a-select v-model:value="formState.category" placeholder="请选择您的博文类别">
            <a-select-option value="前端">前端</a-select-option>
            <a-select-option value="后端">后端</a-select-option>
            <a-select-option value="机器学习">机器学习</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
      name="group"
      label="文章子类"
      :rules="[{ required: true, message: 'Please input group name!' }]"
    >
      <a-input v-model:value="formState.subcategory" />
    </a-form-item>
    <a-form-item
      name="group"
      label="文章总结"
      :rules="[{ required: true, message: 'Please input group name!' }]"
    >
      <a-input v-model:value="formState.summary" />
    </a-form-item>
    <a-form-item label="Upload">
      <a-upload
    v-model:file-list="fileList"
    name="file"
    :action="uploadImageAction"
    :on-success="uploadSuccess"
  >
    <a-button>
      <upload-outlined></upload-outlined>
      Click to Upload
    </a-button>
  </a-upload>
    </a-form-item>
      </a-form>
    </div>
    <a-row>
      <a-col :span="11">
        <div style="border: 1px solid #ccc">
          <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
            :mode="mode" />
          <Editor :defaultConfig="editorConfig" :mode="mode" v-model="valueHtml" style="height: 800px; overflow-y: hidden"
            @onCreated="handleCreated" @onChange="handleChange" @onDestroyed="handleDestroyed" @onFocus="handleFocus"
            @onBlur="handleBlur" @customAlert="customAlert" @customPaste="customPaste" />
        </div>
        
      </a-col>
      <a-col :span="1">
        <div class="flex items-center justify-center middleContainer">
          <svg t="1707763392312" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5132" width="48" height="48"><path d="M631.466667 1024h-443.733334A51.2 51.2 0 0 1 136.533333 972.8v-921.6A51.2 51.2 0 0 1 187.733333 0h648.533334A51.2 51.2 0 0 1 887.466667 51.2v750.933333h-34.133334v-750.933333a17.066667 17.066667 0 0 0-17.066666-17.066667h-648.533334a17.066667 17.066667 0 0 0-17.066666 17.066667v921.6a17.066667 17.066667 0 0 0 17.066666 17.066667h443.733334z" fill="#4D4D4D" p-id="5133"></path><path d="M938.666667 221.866667h-853.333334a34.133333 34.133333 0 0 0-34.133333 34.133333v375.466667a34.133333 34.133333 0 0 0 34.133333 34.133333h68.266667v-136.533333a34.133333 34.133333 0 0 1 34.133333-34.133334h648.533334a34.133333 34.133333 0 0 1 34.133333 34.133334v136.533333h68.266667a34.133333 34.133333 0 0 0 34.133333-34.133333v-375.466667a34.133333 34.133333 0 0 0-34.133333-34.133333z" fill="#FFF0BA" p-id="5134"></path><path d="M938.666667 682.666667H853.333333v-153.6a17.066667 17.066667 0 0 0-17.066666-17.066667h-648.533334a17.066667 17.066667 0 0 0-17.066666 17.066667V682.666667H85.333333A51.2 51.2 0 0 1 34.133333 631.466667v-375.466667A51.2 51.2 0 0 1 85.333333 204.8h853.333334A51.2 51.2 0 0 1 989.866667 256v375.466667a51.2 51.2 0 0 1-51.2 51.2zM887.466667 648.533333h51.2a17.066667 17.066667 0 0 0 17.066666-17.066666v-375.466667a17.066667 17.066667 0 0 0-17.066666-17.066667h-853.333334a17.066667 17.066667 0 0 0-17.066666 17.066667v375.466667a17.066667 17.066667 0 0 0 17.066666 17.066666H136.533333v-119.466666A51.2 51.2 0 0 1 187.733333 477.866667h648.533334a51.2 51.2 0 0 1 51.2 51.2z" fill="#4D4D4D" p-id="5135"></path><path d="M642.730667 960.853333a181.930667 181.930667 0 1 1 181.589333-181.930666 181.930667 181.930667 0 0 1-181.589333 181.930666z m0-329.386666a147.797333 147.797333 0 1 0 147.456 147.456 147.797333 147.797333 0 0 0-147.456-147.456z" fill="#05AFC8" p-id="5136"></path><path d="M843.776 997.376a17.408 17.408 0 0 1-12.288-5.12l-84.650667-84.650667a17.066667 17.066667 0 0 1 24.234667-24.234666l84.650667 84.650666a17.066667 17.066667 0 0 1 0 24.234667 16.725333 16.725333 0 0 1-11.946667 5.12z" fill="#05AFC8" p-id="5137"></path><path d="M238.933333 580.266667h204.8v34.133333H238.933333zM238.933333 716.8h136.533334v34.133333H238.933333zM238.933333 853.333333h170.666667v34.133334H238.933333z" fill="#B3B3B3" p-id="5138"></path><path d="M785.066667 307.2h68.266666v34.133333h-68.266666zM716.8 307.2h34.133333v34.133333h-34.133333z" fill="#FF6363" p-id="5139"></path></svg>
        </div>
      </a-col>
      <a-col :span="12">
        
        
      <div class="preLook" v-html="valueHtml">
        
      </div>
      </a-col>
      
    </a-row>
    <div class="submit flex items-center mt-4 justify-end">
      <a-button type="primary" danger size="large" @click="handleSubmit">提交</a-button>
    </div>
    
  </div>
</template>
<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted,reactive } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {savePost,uploadImageAction} from "~/api/blogpost.js"
import hljs from 'highlight.js'
const imageUrl = ref('')
const uploadSuccess = (response, uploadFile, uploadFiles) => {
    console.log(response);
 formState.coverimageurl=response.path
}

const handleSubmit=()=>{
  savePost(formState).then((res)=>{
    console.log(res);
  })
  console.log(valueHtml.value)
  console.log(formState);
}
const formState = reactive({
  'title':"",
  'category':"",
  'subcategory':"",
  'summary':"",
  'content':{},
  'coverimageurl':""
});
const editorRef = shallowRef();
const valueHtml = ref('<p>hello</p>');
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>请开始输入您的文章</p>';
  }, 1500);
});
const toolbarConfig = {};
const editorConfig = { placeholder: '请输入内容...' };
// 组件销毁时，也及时销毁编辑器，重要！
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;

  editor.destroy();
});
// 编辑器回调函数
const handleCreated = (editor) => {
  console.log('created', editor);
  editorRef.value = editor; // 记录 editor 实例，重要！
};
const handleChange = (editor) => {
  formState.content=editor.getHtml()
  // valueHtml.value = editor.getHtml();
  console.log('change:', editor.getHtml());
};
const handleDestroyed = (editor) => {
  console.log('destroyed', editor);
};
const handleFocus = (editor) => {
  console.log('focus', editor);
};
const handleBlur = (editor) => {
  console.log('blur', editor);
};
const customAlert = (info, type) => {
  alert(`【自定义提示】${type} - ${info}`);
};
const customPaste = (editor, event, callback) => {
  console.log('ClipboardEvent 粘贴事件对象', event);

  // 自定义插入内容

  // 返回值（注意，vue 事件的返回值，不能用 return）
  callback(true); // 返回 false ，阻止默认粘贴行为
  // callback(true) // 返回 true ，继续默认的粘贴行为
};

const insertText = () => {
  const editor = editorRef.value;
  if (editor == null) return;

  editor.insertText('hello world');
};

const printHtml = () => {
  const editor = editorRef.value;
  if (editor == null) return;
  console.log(editor.getHtml());
};

const disable = () => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.disable()
};
const mode = ref("default")
</script>
<style scoped>
.EditorContainer {
  position: relative;
  top: 20px;
  background-color:#fff;
  width: 100%;
}
.preLook{
  padding: 10px;
  margin-left: 10px;
  border: 1px solid #ccc;
  height: 885px;
  overflow-y: scroll;
}
.middleContainer{
  height: 800px;
}
.EditorContainer::before {
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
</style>