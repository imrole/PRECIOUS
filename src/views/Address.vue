<!--通讯录-->
<template>
  <div class="md-example-child md-example-child-skeleton md-example-child-skeleton-2">
    <md-field>
        <md-cell-item title="通讯录">
            <md-icon name="edit" slot="right"/>
        </md-cell-item>
        <md-skeleton avatar title :loading="loading" :row="2" class="skeleton-item">
            <md-cell-item v-for="item in items" :key="item.id" :title="item.label" brief="描述" addon="备注" >
                <span class="holder" slot="left"></span>
            </md-cell-item>
        </md-skeleton>
    </md-field>
  </div>
</template>

<script>
import {Skeleton, Field, CellItem, Icon} from 'mand-mobile'
export default {
  data() {
    return {
        loading: true,
        items: [
            {id: 1, label: '李**'},
            {id: 2, label: '王**'},
            {id: 3, label: '张**'},
            {id: 4, label: '马**'}
        ]
    }
  },
  components: {
    [Skeleton.name]: Skeleton,
    [Field.name]: Field,
    [CellItem.name]: CellItem,
    [Icon.name]: Icon,
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
