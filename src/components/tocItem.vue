<template>
    <li>
        <a :href="'#' + item.id"  @click="scrollToSection($event, item.id)">{{ item.text }}</a>
        <ul v-if="item.children.length">
            <tocItem v-for="child in item.children" :key="child.id" :item="child"></tocItem>
        </ul>
    </li>
</template>

<script setup>
defineProps(['item']);
const scrollToSection = (event, id) => {
    event.preventDefault(); // 阻止默认跳转行为
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>