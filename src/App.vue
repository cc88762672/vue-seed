<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
       <router-view></router-view>
      </keep-alive>
    </transition>
    <transition name="bani">
    <tabbar v-if="showTab">
     <tabbar-item v-for="(item,index) in appTabsData" :selected="item.selected" :key="item.route" :link="item.link">
      <img slot="icon" :src="item.icon"/>
      <img slot="icon-active" :src="item.activeIcon"/>
      <span slot="label">{{item.name}}</span>
     </tabbar-item>
    </tabbar>
    </transition>
  </div>
</template>
<script>
  /* eslint-disable */
  import {Tabbar, TabbarItem, XHeader} from 'vux';
  import main from './assets/images/tab/main.png';
  import main2 from './assets/images/tab/main2.png';
  import sys from './assets/images/tab/sys.png';
  import sys2 from './assets/images/tab/sys2.png';
  export default {
    name: 'app',
    data(){
      return{
        transitionName:'fade-in',
        showTab:true,
        appTabsData:[
          {
            route:'home',
            selected:true,
            link:{path:'/home'},
            icon:main2,
            activeIcon:main,
            name:'Home'
          },
          {
            route:'box',
            selected:false,
            link:{path:'/box'},
            icon:sys2,
            activeIcon:sys,
            name:'Box'
          }
        ]
      }
    },
    watch:{
     '$route.name'(){
       var vm = this;
       if(vm.$route.name!='home' && vm.$route.name!='box'){
         vm.showTab = false;
       }else{
         switch(vm.$route.name){
           case'home':
           vm.appTabsData[0].selected = true;
           vm.appTabsData[1].selected = false;
           break;
           case 'box':
           vm.appTabsData[0].selected = false;
           vm.appTabsData[1].selected = true;
           break;
         }
         vm.showTab = true;
       }
     },
     '$route'(to,from){
       let vm = this;
       const toDepth = to.path.split('/').length;
       const fromDepth = from.path.split('/').length;
       if(toDepth == fromDepth){
         vm.transitionName = '';
       }else{
         vm.transitionName = toDepth < fromDepth ? 'fade-in':'fade-out';
       }
     },
    },
    components:{
      Tabbar,
      TabbarItem,
      XHeader
    }
  };
</script>

<style lang="scss">
  @import './assets/fonts/iconfont/iconfont.css';
  @import './assets/scss/app.scss';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    overflow:hidden;
  }
  a{
    text-decoration: none;
  }
  p{
    margin: 0;
  }
  body,html{
    height: 100%;
  }
  .vux-header{
    background-color: #1b1b1b !important;
    color: #ffffff !important;
  }
  .vux-header .vux-header-left, .vux-header .vux-header-right{
    color: #ffffff !important;
  }
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i,
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
   color: #1b1b1b !important;
  }
  .weui-tabbar__label{
    color: #999999;
  }

  .fade-in-enter-active,
  .fade-out-enter-active,
  .fade-in-leave-active,
  .fade-out-leave-active{
    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .fade-out-enter,.fade-in-leave-to{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  .fade-in-enter,.fade-out-leave-to{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-transform: translate3d(-100, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
</style>

