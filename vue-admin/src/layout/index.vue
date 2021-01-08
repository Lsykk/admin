<template>
    <div>
        <div class="left">
            <div class="logo">
                <h2>后台管理系统</h2>
            </div>
            <div class="menu">
                <el-col :span="12">
                    <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#304156"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-submenu index="1" class="menuitem">
                            <template slot="title">
                                <i class="el-icon-s-tools"></i>
                                <span class="menuspan">系统管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1"><i class="el-icon-s-tools"></i><router-link to="/user"><span>用户管理</span></router-link></el-menu-item>
                                <el-menu-item index="1-2"><i class="el-icon-s-tools"></i><span>角色管理</span></el-menu-item>
                                <el-menu-item index="1-3"><i class="el-icon-s-tools"></i><span>菜单管理</span></el-menu-item>
                                <el-menu-item index="1-4"><i class="el-icon-s-tools"></i><span>部门管理</span></el-menu-item>
                                <el-menu-item index="1-5"><i class="el-icon-s-tools"></i><span>岗位管理</span></el-menu-item>
                                <el-menu-item index="1-6"><i class="el-icon-s-tools"></i><span>字典管理</span></el-menu-item>
                                <el-menu-item index="1-7"><i class="el-icon-s-tools"></i><span>任务调度</span></el-menu-item>
                                <el-menu-item index="1-8"><i class="el-icon-s-tools"></i><span>备用</span></el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-data-line"></i>
                                <span slot="title" class="menuspan">系统监控</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="2-1"><i class="el-icon-s-tools"></i><span>在线用户</span></el-menu-item>
                                <el-menu-item index="2-2"><i class="el-icon-s-tools"></i><span>操作日志</span></el-menu-item>
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
            <div class="fixed-header"></div>
        </div>
    </div>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.left {
    width: 15%;
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
    width: 433px;
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
    /* position: fixed; */
    top: 0;
    right: 0;
    z-index: 9;
    /* width: calc(100% - 205px); */
    height: 60px;
    -webkit-transition: width .28s;
    transition: width .28s;
    padding: 0;
    /* background-color: yellow; */
    box-shadow: 0 0.5px 5px #D7D7D7;
}

.el-menu-item {
    padding-left: 60px !important;
}

</style>