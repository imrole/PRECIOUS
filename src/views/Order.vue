<!--功能-->
<template>
  <div class="md-example-child md-example-child-skeleton md-example-child-skeleton-2">
    <md-field>
      <md-skeleton avatar title :loading="loading" :row="2" class="skeleton-item">
        <!-- 第一版
        <md-cell-item title="功能">
            <md-icon name="edit" slot="right"/>
        </md-cell-item>
        -->
        <OrderTopTabBar></OrderTopTabBar>
        <md-cell-item title="交通银行" brief="展示摘要描述" addon="附加文案" arrow>
          <span class="holder" slot="left"></span>
        </md-cell-item>
      </md-skeleton>
      <md-skeleton avatar title :loading="loading" :row="2" class="skeleton-item">
        <md-cell-item title="招商银行" brief="展示摘要描述" addon="附加文案" arrow>
          <span class="holder" slot="left"></span>
        </md-cell-item>
      </md-skeleton>
    </md-field>
  </div>
</template>

<script>
import {Skeleton, Field, CellItem ,Icon} from 'mand-mobile'
import OrderTopTabBar from './OrderTopTabBar.vue'
export default {
  name: 'skeleton-demo',
  data() {
    return {
      loading: true,
    }
  },
  components: {
    [Skeleton.name]: Skeleton,
    [Field.name]: Field,
    [CellItem.name]: CellItem,
    [Icon.name]:Icon,
    [OrderTopTabBar.name]:OrderTopTabBar,
  },
  mounted() {
    window.startLoading = this.startLoading
    this.startLoading()
  },
  methods: {
    startLoading() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      })
    },
  },
}

</script>

<style lang="stylus" scoped>
.md-example-child-skeleton-2
  margin 30px 0
.skeleton-switch
  margin-bottom 32px
.skeleton-item
  &:last-child
    margin-bottom 0
  margin-bottom 24px
.md-cell-item
  &.skeleton-item
    margin-bottom 0
.holder
  display block
  width 80px
  height 80px
  border-radius 50%
  background-color #e6e6e6
</style>