<template>
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
</template>
<script>
  import Aside from '../components/layout/Aside'
  import Header from '../components/layout/Header'
  import Main from '../components/layout/Main'
  export default {
    data() {
      return {
      }
    },
    components: {
      Aside,
      Header,
      Main,
    }
  }
</script>
<style lang="scss" scoped>
  .el-header,
  .el-footer {
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding:0;
  }
  body>.el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>