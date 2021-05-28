<!--导航栏-->
<template>
  <div class="md-example-child md-example-child-tabs md-example-child-tab-bar-4" style="position:fixed;bottom:0;width:100%">
    <md-tab-bar
      v-model="current"
      :items="items"
      :has-ink="false"
    >
      <template slot="item" slot-scope="{ item }">
          <div class="custom-item" @click="Request(item.to)">
            <div class="icon">
              <md-icon :name="item.icon" />
            </div>
            <div class="text">
              <span v-text="item.label"></span>
            </div>
          </div>
      </template>
    </md-tab-bar>
  </div>
</template>

<script>
import {TabBar, Icon} from 'mand-mobile'

export default {
  name: 'tab-bar',
  components: {
    [TabBar.name]: TabBar,
    [Icon.name]: Icon
  },
  data() {
    return {
      current: 1,
      items: [
          {name: 1, label: '消息', icon: 'wait', to: 'wait'},
          {name: 2, label: '通信录', icon: 'address-book',to: 'address'},
          {name: 3, label: '功能', icon: 'order',to: 'order'},
          {name: 4, label: '我的', icon: 'user',to: 'user'}
      ],
    }
  },
  methods:{
    Request:function(where){
      this.$router.push({name:where})
    }
  }
}

</script>

<style lang="stylus">
.md-example-child-tab-bar-4
.router-link-active 
    text-decoration: none
  .custom-item
    display flex
    flex-direction column
    align-items center
    justify-content center
    height 100%
    flex 1
    .text
      font-size 20px
</style>