<!-- <template>
  <el-form :model="loginFrom" :rules="rules" class="demo-ruleForm login-container" label-position="right">
    <div>
      <h3 class="login_title">后台管理系统</h3>
    </div>
    <el-form-item label="用户名" prop="account">
      <el-input type="text" placeholder="请输入用户名" auto-complete="off" v-model="loginFrom.loginName" class="login_input" clearable></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="checkPass">
      <el-input type="password" placeholder="请输入密码" auto-complete="off" v-model="loginFrom.loginPassword" class="login_input" clearable>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="loginBtn" @click.native.prevent="handleSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        loginFrom: {
          loginName: "admin",
          loginPassword: "123456"
        },
        //验证用户名和密码是否输入
        rules: {
          account: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {

    }
  }
</script>
<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    width: 350px;
    border: 1px solid #eaeaea;
    background: #2d3a4b;
    background-clip: padding-box;    
    margin: 180px auto;
    padding:35px 35px 15px 15px;
  }
  .login_title{
    display:block;
    margin: 0px auto 40px auto;
    text-align: center;
    color: #fff;
  }
  .login_input{
    font-size:20px;
  }
  .loginBtn{
    width:100%;
    font-size:20px;
    /*文字之间的间距*/
    letter-spacing: 10px;
  }
</style> -->


<template>
  <div class="login-box" :rules="loginFormRules" ref="loginForm" :model="loginForm" label-width="auto">
    <el-form>
      <span class="login-title">欢迎登陆</span>
      <!--用户名-->
      <el-form-item label="用户名" prop="loginName" label-width="60px">
        <el-col :span="20">
          <el-input type="text" v-model="loginForm.loginName"></el-input>
        </el-col>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item label="密码" prop="loginPassword" label-width="60px">
        <el-col :span="20">
          <el-input type="password" v-model="loginForm.loginPassword"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item style="text-align: center;">
        <el-button type='primary' @click="loginSubmin">登陆</el-button>
        <el-button type="primary" @click="onRegit">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        loginForm: {
          loginName: 'admin',
          loginPassword:'123456'
        },
        //表单的验证
        loginFormRules:{
          loginName:[
            {required:true,message:"用户名不能为空",trigger:"blur"}
          ],
          loginPassword:[
            {required:true,message:"密码不能为空",trigger:"blur"}
          ]
        }
      }
    },
    methods:{
      loginSubmin(){
        // console.log(111);
        var u=this.loginName;
        var p=this.loginPassword;
        var reg=/^[a-z0-9]{3,8}$/i;
        if(reg.test!=u){
          this.$router.replace("/");
        }else{
          this.$message("用户名或密码不正确");
          return false;
        }
        if(reg.test!=p){
          this.$message("用户名或密码不正确");
        }
      },
      onRegit(){
        console.log(456);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .login-box {
    width: 350px;
    height: 200px;
    background: #2D3A4B;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 200px auto;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    padding: 35px 15px;
    /*box-shadow:阴影部分*/
    box-shadow: 0 0 25px palegreen;
  }

  /* 登录标题 */
  .login-title {
    display: block;
    text-align: center;
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    padding-bottom: 12px;
    letter-spacing: 5px;
  }
  /* 用户名和密码的样式 */
  /* 登陆和注册按钮 */
  .el-button{
    background-color:#46A6FF;
    border:1px solid #46A6FF;
    color:#fff;
    font-weight: bolder;
    /* letter-spacing:字体之间的间距*/
    letter-spacing: 2px;
  }
</style>