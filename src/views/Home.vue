<template>
  <div class="md-example-child md-example-child-action-bar md-example-child-0">
    <md-action-bar :actions="data"></md-action-bar>
  </div>

</template>

<script>
import {ActionBar} from 'mand-mobile'

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
          onClick: this.register,
        },
        {
          text: '登录',
          onClick: this.login,
        },
      ],
    }
  },
  methods: {
    register() {
      this.$router.push({name:'register'});
    },
    login(){
      this.$router.push({name:'login'});
    }
  },
}

</script>
