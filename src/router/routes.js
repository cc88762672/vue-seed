import Vue from 'vue';
import Router from 'vue-router'
/**
 * 这里对Router的原型进行了二次封装
 * pushPage()用于进入新页面使用，forwardPage()用于返回上一界面使用
 * replacePage()用于替换当前界面使用
 * nextReload用于界面跳转时，在beforeRouteEnter中判断是否需要重新获取数据/执行初始化代码使用
 * */
Router.prototype.pushPage = function (param) {
  //this.currentRoute.meta.nextTransition = 'fade-in';
  this.currentRoute.meta.nextReload = true;
  this.push(param);
};
Router.prototype.forwardPage = function (nextReload) {
  //this.currentRoute.meta.nextTransition = 'fade-out';
  this.currentRoute.meta.nextReload = nextReload || false;
  this.back();
};
Router.prototype.replacePage = function (param) {
  //this.currentRoute.meta.nextTransition = 'fade-in';
  this.currentRoute.meta.nextReload = true;
  this.replace(param);
};
Vue.use(Router);

const Home = resolve => require(['../views/Home/home.vue'],resolve);
const Detail = resolve => require(['../views/Home/detail.vue'],resolve);
const Box = resolve => require(['../views/Box/box.vue'],resolve);
const Son = resolve => require(['../views/Box/son.vue'],resolve);
const routes = [
  {
    path: '/',
    redirect:{
      name:'home'
    },
    component: Home,
  },
  {
    path: '/home',
    name: 'home',
    params:{
     data:{}
    },
    component: Home,
  },
  {
    path: '/box',
    name: 'box',
    component: Box,
  },
  {
    path: '/box/son',
    name: 'son',
    component: Son,
  },
  {
    path: '/home/detail',
    name: 'detail',
    component: Detail,
  },
];

export default routes;
