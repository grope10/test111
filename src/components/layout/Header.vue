<template>
  <el-menu :default-active="activeIndex2" mode="horizontal" @select="handleSelect"
    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1" class="header_page">首页</el-menu-item>
    <el-submenu index="2" class="header_login">
      <template slot="title">个人中心</template>
      <el-menu-item index="2-1">我的消息</el-menu-item>
      <el-menu-item index="2-2">设置</el-menu-item>
      <el-menu-item index="2-3">退出</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        debugger
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss" scoped>
.header_page{
  float:left
}
.header_login{
  float: right;
}
</style>