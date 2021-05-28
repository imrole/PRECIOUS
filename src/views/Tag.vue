<!--标签图标-->
<template>
  <div class="md-example-child md-example-child-tag md-example-child-tag-0">
    <md-tag size="small" shape="circle" type="fill" fill-color="#FC7353" font-color="#fff">22</md-tag>
  </div>
</template>

<script>
import {Tag} from 'mand-mobile'

export default {
  name: 'tag-demo',
  components: {
    [Tag.name]: Tag
  },
}

</script>