<template>
    <div class="home">
        <div class="homeContent">
            <home-menu></home-menu>
            <div class="sonView">
                <router-view></router-view>
            </div>
            
        </div>
    </div>
</template>

<script>
import HomeMenu from './homeView/HomeMenu.vue'

export default {
    name: "home",
    components: {
        HomeMenu
    }
}
</script>

<style>
.sonView {
    padding: 10px;
    /* background: red; */
}
</style>