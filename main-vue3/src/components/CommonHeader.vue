<template>
  <div class="common-header">
    <el-menu :default-active="activeIndex" mode="horizontal" background-color="#f5f5f5" text-color="#333" active-text-color="#ffd04b"
      @select="handleSelect">
      <span class="logo-span">logo</span>
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="job">找工作</el-menu-item>
      <el-menu-item index="enterprise">找企业</el-menu-item>
      <el-menu-item index="about">关于我们</el-menu-item>
      <div class="login-btn">
        <el-button @click="gotoLogin">登录</el-button>
      </div>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeIndex = ref('home')
const handleSelect = (type) => {
  switch (type) {
    case 'home':
      router.push({
        name: 'childHome'
      })
      break;
    case 'job':
      router.push({
        name: 'childJob'
      })
      break;
    case 'enterprise':
      router.push({
        name: 'childEnterprise'
      })
      break;
    case 'about':
      router.push({
        name: 'childAbout'
      })
  }
}
const gotoLogin = () => {
  router.push({
    name: 'mainLogin'
  })
}
</script>

<style lang="scss" scoped>
.logo-span {
  display: flex;
  width: 150px;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.login-btn {
  margin-right: 20px;
  display: flex;
  align-items: center;
}
</style>