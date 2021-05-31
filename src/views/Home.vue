<template>
  <div class="md-example-child md-example-child-action-bar md-example-child-0">
         <img src="https://img.zcool.cn/community/01ae8c5f60863811013e31873289b9.png@1280w_1l_2o_100sh.png"/>
    <md-action-bar :actions="data"></md-action-bar>
  </div>

</template>

<script>
import {ActionBar, Toast} from 'mand-mobile'

export default {
  name: 'action-bar-demo',
  components: {
    [ActionBar.name]: ActionBar,
  },
  data() {
    return {
      data: [
        {
          text: '注册',
          onClick: this.handleClick,
        },
        {
          text: '登录',
          onClick: this.handleClick,
        },
      ],
    }
  },
  methods: {
    handleClick() {
      Toast.succeed('Click')
    },
  },
}

</script>
<style lang="stylus" scoped>
.img
    height 100%
    width 100%
</style>
