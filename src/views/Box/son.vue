<template>
  <div class="son">
    <view-box ref="viewBox">
      <div class="title">Page4</div>
      <button class="back-button" @click="goBack()">Go Back</button>
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
      goBack(){
        var vm = this;
        vm.$router.forwardPage();
      }
    },
    components:{
      ViewBox
    },
    beforeRouteEnter(to,from,next){
      next((vm)=>{
        if(from.meta.nextReload){

        }
      });
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
  .son{
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
</style>
