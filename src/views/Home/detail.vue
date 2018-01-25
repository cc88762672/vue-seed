<template>
  <div class="detail">
    <x-header title="Page3" :left-options="{backText:'Back',preventGoBack:'true'}" @on-click-back="goBack()"></x-header>
    <view-box ref="viewBox">
      <div class="title">Page3</div>
      <div class="shelter-item">
        <img class="portrait left-image" :src="detailInfo.image"/>
        <div class="description">{{detailInfo.msg}}</div>
      </div>
    </view-box>
  </div>
</template>
<script>
  import{ViewBox,XHeader} from 'vux';
  export default{
    data(){
      return{
        detailInfo:{}
      }
    },
    methods:{
      goBack(){
        var vm = this;
        vm.$router.forwardPage();
      }
    },
    components:{
      ViewBox,
      XHeader
    },
    beforeRouteEnter(to,from,next){
      next((vm)=>{
        if(from.meta.nextReload){
          vm.detailInfo = vm.$route.params.data;
        }
      });
    },
    mounted(){
      /**
      *  由于路由中所有界面是keepAlive的
       * 那么从前一界面获取数据 或 向服务端请求数据时的代码不建议写在mounted中
       * 因为keepAlive的界面中，mounted中的代码只会执行第一次，以后每次都不会再执行了
       * 建议写在beforeRouteEnter中，并且通过meta.nextReload来控制界面是否刷新
       * 这里已经针对页面跳转进行了二次封装
      **/
    }
  };
</script>
<style scoped>
  select:focus{
    outline: 0;
  }
  button:focus{
    outline: 0;
  }
  textarea:focus{
    outline: 0;
  }
  .detail{
    height: 100%;
  }
  .title{
    width: 100%;
    color: #1b1b1b;
    text-align: center;
    font-size: 1rem;
    margin-top: 10px;
  }
  .back-button{
    width: 96%;
    height: 45px;
    background-color: #ffffff;
    color: #1b1b1b;
    border: 1px solid #1b1b1b;
    margin-left: 2%;
    margin-top: 10px;
    border-radius: 5px;
  }
  .shelter-item{
    width:96%;
    margin-left: 2%;
    margin-top: 10px;
    padding: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 1px solid #1b1b1b;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .shelter-item:active{
    opacity: 0.6;
    transition: all .1s linear;
  }
  .portrait{
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .description{
    padding-left: 15px;
    color: #1b1b1b;
    font-size: 16px;
    text-align: left;
  }
  .left-image{
    min-width: 80px;
  }
</style>
