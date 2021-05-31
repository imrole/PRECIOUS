<template>
  <div class="md-example-child md-example-child-action-sheet">
    <md-button @click="$_showActionSheet">确定</md-button>
    <md-action-sheet
      v-model="value"
      :title="title"
      :default-index="defaultIndex"
      :invalid-index="invalidIndex"
      :cancel-text="cancelText"
      :options="options"
      @selected="$_selected"
      @cancel="$_cancel"
    ></md-action-sheet>
  </div>
</template>

<script>
import {ActionSheet, Button, Dialog} from 'mand-mobile'

export default {
  name: 'action-sheet-demo',
  height: 500,
  components: {
    [ActionSheet.name]: ActionSheet,
    [Button.name]: Button,
  },
  data() {
    return {
      value: false,
      title: '选择以下操作',
      options: [
        {
            label: '提交',
            value: 0,
            goto:'/test/url',
        },
      ],
      defaultIndex: 1,
      invalidIndex: 2,
      cancelText: '取消',
    }
  },
  methods: {
    $_showActionSheet() {
      this.value = true
    },
    $_selected(item) {
      Dialog.alert({
        content:item.goto,
        //content: `selected: ${JSON.stringify(item)}`,
      })
      console.log('action-sheet selected:', JSON.stringify(item))
    },
    $_cancel() {
      Dialog.alert({
        content: 'cancel',
      })
      console.log('action-sheet cancel')
    },
  },
}
</script>
