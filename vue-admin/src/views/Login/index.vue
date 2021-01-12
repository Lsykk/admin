<template>
    <div id="login" class="login" :style="'background-image:url('+ Background +');'">
        <el-form class="login_form">
            <h3 class="title">
                嘉悦后台管理系统
            </h3>
            <div>
                <el-input placeholder="请输入内容" prefix-icon="el-icon-user-solid" v-model="input1" style="margin-bottom: 20px;"></el-input>
                <el-input placeholder="请输入内容" prefix-icon="el-icon-s-goods" v-model="input2" style="margin-bottom: 20px;"></el-input>
            </div>
            <el-form-item style="width:100%;">
                <el-button size="medium" type="primary" style="width:100%; margin-bottom: 20px" @click="Login">
                    <span>登 录</span>
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import Background from '@/assets/images/background.jpg'
import Accounticon from '@/assets/icons/svg/user1.svg'
export default {
    name: 'Login',
    data() {
        return {
            input1: '',
            input2:'',
            Background: Background,
            loading: false,
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        Login() {
            // alert(111);
            // this.$router.push({ path:'/dashboard.vue'})
            if ( this.input1 == "admin" && this.input2 == "123456"){
                this.$message({
                message: '登录成功',
                type: 'success'
                });
                this.$router.push({ path: '/Dashboard' })
            }
            else{
                this.$message.error('密码错误，请重新输入');
                this.input1 = '',
                this.input2 = ''
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>
    #login {
        background-color: #304156;
        height: 100vh;
    }
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-size: cover;
    }
    .login_form {
        border-radius: 6px;
        background: #ffffff;
        width: 385px;
        padding: 25px 25px 5px 25px;
    }
    .title {
        margin: 0 auto 30px auto;
        text-align: center;
        color: #707070;
        font-weight: 600;
        font-size: larger;
    }
    .account-icon {
        width: 20px;
        height: 20px;
        float: left;
        // background-color: red;
        background-image: url("../../assets/icons/svg/user.svg");
    }
</style>