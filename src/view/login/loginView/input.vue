<template>
    <div class="input">
        <div class="login-tip">
            <p>用户请登录！</p>
        </div>
        <el-form ref="message" :model="message" label-width="80px" :rules="loginRules">
            <el-form-item label="账号:" prop="name">
                <el-input v-model="message.name" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
                <el-input v-model="message.password" type="password" 
                    placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button round type="success" @click='submit()'>提交</el-button>
                <el-button type="warning" id='registered' @click="registered()">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'input',
    data() {
        return {
            message: {
                name: "",
                password: "",
            },
            loginRules: {
                name: [
                    {required: true, message:"用户名不能为空", trigger: 'blur'},
                ],
                password: [
                    {required: true, message:"密码不能为空", trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        submit() {
            this.$router.push("/home");
        },
        registered() {
            this.$router.push('/registered');
        }
    }
}
</script>

<style scoped>
.el-input {
    width: 250px;
}
.el-form-item {
    font-size: 25px;
}
#registered {
    margin-left: 50px;
}
.login-tip {
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
}
.input {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0,0,0,.04);
    padding: 10px;
    /* margin: 20px auto; */
    width: 400px;
    height: 250px;

    /* position: absolute; */
    /* top: 50%;
    left: 50%;
    margin: -10px 0 0 -200px; */
}
</style>