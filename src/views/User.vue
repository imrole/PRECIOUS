<!--用户-->
<template>
  <div class="md-example-child md-example-child-cell-item md-example-child-cell-item-2">
    <md-field>
        <md-cell-item title="User Demo" brief="标签">
           <span class="holder" slot="left"></span>
        </md-cell-item>
        <md-cell-item v-for="item in items" :key="item.id" :title="item.label" :brief="item.to" addon="操作" arrow @click="Request(item.to)"/>
    </md-field>
  </div>
</template>

<script>
import {Field, CellItem, Switch} from 'mand-mobile'

export default {
  name: 'cell-item-demo',
  components: {
    [Field.name]: Field,
    [CellItem.name]: CellItem,
    [Switch.name]: Switch,
  },
  data() {
    return {
      open: false,
      items:[
          {id: 1, label: '个人信息', to: 'Pay'},
          {id: 2, label: '申请记录', to: 'Bill'},
          {id: 3, label: '审批进度', to: 'Approve'}
      ]
    }
  },
  methods:{
      Request:function(where){
      this.$router.push({name:where})
    }
  }
}

</script>

<style lang="stylus" scoped>
.holder
  display block
  width 88px
  height 88px
  border-radius 44px
  background-color #E6E6E6
</style>