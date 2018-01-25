<template>
  <div class="box">
    <view-box ref="viewBox" body-padding-bottom="53px">
      <div class="title">Box Page</div>
      <button class="jump-button" @click="goToNext()">NextPage</button>
    </view-box>
  </div>
</template>
<script>
  import{ViewBox} from 'vux';
  export default{
    data(){
      return{

      }
    },
    methods:{
      goToNext(){
        var vm = this;
        vm.$router.pushPage({
          name:'son'
        });
      }
    },
    components:{
      ViewBox
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
  .box{
    height: 100%;
  }
  .title{
    width: 100%;
    color: #1b1b1b;
    text-align: center;
    font-size: 1rem;
    margin-top: 10px;
  }
  .jump-button{
    width: 96%;
    height: 45px;
    background-color: #1b1b1b;
    color: #ffffff;
    margin-left: 2%;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
  }
</style>
