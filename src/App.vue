<template>
  <div>
    <router-view/>
    <FooterGuide/>
  </div>
</template>
<script>
// 引入底部组件
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  // 注册组件
  components: {
    FooterGuide
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
