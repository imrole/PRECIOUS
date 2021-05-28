<!--消息-->
<template>
  <div class="md-example-child md-example-child-skeleton md-example-child-skeleton-2">
    <md-field>
        <md-cell-item title="消息">
            <md-icon name="search" slot="right"/>
        </md-cell-item>
        <md-skeleton avatar title :loading="loading" :row="2" class="skeleton-item">
            <md-cell-item v-for="item in items" :key="item.userId" :title="item.label" brief="描述" @click="ToChat(item.userId)">
                <md-tag size="large" shape="circle" type="fill" fill-color="#FC7353" font-color="#fff" slot="right">10</md-tag>
                <span class="holder" slot="left"></span>
            </md-cell-item>
        </md-skeleton>
    </md-field>
  </div>
</template>

<script>
import {Skeleton, Field, CellItem, Icon, Tag} from 'mand-mobile'
export default {
  data() {
    return {
        loading: true,
        items: [
            {userId: 1, label: '李**'},
            {userId: 2, label: '王**'},
            {userId: 3, label: '张**'},
            {userId: 4, label: '马**'}
        ]
    }
  },
  components: {
    [Skeleton.name]: Skeleton,
    [Field.name]: Field,
    [CellItem.name]: CellItem,
    [Icon.name]: Icon,
    [Tag.name]:Tag
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
    ToChat:function(userId){
      this.$router.push({name:'ToChat',query: {userId:userId}})
    }
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
