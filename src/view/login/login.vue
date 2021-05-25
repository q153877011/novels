<template>
    <div class="login">
        <input-message/>
    </div>
</template>

<script>
import InputMessage from './loginView/input.vue'
export default {
    name: "login",
    components: {
        InputMessage,
    },
}
</script>

<style>
.login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
}
</style>