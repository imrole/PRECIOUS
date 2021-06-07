<template>
  <div class="md-example-child md-example-child-agree md-example-child-1">
    <md-agree
      v-model="agreeConf.checked"
      :disabled="agreeConf.disabled"
      :size="agreeConf.size"
      @change="onChange(agreeConf.name, agreeConf.checked, $event)"
    >
      本人承诺本人已充分了解本产品，并保证信息的真实性，理解并同意
    </md-agree>
  </div>
</template>

<script>
import {Agree} from 'mand-mobile'

export default {
  name: 'agree-demo',
  components: {
    [Agree.name]: Agree,
  },
  data() {
    return {
      agreeConf: {
        checked: false,
        name: 'agree1',
        size: 'md',
        disabled: false,
      },
    }
  },
  methods: {
    onChange() {
      this.$parent.checked = this.agreeConf.checked;
    },
  },
}

</script>
<style lang="stylus">
.md-agree
  font-size 24px
</style>