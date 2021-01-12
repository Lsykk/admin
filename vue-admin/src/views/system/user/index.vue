<template>
    <div>
        <div class="left" >
            <div class="head-container">
                <el-input
                clearable
                size="small"
                placeholder="输入部门名称搜索"
                prefix-icon="el-icon-search"
                class="filter-text"
                v-model="deptName">
                </el-input>
                <el-tree
                class="filter-tree"
                :data="data"
                :props="defaultProps"
                default-expand-all
                :filter-node-method="filterNode"
                ref="tree">
                </el-tree>
            </div>
        </div>
        <div class="right">
            <div class="head-container">
                <el-input
                    clearable
                    size="small"
                    placeholder="输入名称或者邮箱搜索"
                    class="filter-user"
                    v-model="query.blurry">
                </el-input>
                <div>
                    <el-date-picker
                    v-model="query.createTime"
                    type="datetimerange"
                    class="filter-date"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['12:00:00']">
                    </el-date-picker>
                </div>
                <el-select
                    v-model="query.enabled"
                    clearable
                    size="small"
                    placeholder="状态"
                    class="filter-status"
                    >
                    <el-option
                        v-for="item in enabledTypeOptions"
                        :key="item.key"
                        :label="item.display_name"
                        :value="item.key"
                    />
                </el-select>
                <div style="float: right;margin-right: 600px;margin-top: 20px;">
                    <el-button type="success" class="user-op-button" icon="el-icon-search">搜索</el-button>
                    <el-button type="warning" class="user-op-button" icon="el-icon-refresh-left">重置</el-button>
                </div>
            </div>
            <div class="user-op">
                <el-button type="primary" style="margin-left: -400px;" class="user-op-button" icon="el-icon-plus" @click="adduser">新增</el-button>
                <el-button type="success" disabled class="user-op-button" icon="el-icon-edit">修改</el-button>
                <el-button type="danger" disabled class="user-op-button" icon="el-icon-delete">删除</el-button>
                <el-button type="warning" class="user-op-button" icon="el-icon-download">导出</el-button>
            </div>
            <div>
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    class="user-table"
                    @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column prop="user_name" label="用户名" width="120"></el-table-column>
                    <el-table-column prop="nickname" label="昵称" width="120"></el-table-column>
                    <el-table-column prop="department" label="部门" width="120"></el-table-column>
                    <el-table-column prop="create_data" label="创建日期" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="update_data" label="修改日期" width="120"></el-table-column>
                    <el-table-column prop="status" label="状态" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="phone_number" label="手机号码" width="120"></el-table-column>
                    <el-table-column
                        v-if="true"
                        label="操作"
                        width="115"
                        align="center"
                        fixed="right"
                    >
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            modify: true,
            delete: true,
            deptName: '',
            data: [{
            id: 1,
            label: '华东地区',
            children: [{
                id: 4,
                label: '技术部',
                children: [{
                id: 9,
                label: 'A同学'
                }, {
                id: 10,
                label: 'B同学'
                }]
            }]
            }, {
            id: 2,
            label: '华南地区',
            children: [{
                id: 5,
                label: '人事部'
            }, {
                id: 6,
                label: '信息部'
            }]
            }, {
            id: 3,
            label: '华北地区',
            children: [{
                id: 7,
                label: '人事部'
            }, {
                id: 8,
                label: '信息部'
            }]
            }],
            defaultProps: {
            children: 'children',
            label: 'label'
            },
            permission: {
                add: ['admin', 'user:add'],
                edit: ['admin', 'user:edit'],
                del: ['admin', 'user:del']
            },
            enabledTypeOptions: [
                { key: 'true', display_name: '激活' },
                { key: 'false', display_name: '锁定' }
            ],
            query: {
                blurry: '',
                createTime: '',
                enabled: ''
            },
            tableData: [{
                id: '1',
                user_name: '刘A',
                password: '111',
                nickname: 'AA',
                role: '管理员',
                department: '信息部',
                token: 'njksbfirds',
                token_exprired_date: '20200112',
                status: '在线',
                create_data: '20200112',
                update_data: '20200115',
                phone_number: '18768263972'
                }, {
                id: '1',
                user_name: '刘B',
                password: '111',
                nickname: 'BB',
                role: '普通用户',
                department: '信息部',
                token: 'njksbfirds',
                token_exprired_date: '20200112',
                status: '在线',
                create_data: '20200112',
                update_data: '20200115',
                phone_number: '18768263972'
                },{
                id: '1',
                user_name: '刘C',
                password: '111',
                nickname: 'CC',
                role: '普通用户',
                department: '人事部',
                token: 'njksbfirds',
                token_exprired_date: '20200112',
                status: '在线',
                create_data: '20200112',
                update_data: '20200115',
                phone_number: '18768263972'
                },{
                id: '1',
                user_name: '刘D',
                password: '111',
                nickname: 'DD',
                role: '普通用户',
                department: '信息部',
                token: 'njksbfirds',
                token_exprired_date: '20200112',
                status: '在线',
                create_data: '20200112',
                update_data: '20200115',
                phone_number: '18768263972'
                },{
                id: '1',
                user_name: '刘E',
                password: '111',
                nickname: 'EE',
                role: '管理员',
                department: '财务部',
                token: 'njksbfirds',
                token_exprired_date: '20200112',
                status: '在线',
                create_data: '20200112',
                update_data: '20200115',
                phone_number: '18768263972'
                }
            ],
            multipleSelection: []
        }
    },
    watch: {
      deptName(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
        filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
        },
        handleSelectionChange(val) {
        this.multipleSelection = val;
        },
        adduser() {
            this.$prompt('请输入邮箱', '新增用户', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            inputErrorMessage: '邮箱格式不正确'
            }).then(({ value }) => {
            this.$message({
                type: 'success',
                message: '你的邮箱是: ' + value
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '取消输入'
            });       
            });
        },
        // 获取左侧部门数据
        getDeptDatas(node, resolve) {
        }
    }
}
</script>
<style lang="scss" scoped>
.left {
    width: 15%;
    height: 80vh;
    background-color: white;
    float: left;
    margin: 20px;
}
.right {
    width: 80%;
    height: 80vh;
    // background-color: red;
    float: right;
}
.head-container {
    height: 50px;
    padding-bottom: 20px;
    // background-color: #666;
}
.filter-text {
    font-size: small;
    display: inline-block;
    height: 33px;
    width: 200px;
    vertical-align: middle;
    margin: 0 3px 10px 0;
    input {
      height: 30.5px;
      line-height: 30.5px;
    }
}
.filter-user {
    font-size: small;
    height: 33px;
    width: 200px;
    margin: 0 3px 10px 0;
    width: 200px; 
    display: block; 
    float: left;
    margin: 20px 5px;
    input {
      height: 30.5px;
      line-height: 30.5px;
    }
}

.filter-date {
    font-size: small;
    display: block;
    height: 33px;
    width: 200px;
    float: left;
    margin: 20px 5px;
    input {
      height: 30.5px;
      line-height: 30.5px;
    }
}

.filter-status {
    font-size: small;
    display: inline-block;
    height: 33px;
    width: 80px;
    margin: 20px 5px;
    vertical-align: middle;
    input {
      height: 30.5px;
      line-height: 30.5px;
    }
}
.el-select-dropdown__item{
    font-size: 14px ;
    line-height: 34px ;
    text-align: center !important;
 }
.right-button {
    font-size: 12px;
    color: #fff;
    line-height: 1;
    text-align: center;
    font-weight: 400;
    font-family: sans-serif;
    height: 33px;
}
.user-table {
    width: 100%;
    font-size: 12px;
}
.user-table .cell{
    font-weight: bold !important;
}
.user-op {
    height: 50px;
    // background-color: red;
}
.user-op-button {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
}

</style>
<style>