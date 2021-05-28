/* eslint-disable vue/no-unused-components */

<template>
    <div>
        <router-view/>
        <tabbar v-show="$route.meta.showTabBar" ></tabbar>
    </div>
</template>


<script>
import tabbar from './views/TabBar.vue'

export default {
        components: {
            tabbar
            },
        methods: {},
    }
</script>
<style scoped>

</style>
