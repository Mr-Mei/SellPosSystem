<template>
  <div class="left-nav">
      <ul>
          <li>
            <i class="iconfont icon-goumai"></i>
            <div>收银</div>
          </li>
          <li>
            <i class="iconfont icon-jinrudianpu"></i>
            <div>店铺</div> 
          </li>
          <li>
            <i class="iconfont icon-hanbao"></i>
            <div>商品</div>
          </li>
          <li>
            <i class="iconfont icon-31huiyuanqia"></i>
            <div>会员</div>
          </li>
          <li>
            <i class="iconfont icon-zuanshi"></i>
            <div>统计</div>
          </li>
          <li>
            <i class="iconfont icon-gongnengjianyi"></i>
            <div>设置</div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'leftNav',
    data () {
        return{

        }
    }
}
</script>

<style>  /* 不需要加scoped，需要都在公共组件页面显示 */
    .left-nav{
        min-width: 5%;
        min-height: 100%;
        /* 背景颜色与饿了么相同 */
        background-color: #409eff; 
        font-size: 12px;
        color: #fff;
        float: left;
    }
    .iconfont{font-size: 24px;}
    .left-nav ul{
        margin: 0;
        padding: 0;
        }
    .left-nav ul li{
        list-style: none;
        text-align: center;
        padding: 10px;
        border-bottom: 1px solid rgb(40,159,254);
    }
</style>