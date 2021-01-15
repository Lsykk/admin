<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>个人信息</span>
                <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <div class="text item">
                <ul class="user-info">
                    <li><div style="height: 100%">登录账号<div class="user-right">{{ user.username }}</div></div></li>
                    <li> 用户昵称 <div class="user-right">{{ user.nickName }}</div></li>
                    <li> 所属部门 <div class="user-right"> {{ user.dept }}</div></li>
                    <li> 手机号码 <div class="user-right">{{ user.phone }}</div></li>
                    <li> 用户邮箱 <div class="user-right">{{ user.email }}</div></li>
                    <!-- <li> 安全设置
                        <div class="user-right">
                        <a @click="$refs.pass.dialog = true">修改密码</a>
                        <a @click="$refs.email.dialog = true">修改邮箱</a>
                        </div>
                    </li> -->
                </ul>
            </div>
            <div>
                <el-button type="primary" class="user-op-button" icon="el-icon-edit" @click="open()">修改密码</el-button>
            </div>
        </el-card>
        <el-dialog title="修改密码" :visible.sync="dialogVisible">
            <el-form
                :model="newpassruleForm"
                :rules="newpassrules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item label="旧密码" prop="oldpass" class="dialogform">
                <el-input
                    type="password"
                    v-model="newpassruleForm.oldpass"
                    auto-complete="off"
                    class="userinput"
                ></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newpass" class="dialogform">
                <el-input
                    type="password"
                    v-model="newpassruleForm.newpass"
                    auto-complete="off"
                    class="userinput"
                ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checknewPass" class="dialogform">
                <el-input
                    type="password"
                    v-model="newpassruleForm.checkPass"
                    auto-complete="off"
                    class="userinput"
                ></el-input>
                </el-form-item>
                <div style="text-align: center;">
                    <el-button type="primary" @click="submitnewpassForm()" >提交</el-button>
                </div>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        // 自定义验证
        const validPhone = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入电话号码'))
            } else if (!isvalidPhone(value)) {
                callback(new Error('请输入正确的11位手机号码'))
            } else {
                callback()
            }
        }
        return {
            dialogVisible: false,
            user: {
                id: 111,
                username: "this.user.username",
                nickName: "this.user.nickName",
                dept: "this.user.dept.name",
                phone: "this.user.phone",
                email: "this.user.email"
            },
            newpassruleForm: {
                oldpass: null,
                newpass: null,
                checkPass: null
            },
            newpassrules: {
                oldpass: [
                    { required: true, message: "请输入您的旧密码", trigger: "blur" },
                    // { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
                ],
                newpass: [
                    { required: true, message: "请输入您的新密码", trigger: "blur" },
                    // { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
                ],
                checknewPass: [
                    { required: true, message: "请再次输入您的新密码", trigger: "blur" },
                    // { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
                ]
            },
        }
    },
    methods: {
        open() {
            this.dialogVisible = true;
        },
        submitnewpassForm() {
            if ( this.newpassruleForm.newpass != this.newpassruleForm.checkPass ) {
                this.$message.error('两次密码不一致!');
                    return false;
            }
            else {
                const url = this.APIurl.API.api.ChangePassword + this.newpassruleForm.oldpass 
                                + '&password=' + this.newpassruleForm.newpass
                // console.log(url);
                this.$http.post(url)
                    .then(response => {
                        console.log(response)
                        if (!response.body.error) {
                            this.$message({
                                message: '更改密码成功！',
                                type: 'success'
                                });
                        }
                        else {
                            this.$message.error('旧密码错误!!');
                            return false;
                        }
                    },
                    response => {
                        alert('请求失败');
                    },
                );
            }
     
        }
    }
}
</script>
<style lang="scss" scoped>
.text {
    font-size: 14px;
}
.item {
    margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
.box-card {
    width: 30%;
    margin-top: 20px;
}
.user-info {
    padding-left: 0;
    list-style: none;
    li{
      border-bottom: 1px solid #F0F3F4;
      padding: 11px 0;
      font-size: 13px;
    }
    .user-right {
      float: right;
      a{
        color: #317EF3;
      }
    }
  }
  .user-op-button {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
}
.dialogform{
    margin-bottom: 18px;
    width: 80%;
    margin-right: 10px;
    margin-left: 30px;
}
</style>
<style>
.el-dialog {
    width: 30%;
}
</style>