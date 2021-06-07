<template>
<div>
    <Signature  
    @confirm="confirm" 
    @clear="clear">
    </Signature>
    <p style="font-size:24px">Tips: 点击确认按钮,下方显示签名图片</p>
    <p class="demo-tips demo"></p>
</div>
</template>

<script>

import Signature from '@nutui/nutui/dist/packages/signature/signature'; 
import '@nutui/nutui/dist/packages/signature/signature.css'
 
export default {
    components: {
        Signature,
    },
    data(){
        return{
            //base64直接存放到数据库，已经是图片最简格式无法压缩
            image_src:'',
        }
    },
    methods:{
        confirm(canvas, data) {
            let img = document.createElement('img');
            img.src = data;
            document.querySelector('.demo').appendChild(img);
            //传值
            this.$parent.image_src = data;
            this.image_src = data;
        },
        clear() {
            let img = document.querySelector('.demo img'); 
            if (img) {
                img.remove();
            }
        }
    }
}
</script>
