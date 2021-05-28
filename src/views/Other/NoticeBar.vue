<!--提示框-->
<template>
  <div class="md-example-child md-example-child-notice-bar md-example-child-notice-bar-6">
    <md-notice-bar
      mode="closable"
      icon="volumn"
      scrollable
    >
      {{msg}}
    </md-notice-bar>
  </div>
</template>

<script>
import {NoticeBar} from 'mand-mobile'

export default {
    props: ["msg"],
    name: 'notice-bar',
    components: {
        [NoticeBar.name]: NoticeBar,
    },
}

</script>
