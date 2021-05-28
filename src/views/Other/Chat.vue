<template>
  <div class="md-example-child md-example-child-tip md-example-child-tip-2">
      {{userId}}
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            userId:''
        }
    },
    mounted() {
        window.startLoading = this.startLoading
        this.startLoading()
    },
    methods: {
        startLoading() {
        // 取到路由带过来的参数
            const routerParams = this.$route.query.userId
            this.userId = routerParams
        },
    },
}

</script>
