<template>
  <div id="app">
    <!-- 左侧导航 -->
    <leftNav/>
    <!-- 操作区域 -->
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'

export default {
  name: 'App',
  components:{
    leftNav
  },
  data(){
    return{
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%;
}
.main{
  width: 95%;   /* 设置宽度，注意左边导航栏占5% */
  height: 100%;
  float: left;
  background-color: rgb(239,242,247);
  overflow: auto;
}
</style>
