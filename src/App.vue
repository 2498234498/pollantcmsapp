<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { setStatusBarStyle } from '@util'
export default {
  name: 'App',
  watch: {
    // 设置状态栏前景色为黑色
    $route: {
      handler (to, from) {
        if (to.name === 'Login') {
          setStatusBarStyle('dark')
        } else {
          setStatusBarStyle()
        }
      },
      immediate: true
    }
  }
}
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
