<template>
<div>
  <TopTabBar></TopTabBar>
  <div class="md-example-child md-example-child-steps md-example-child-steps-7">
    <NoticeBar :msg="msg"></NoticeBar>
    <md-steps
      direction="vertical"
      :steps="steps"
      :current="3"
      vertical-adaptive
    >
    </md-steps>
  </div>
</div>
</template>

<script>
import {Steps, Icon} from 'mand-mobile'
import NoticeBar from '../Other/NoticeBar.vue'
import TopTabBar from '../Other/BackTabBar.vue'

export default {
  name: 'steps',
  components: {
    [Steps.name]: Steps,
    [Icon.name]: Icon,
    NoticeBar,
    TopTabBar,
  },
  data() {
    return {
      msg: "为了确保您的资金安全，请设置支付密码为了确保您的资金安全，请设置支付密码为了确保您的资金安全，请设置支付密码",
      steps: [
        {
          name: '登录',
          text: '这是登录的描述',
        },
        {
          name: '开通',
          text: '这是开通的描述',
        },
        {
          name: '验证',
          text: '这是验证的描述',
        },
        {
          name: '成功',
          text: '这是成功的描述',
        },
      ],
    }
  },
}

</script>

<style lang="stylus">
.md-example-child-steps-7 .md-steps
  height 420px
</style>
