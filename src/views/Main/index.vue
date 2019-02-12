<template>
  <div class="views WH">
    <router-view class="view-container" />
    <div class="footer">
      <router-link v-for="(item, index) in footer"
        :key="index"
        :to="item.to"
        tag="span">
        <img :src="item.icon">
        <b>{{ item.name }}</b>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'views',
  data () {
    return {
      footer: [
        { name: '首页', icon: require('@img/home.png'), to: { name: 'Home' } },
        { name: '数据', icon: require('@img/data.png'), to: { name: 'Data' } }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.views {
  display: flex;
  flex-direction: column;
  .view-container {
    flex-grow: 1;
  }
  .footer {
    width: 100%;
    height: 98px;
    display: flex;
    box-shadow:0px -1px 1px rgba(0,0,0,.1); /*no*/
    span {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: 27px;
        height: 28px;
      }
      b {
        font-size: 22px;
        font-weight: normal;
        color: #333;
      }
    }
  }
}
</style>
