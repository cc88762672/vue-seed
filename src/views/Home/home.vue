<template>
 <div class="home">
  <view-box ref="viewBox" body-padding-bottom="53px">
   <div class="title">Home Page</div>
   <div class="shelter">
     <div class="shelter-item" v-for="item in listData" @click="checkDetail(item)">
       <img class="portrait left-image" :src="item.image"/>
       <div class="description">{{item.msg}}</div>
     </div>
   </div>
  </view-box>
 </div>
</template>
<script>
import { ViewBox } from "vux";
import portraitA from "../../assets/images/home/a.jpeg";
import portraitB from "../../assets/images/home/b.jpeg";
import portraitC from "../../assets/images/home/c.jpeg";
export default {
  data() {
    return {
      listData: [
        {
          msg: "Welcome to vue seed project",
          image: portraitA
        },
        {
          msg: "This project is the combination of vue and vux",
          image: portraitB
        },
        {
          msg: "I do hope you like it",
          image: portraitC
        },
        {
          msg: "Welcome to vue seed project",
          image: portraitA
        },
        {
          msg: "This project is the combination of vue and vux",
          image: portraitB
        },
        {
          msg: "I do hope you like it",
          image: portraitC
        }
      ]
    };
  },
  methods: {
    checkDetail(item) {
      var vm = this;
      vm.$router.pushPage({
        name: "detail",
        params: {
          data: item
        }
      });
    }
  },
  components: {
    ViewBox
  }
};
</script>
<style scoped>
select:focus {
  outline: 0;
}
button:focus {
  outline: 0;
}
textarea:focus {
  outline: 0;
}
.home {
  height: 100%;
}
.title {
  width: 100%;
  color: #1b1b1b;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 10px;
}
.shelter {
  width: 96%;
  padding-top: 2%;
  margin-left: 2%;
  background-color: #ffffff;
  overflow: hidden;
}
.shelter-item {
  padding: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 1px solid #1b1b1b;
  border-radius: 5px;
  margin-bottom: 10px;
}
.shelter-item:active {
  opacity: 0.6;
  transition: all 0.1s linear;
}
.left-image {
  min-width: 80px;
}
.portrait {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.description {
  padding-left: 15px;
  color: #1b1b1b;
  font-size: 16px;
  text-align: left;
}
</style>
