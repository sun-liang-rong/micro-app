<script setup>
import { useRoute } from 'vue-router'
import CommonHeader from './components/CommonHeader.vue';
import CommonFooter from './components/CommonFooter.vue';
import CommonContainer from './components/CommonContainer.vue'
const route = useRoute()
console.log(route, 'route');
</script>

<template>
  <CommonHeader v-if="route.name !== 'mainLogin'"/>
  <CommonContainer/>
  <CommonFooter v-if="route.name !== 'mainLogin'"/>
</template>

<style scoped lang="scss">
</style>
