<template>
    <div id="login" class="login" :style="'background-image:url('+ Background +');'">
        <el-form class="login_form">
            <h3 class="title">嘉悦后台管理系统</h3>
            <div>
                <el-input placeholder="请输入内容" prefix-icon="el-icon-user-solid" v-model="loginruleForm.loginname" style="margin-bottom: 20px;"></el-input>
                <el-input placeholder="请输入内容" prefix-icon="el-icon-s-goods" v-model="loginruleForm.loginpass" show-password style="margin-bottom: 20px;"></el-input>
            </div>
            <el-form-item style="width:100%;">
                <el-button size="medium" type="primary" style="width:100%; margin-bottom: 20px" @click="Login">
                    <span>登 录</span>
                </el-button>
                <el-button type="text" class="register" @click="registeruserClick()">点我注册</el-button>
            </el-form-item>
        </el-form>
        <!-- 用户注册弹框 -->
             <el-dialog title="注册账号" :visible.sync="dialogVisible">
                <el-form :model="form"  :rules="rules" ref="form" label-width="66px">
                    <el-form-item label="手机" prop="phone_number" class="dialogform">
                        <el-input v-model.number="form.phone_number" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password" class="dialogform">
                        <el-input v-model.number="form.password" />
                    </el-form-item>
                    <el-form-item label="昵称" prop="nickname" class="dialogform">
                    <el-input v-model="form.nickname" />
                    </el-form-item>
                    <div>
                        <el-form-item label="手机验证码" class="dialogform ver_code code_left">
                            <el-input v-model="form.sms_code" placeholder="请输入验证码"></el-input>
                        </el-form-item>
                        <el-form-item class="code_right">
                            <el-button type="primary" size="small" @click="SendSmCode">获取验证码</el-button>
                        </el-form-item>
                    </div>

                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false" class="el-button--text el-button--small">取 消</el-button>
                    <el-button type="primary" @click="SignUp()" class="el-button--small">确 定</el-button>
                </div>
            </el-dialog>
    </div>
</template>
<script>
import { isvalidPhone } from "@/utils/validate";
import Background from '@/assets/images/background.jpg'
import Accounticon from '@/assets/icons/svg/user1.svg'
import api from '@/api/index.js'
// import { UserLogin } from '@/api/login'
export default {
    name: 'Login',
    data() {
        // 自定义验证
        const validPhone = (rule, value, callback) => {
        if (!value) {
            callback(new Error("请输入电话号码"));
        } else if (!isvalidPhone(value)) {
            callback(new Error("请输入正确的11位手机号码"));
        } else {
            callback();
        }
        };
        return {
            loginruleForm: {
                loginname: "",
                loginpass: ""
            },
            result:'',
            Background: Background,
            loading: false,
            dialogVisible: false,
            rules: {
                nickname: [
                { required: true, message: "请输入用户昵称", trigger: "blur" },
                {
                    min: 2,
                    max: 20,
                    message: "长度在 2 到 20 个字符",
                    trigger: "blur",
                },
                ],
                 password: [
                { required: true, message: "请输入用户昵称", trigger: "blur" },
                {
                    min: 2,
                    max: 20,
                    message: "长度在 2 到 20 个字符",
                    trigger: "blur",
                },
                ],
                phone_number: [{ required: true, trigger: "blur", validator: validPhone }],
                sms_code: [
                { required: true, message: "请输入验证码", trigger: "blur" },
                {
                    min: 2,
                    max: 20,
                    message: "长度在 2 到 20 个字符",
                    trigger: "blur",
                },
                ],
            },
            form : {
                id: null,
                phone_number: null,
                password: null,
                nickname: null,
                sms_code: null,
                sms_code_test: null//联调用的验证码参数
            }
        }
    },
    methods: {
        Login() {
            if(!this.loginruleForm.loginname || !this.loginruleForm.loginpass){
                this.$message.error('账号或密码不能为空！');
            }
            else {
                const url = this.APIurl.API.api.UserLogin + this.loginruleForm.loginname+'&password='+this.loginruleForm.loginpass;
                // console.log(url);
                this.$http.post(url)
                    .then(response => {
                        console.log(response.body.error)
                        // if ()
                        if (!response.body.error) {
                            this.$message({
                                message: '登录成功！',
                                type: 'success'
                                });
                                // this.$router.push({ path: '/Dashboard' })
                                this.$router.push({
                                path: "/Dashboard",
                                query: {
                                    user_name: this.loginruleForm.loginname
                                }
                                });
                        }
                        else {
                            this.$message.error('账号或密码错误，请重新输入！');
                        }
                    },
                    response => {
                        alert('请求失败');
                    },
                );
            }
        },
        registeruserClick() {
            // alert('add');
            this.dialogVisible = true;
        },
        SendSmCode() {
        // console.log('submit!');
            const url = this.APIurl.API.api.SendSmCode + this.form.phone_number;
                // console.log(url);
                this.$http.post(url)
                    .then(response => {
                        console.log(response.body)
                        console.log(response.body.data.code)
                        this.form.sms_code_test = response.body.data.code ;
                        alert (this.form.sms_code_test);
                        // if ()
                        if (!response.body.error) {
                            this.$message({
                                message: '获取验证码成功！',
                                type: 'success'
                                });
                                // this.$router.push({ path: '/Dashboard' })
                            // alert("验证码随机数是："+response.body.data.code)
                        }
                        else {
                            this.$message.error('发送验证码失败！');
                        }
                    },
                    response => {
                        alert('请求失败');
                    },
                );
        },
        SignUp() {
            const url = this.APIurl.API.api.SignUp + this.form.phone_number 
                        + '&password=' + this.form.password
                        + '&nickname=' + this.form.nickname
                        + '&sms_code=' + this.form.sms_code_test;
                // console.log(url);
                this.$http.post(url)
                    .then(response => {
                        console.log(response.body)
                        // if ()
                        if (!response.body.error) {
                            this.$message({
                                message: '注册成功！',
                                type: 'success'
                                });
                                // this.$router.push({ path: '/login' })
                                // history.go(-1);
                                // window.location="${path}";
                                location.reload();
                        }
                        else {
                            this.$message.error('注册失败！');
                        }
                    },
                    response => {
                        alert('请求失败');
                    },
                );
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
.register {
    display: block;
    float: right;
}
.dialogform{
    margin-bottom: 18px;
    width: 80%;
    margin-right: 10px;
    margin-left: 30px;
}
.ver_code {
    width: 50%;
}
.code_left {
    width: 50%!important;
    display: block;
    float: left;
}
.code_right {
    width: 30%;
    display: block;
    float: left;
    margin-left: -50px;
}
</style>
<style>
.el-dialog {
    width: 25%;
}
.ver_code label {
    width: 85px!important;
    margin-left: -20px;
}
.dialog-footer {
    margin: 20px !important;
}
</style>