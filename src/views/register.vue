<template>
  <div class="md-example-child md-example-child-input-item-0">
    <back-tab-bar/>
    <md-field>
      <md-input-item
        title="用户名"
        placeholder="用户名"
        is-highlight
        v-model="userName"
      ></md-input-item>
      <md-input-item
        title="密码"
        type="password"
        placeholder="密码"
        is-highlight
        v-model="passWord"
      ></md-input-item>
      <md-input-item
        title="身份识别码"
        placeholder="身份识别码"
        is-virtual-keyboard
        virtual-keyboard-vm="myNumberKeyBoard"
        clearable
        v-model="code"
        :maxlength="4"
      ></md-input-item>
      <md-number-keyboard 
      type="simple" 
      ref="myNumberKeyBoard">
      </md-number-keyboard>
      <br/>
      <md-button type="default" round>取消</md-button>
      <md-button type="primary" round @click="register()">注册</md-button>
    </md-field>
    <Agree></Agree>
  </div>
</template>

<script>
import {InputItem,NumberKeyboard,Field,Button,Dialog} from 'mand-mobile'
import Agree from './Other/Agree.vue'
import BackTabBar from './Other/BackTabBar.vue'

export default {
  name: 'input-item-demo',
  components: {
    [InputItem.name]: InputItem,
    [Field.name]: Field,
    [Button.name]:Button,
    [NumberKeyboard.name]:NumberKeyboard,
    Agree,
    BackTabBar,
  },
  methods:{
    register:function(){
      if(this.checked){
        this.$router.push({name:'wait'})
      }
      else{
        Dialog.alert({
          content: '请阅读并同意用户协议',
        });
      }
    }
  },
  data() {
    return {
      code: '',
      userName:'',
      passWord:'',
      checked:'',
    }
  },
}

</script>