<!--返回组件（顶部导航）-->
<template>
    <div class="m-icon">
        <md-icon name="arrow-left" slot="left" @click="$router.back()"/>
    </div>
</template>
<script>
import {Icon} from 'mand-mobile'

export default {
  components: {
    [Icon.name]: Icon,
  },
}

</script>

<style lang="stylus">
.m-icon
  border-left 20px
  padding-left 20px
  margin-left 20px
</style>