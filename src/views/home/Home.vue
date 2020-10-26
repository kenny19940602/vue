<template>
  <div id="home">
    <!-- <h1>首页</h1> -->
    <nav-bar class="home-nav"
      ><div slot="center">购物街</div>
      <div slot="right"></div>
      <div slot="left"></div
    ></nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import { getHomeMultidata } from 'network/home'
export default {
  name: 'Home',
  components: {
    NavBar
  },
  data(){
    return{
      result:null
    }
  },
  created() {
    //1 请求多个数据
    getHomeMultidata().then(res => {
      console.log(res)
      this.result = res
    console.log(this.result)

    })
  }
}
</script>
<style scoped>
.home-nav {
  background-color: palevioletred;
  color: white;
}
</style>
