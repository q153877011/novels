<template>
    <div class="registered">
        <div class="content">
            <div class="registered-tip">请进行账号注册</div>
            <el-form :model="userMessage" label-width="100px" :rules="registeredRules">
                <el-form-item label="账户：" prop="userName">
                    <el-input placeholder="请输入注册账户" v-model="userMessage.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input placeholder="请输入注册密码" type="password" v-model="userMessage.password"></el-input>
                </el-form-item>
                 <el-form-item label="确认密码：" prop="passwordSecond">
                    <el-input placeholder="请再次确认密码" type="password" v-model="userMessage.passwordSecond"></el-input>
                </el-form-item>
                <el-form-item label="Email：" prop="Email">
                    <el-input placeholder="请输入注册邮箱" v-model="userMessage.Email"></el-input>
                </el-form-item>
                <div class="registeredBtn">
                    <el-button width="100px" @click="registered">注册</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'registered',
    data() {
        let validatePass = (rule, value, callback) => {
            if(value !== this.userMessage.userName)
                callback(new Error("两次密码不一致"));
            else 
                callback();
        };
        return {
            
            userMessage: {
                userName: '',
                password: '',
                passwordSecond: '',
                Email: ''
            },
            
            registeredRules: {
                userName: [
                    {required: true, message:"用户名不能为空", trigger: 'blur'},
                ],
                password: [
                    {required: true, message:"密码不能为空", trigger: 'blur'},
                ],
                passwordSecond: [
                    {required: true, validator: validatePass, trigger: 'blur'}
                ],
                Email: [
                    {required: true, message: "邮箱不能为空", trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        registered() {

        }
    }
}
</script>

<style>
.content {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0,0,0,.04);

}
.el-input {
    width: 250px;
}
.content {
    width: 400px;
    height: 400px;
    margin: 10px;
    background-color: rgb(238, 234, 234);
}
.registered-tip {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: large;
    margin-bottom: 20px;
    padding-top: 15px;
    text-align: center;
    font-weight: bold;
}
.registered {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.registeredBtn{
    text-align: center;
    margin-left: 0 !important;
}
</style>