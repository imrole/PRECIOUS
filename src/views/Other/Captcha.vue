<!--身份码组件-->
<template>
  <div class="md-example-child md-example-child-codebox md-example-child-codebox-0">
    <md-codebox
      v-model="code"
      :maxlength="4"
      autofocus
    />
    <br/>
    <ActionSheet/>
  </div>
</template>

<script>
import {Codebox} from 'mand-mobile'
import ActionSheet from './ActionSheet.vue'

export default {
  name: 'codebox-demo',
  components: {
    [Codebox.name]: Codebox,
    ActionSheet,
  },
  data() {
    return {
      code: '',
    }
  },
}

</script>
