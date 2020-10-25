<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColoer="red">
      <img
        slot="item-icon"
        src="~assets/img/tabbar/main_1.svg"
        alt=""
        srcset=""
      />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/main_2.svg"
        alt=""
        srcset=""
      />
      <div slot="itme-text">
        首页
      </div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColoer="red">
      <img
        slot="item-icon"
        src="~assets/img/tabbar/clasify_1.svg"
        alt=""
        srcset=""
      />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/classify_2.svg"
        alt=""
        srcset=""
      />
      <div slot="itme-text">
        分类
      </div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColoer="red">
      <img
        slot="item-icon"
        src="~assets/img/tabbar/bugcar_1.svg"
        alt=""
        srcset=""
      />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/bugcar_2.svg"
        alt=""
        srcset=""
      />
      <div slot="itme-text">
        购物车
      </div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColoer="red">
      <img
        slot="item-icon"
        src="../../assets/img/tabbar/my_1.svg"
        alt=""
        srcset=""
      />
      <img
        slot="item-icon-active"
        src="../../assets/img/tabbar/my_2.svg"
        alt=""
        srcset=""
      />
      <div slot="itme-text">
        我的
      </div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped></style>
