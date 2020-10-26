<template>
  <div id="home">
    <!-- <h1>首页</h1> -->
    <nav-bar class="home-nav"
      ><div slot="center">购物街</div>
      <div slot="right"></div>
      <div slot="left"></div
    ></nav-bar>

    <swiper>
      <swiper-item v-for="(item, key) in banners" :key="key">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";

import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      result: null,
      banners: [
        {
          link: "baidu",
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603736250095&di=f6197a376fa8e3637c30124f8540874c&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F70%2F91%2F01300000261284122542917592865.jpg"
        },
        {
          link: "baidu1",
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603736250095&di=f6197a376fa8e3637c30124f8540874c&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F70%2F91%2F01300000261284122542917592865.jpg"
        },
        {
          link: "baidu2",
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603736250095&di=f6197a376fa8e3637c30124f8540874c&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F70%2F91%2F01300000261284122542917592865.jpg"
        },
        {
          link: "baidu3",
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603736250095&di=f6197a376fa8e3637c30124f8540874c&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F70%2F91%2F01300000261284122542917592865.jpg"
        }
      ],
      recommends: []
    };
  },
  created() {
    //1 请求多个数据
    getHomeMultidata().then(res => {
      console.log(res);
      this.result = res;
      console.log(this.result);
    });
  }
};
</script>
<style scoped>
.home-nav {
  background-color: palevioletred;
  color: white;
}
</style>
