<template>
    <div>
        <div class="left">
            <div class="logo">
                <h2>嘉悦后台管理系统</h2>
            </div>
            <div class="menu">
                <el-col :span="12">
                    <el-menu
                        default-active="2"
                        :router="element.router"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#304156"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-s-tools"></i>
                                <span class="menuspan">系统管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index='/system/user'><i class="el-icon-user-solid"></i><span>用户管理</span></el-menu-item>
                                <el-menu-item index='/system/role'><i class="el-icon-eleme"></i><span>角色管理</span></el-menu-item>
                                <el-menu-item index="/system/menu"><i class="el-icon-s-operation"></i><span>菜单管理</span></el-menu-item>
                                <el-menu-item index="/system/dept"><i class="el-icon-truck"></i><span>部门管理</span></el-menu-item>
                                <el-menu-item index="/system/job"><i class="el-icon-ship"></i><span>岗位管理</span></el-menu-item>
                                <el-menu-item index="/system/dict"><i class="el-icon-notebook-1"></i><span>字典管理</span></el-menu-item>
                                <el-menu-item index="/system/timing"><i class="el-icon-odometer"></i><span>任务调度</span></el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-data-line"></i>
                                <span slot="title" class="menuspan">系统监控</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/monitor/online"><i class="el-icon-s-tools"></i><span>在线用户</span></el-menu-item>
                                <el-menu-item index="/monitor/log"><i class="el-icon-s-tools"></i><span>操作日志</span></el-menu-item>
                                <el-menu-item index="2-3"><i class="el-icon-s-tools"></i><span>异常日志</span></el-menu-item>
                                <el-menu-item index="2-4"><i class="el-icon-s-tools"></i><span>服务监控</span></el-menu-item>
                                <el-menu-item index="2-5"><i class="el-icon-s-tools"></i><span>备用</span></el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-data-analysis"></i>
                                <span slot="title" class="menuspan">运维管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="3-1"><i class="el-icon-s-tools"></i><span>服务器</span></el-menu-item>
                                <el-menu-item index="3-2"><i class="el-icon-s-tools"></i><span>应用管理</span></el-menu-item>
                                <el-menu-item index="3-3"><i class="el-icon-s-tools"></i><span>部署管理</span></el-menu-item>
                                <el-menu-item index="3-4"><i class="el-icon-s-tools"></i><span>部署备份</span></el-menu-item>
                                <el-menu-item index="3-5"><i class="el-icon-s-tools"></i><span>数据库管理</span></el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <i class="el-icon-suitcase-1"></i>
                                <span slot="title" class="menuspan">系统工具</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="4-1"><i class="el-icon-s-tools"></i><span>代码生成</span></el-menu-item>
                                <el-menu-item index="4-2"><i class="el-icon-s-tools"></i><span>存储管理</span></el-menu-item>
                                <el-menu-item index="4-3"><i class="el-icon-s-tools"></i><span>邮件工具</span></el-menu-item>
                                <el-menu-item index="4-4"><i class="el-icon-s-tools"></i><span>支付宝工具</span></el-menu-item>
                                <el-menu-item index="4-5"><i class="el-icon-s-tools"></i><span>备用</span></el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title">
                                <i class="el-icon-orange"></i>
                                <span slot="title" class="menuspan">组件管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="5-1"><span>图表库</span></el-menu-item>
                                <el-menu-item index="5-2"><span>图标库</span></el-menu-item>
                                <el-menu-item index="5-3"><span>富文本</span></el-menu-item>
                                <el-menu-item index="5-4"><span>Markdown</span></el-menu-item>
                                <el-menu-item index="5-5"><span>Yaml编辑器</span></el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="6">
                            <template slot="title">
                                <i class="el-icon-s-unfold"></i>
                                <span slot="title" class="menuspan">多级菜单</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="6-1"><span>二级菜单1</span></el-menu-item>
                                <el-menu-item index="6-2"><span>二级菜单2</span></el-menu-item>
                                <el-menu-item index="6-3"><span>二级菜单3</span></el-menu-item>
                                <el-menu-item index="6-4"><span>二级菜单4</span></el-menu-item>
                                <el-menu-item index="6-5"><span>二级菜单5</span></el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </div>
        </div>
        <div class="right">
            <div class="fixed-header">
                <!-- <div class="catalog-icon">
                    <i class="el-icon-s-fold "></i>
                </div> -->
                <div class="breadcrumb">
                    <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{item.name}}</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="userinfo">
                    <div class="userinfo_op">
                        <!-- <i class="el-icon-setting"></i> -->
                    </div>
                    <div class="userinfo_icon">
                        <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{user_name}},您好！<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">布局设置</el-dropdown-item>
                            <el-dropdown-item command="b">个人中心</el-dropdown-item>
                            <el-dropdown-item command="c" divided>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
        return {
            date: "",
            time: "",
            levelList: [],
            //   logo: require(''),
            element: {
                //是否只保持一个子菜单的展开
                opened: true,
                //是否使用 vue-router 的模式
                //启用该模式会在激活导航时以 index 作为 path 进行路由跳转
                router: true,
                //当前激活菜单的 index
                // active: "/problem"
            },
            user_name:"18758298526"
        }
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    },
    created() {
        this.getBreadcrumb()
    },
    beforeMount() {
        // alert(this.$route.query.user_name); // 在登录页里面直接接收
        this.user_name = this.$route.query.user_name ;
    },
    methods: {
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name)
                // const first = matched[0];
                // if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
                //     // matched = [{ path: '/dashboard', meta: { title: 'dashboard' }}].concat(matched)
                // }
                this.levelList = matched
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleCommand(command) {
        if (command == 'a') {
            this.$message('布局设置');
        }
        else if (command == 'b') {
            // this.$message('个人中心');
             this.$router.push({ path: '/user/center' })
        }
        else {
            // this.$message('退出登录');
            this.$confirm('确定注销并退出系统吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '退出成功!'
                });
                 this.$router.push({ path: '/login' })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消退出'
                });          
            });
        }
      }
    }
  }
