import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//所有页面组件
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
//所有子组件
//主体信息栏子组件
import Main from '../components/layout/Main.vue'
//用户列表组件
import userList from '@/components/user/userList.vue'
// 用户信息分页组件
import userPaging from '@/components/user/userPaging.vue'
//图形表组件
import barChart from '../components/small/barChart.vue'
//左侧显示栏



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    //这是首页
    {path:'/',component:Home,
    },
    {path:'/Login',component:Login},
    {path:'/Main',component:Main},
    {path:'/userList',component:userList},
    {path:'/userPaging',component:userPaging},
    {path:'/barChart',component:barChart},
  ]
})