</script>
<style scoped>
.left {
    width: 205px !important;
    height: 100vh;
    background-color: #304156;
    float: left;
}
.logo {
    height: 50px;
    background-color: #304156;
}
.logo h2 {
    display: inline-block;
    margin: 0px 50px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 14px;
    font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
    vertical-align: middle;
}
.menu {
    width: 411px;
}
.menu span {
    color: rgb(191, 203, 217) !important;
    margin-left: 15px;
    text-decoration: none !important;
}
a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
.right {
    width: 85%;
    height: 100vh;
    background-color: white;
    float: right;
}
.fixed-header {
    height: 60px;
    -webkit-transition: width .28s;
    transition: width .28s;
    padding: 0;
    box-shadow: 0 0.5px 5px #D7D7D7;
}

.el-menu-item {
    padding-left: 60px !important;
}
.catalog-icon {
    width: 30px;
    height: 30px;
    float: left;
    /* background-color: red; */
    /* margin: 10px 10px; */
}
.catalog-icon i {
    margin-top: 16px;
    margin-left: 20px;
    font-size: 25px;
}
.breadcrumb {
    width: 500px;
    /* background-color: red; */
    padding-top: 22px;
    padding-left: 60px;
    display: block;
    float: left;
}
.userinfo {
    width: 200px;
    height: 50px;
    /* background-color: crimson; */
    float: right;
    margin: 10px;
}
.userinfo_op {
    width: 30%;
    height: 50px;
    /* background-color: darkblue; */
    float: left;
}
.userinfo_op i {
    font-size: 30px;
    display: block;
    margin: 10px;
}
.userinfo_icon {
    width: 65%;
    height: 50px;
    /* background-color: darkblue; */
    float: right;
}
.userinfo_icon span {
    font-size: small;
    display: block;
    margin-top: 15px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>
<style>
.el-menu-item-group__title {
    padding: 0px !important;
}
.el-breadcrumb span {
    font-weight: 400 !important;
}
</style>