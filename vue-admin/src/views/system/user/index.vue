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
                :data="deptDatas"
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
                <!-- <div>
                    <el-date-picker
                    v-model="query.createTime"
                    type="datetimerange"
                    class="filter-date"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['12:00:00']">
                    </el-date-picker>
                </div> -->
                <div class="block">
                    <!-- <span class="demonstration">带快捷选项</span> -->
                    <el-date-picker
                    v-model="query.createTime"
                    class="filter-date"
                    type="datetimerange"
                    :picker-options="pickerOptions"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right">
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
                    <el-button type="success" class="user-op-button" icon="el-icon-search" style="background-color: #13ce66;border-color: #13ce66   ;">搜索</el-button>
                    <el-button type="warning" class="user-op-button" icon="el-icon-refresh-left" style="background-color: #ffba00;border-color: #ffba00;">重置</el-button>
                </div>
            </div>
            <div class="user-op">
                <el-button type="primary" style="margin-left: -400px;" class="user-op-button" icon="el-icon-plus" @click="adduserClick()">新增</el-button>
                <!-- <el-button id="modify_bt" type="success" v-bind:disabled="modify_bt" class="user-op-button" icon="el-icon-edit"  @click="GetAllCheckBox()">修改</el-button> -->
                <el-button id="delete_bt" type="danger" v-bind:disabled="delete_bt" class="user-op-button" icon="el-icon-delete" @click="GetAllCheckBox()">删除</el-button>
                <el-button type="warning" class="user-op-button" icon="el-icon-download" style="background-color: #ffba00;border-color: #ffba00;">导出</el-button>
            </div>
            <div>
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    class="user-table"
                    @selection-change="handleSelectionChange">
                    <el-table-column id="user_table" type="selection" width="55"></el-table-column>
                    <el-table-column prop="user_name" label="用户名" width="150"></el-table-column>
                    <el-table-column prop="nickname" label="昵称" width="150"></el-table-column>
                    <el-table-column prop="department" label="部门" width="150"></el-table-column>
                    <el-table-column prop="phone_number" label="手机号码" width="150"></el-table-column>                   
                    <el-table-column
                        label="状态" width="150">
                        <template slot-scope="scope">
                            <el-switch
                                v-model="scope.row.status"
                                :active-value="1"
                                :inactive-value="2"
                                active-color="#409EFF"
                                inactive-color="rgb(245, 108, 108)"
                                @change="changeSwitch(scope.row)"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="create_data" label="创建日期" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="update_data" label="修改日期" width="120"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.row)" style="background-color: #1890FF;margin-right: 10px;color:white;" icon="el-icon-edit"></el-button>
                            <el-popconfirm title="确定删除本条数据吗？">
                                <el-button type="danger" size="mini" slot="reference" @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete"></el-button>
                            </el-popconfirm>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!-- 新增用户弹框 -->
             <el-dialog title="新增账号" :visible.sync="dialogVisible">
                <el-form :model="form"  :rules="rules" ref="form" label-width="66px">
                    <el-form-item label="用户名" prop="username" class="dialogform">
                    <el-input v-model="form.username" />
                    </el-form-item>
                    <el-form-item label="电话" prop="phone" class="dialogform">
                    <el-input v-model.number="form.phone" />
                    </el-form-item>
                    <el-form-item label="昵称" prop="nickName" class="dialogform">
                    <el-input v-model="form.nickName" />
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email" class="dialogform">
                    <el-input v-model="form.email" />
                    </el-form-item>
                    <el-form-item label="部门" prop="dept.id" class="dialogform">
                        <el-select v-model="form.dept.id" clearable placeholder="请选择部门" style="width: 185px">
                            <el-option v-for=" item in depts" :label="item.label" :value="item.value" :key="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="岗位" prop="jobs.id" class="dialogform">
                        <el-select v-model="form.job"  multiple placeholder="请选择岗位" style="width: 185px"> 
                            <el-option v-for=" item in jobs" :label="item.label" :value="item.value" :key="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="性别" class="dialogform"> 
                        <el-radio-group v-model="form.gender" style="width: 178px;text-align: center;">
                            <el-radio label="男">男</el-radio>
                            <el-radio label="女">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="状态" class="dialogform">
                        <el-radio v-model="radio" label="1">激活</el-radio>
                        <el-radio v-model="radio" label="2">禁用</el-radio>
                    </el-form-item>
                    <el-form-item label="角色" prop="roles.id" class="dialogform">
                        <el-select v-model="form.role" style="width: 450px" multiple placeholder="请选择">
                            <el-option v-for=" item in roles" :label="item.label" :value="item.value" :key="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false" class="el-button--text el-button--small">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false" class="el-button--small">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import { isvalidPhone } from "@/utils/validate";
export default {
    data(){
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
            dialogVisible: false,
            modify_bt: true,
            delete_bt: true,
            deptName: '',
            depts: [
                { value: '1', label: '信息部'},
                { value: '2', label: '人事部'},
                { value: '3', label: '财务部'},
                { value: '4', label: '业务部'},
                { value: '5', label: '综合部'}
            ],
            jobs: [
                { value: '1', label: '经理'},
                { value: '2', label: '主管'},
                { value: '3', label: '副主管'},
                { value: '4', label: '普通员工'},
                { value: '5', label: '实习生'}                
            ],
            roles: [
                { value: '1', label: 'admin'},
                { value: '2', label: '普通用户'},   
            ],
            deptDatas: [{
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
            rules: {
                username: [
                { required: true, message: "请输入用户名", trigger: "blur" },
                {
                    min: 2,
                    max: 20,
                    message: "长度在 2 到 20 个字符",
                    trigger: "blur",
                },
                ],
                nickName: [
                { required: true, message: "请输入用户昵称", trigger: "blur" },
                {
                    min: 2,
                    max: 20,
                    message: "长度在 2 到 20 个字符",
                    trigger: "blur",
                },
                ],
                email: [
                { required: true, message: "请输入邮箱地址", trigger: "blur" },
                { type: "email", message: "请输入正确的邮箱地址", trigger: "blur" },
                ],
                phone: [{ required: true, trigger: "blur", validator: validPhone }],
            },
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
                status: 1,
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
                status: 2,
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
                status: 2,
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
                status: 1,
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
                status: 1,
                create_data: '20200112',
                update_data: '20200115',
                phone_number: '18768263972'
                }
            ],
            multipleSelection: [],
            form : {
                id: null,
                username: null,
                nickName: null,
                gender: "男",
                email: null,
                enabled: "false",
                roles: [],
                jobs: [],
                dept: { id: null },
                phone: null,
            },
            radio: '1',
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
        }
    },
    watch: {
      deptName(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        adduserClick() {
            // alert('add');
            this.dialogVisible = true;
        },
        // 获取左侧部门数据
        getDeptDatas(node, resolve) {
        },
        // 获取弹窗内部门数据
        loadDepts() {
            // if (action === LOAD_CHILDREN_OPTIONS) {
            //     getDepts({ enabled: true, pid: parentNode.id }).then((res) => {
            //     parentNode.children = res.content.map(function (obj) {
            //         if (obj.hasChildren) {
            //         obj.children = null;
            //         }
            //         return obj;
            //     });
            //     setTimeout(() => {
            //         callback();
            //     }, 200);
            //     });
            // }
        },
        handleSelectionChange(selection) {
            // this.multipleSelection = selection;
            console.log(selection.length);
            if (selection.length == 1)
                this.modify_bt = false ;
            else
                this.modify_bt = true ;
            if (selection.length == 0)
                this.delete_bt = true ;
            else
                this.delete_bt = false ;
        },
        handleEdit(row) {
            // console.log(index, row);
            console.log(row.id)
            this.dialogVisible = true;
            // this.form.id = row.id ;
            // this.form.username = row.username ;
            // this.form.nickName = row.nickName ;
            // this.form.gender = row.gender ;
            // this.form.email = row.email ;
            // this.form.enabled = row.enabled ;
            // this.form.roles = row.roles ;
            // this.form.jobs = row.jobs ;
            // this.form.dept = row.dept ;
            // this.form.phone = row.phone ;
      },
      handleDelete(index, row) {
        console.log(index, row);
        console.log(row.user_name);
        // alert("您将删除"+row.user_name+"的数据")
        this.$confirm("此操作将删除" + row.user_name + ", 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //接口
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      },
      changeSwitch (row) {
        console.log(row);
        console.log(row.status);
        let statusop;
        if ( row.status != 1) 
            statusop = "禁用";
        else
            statusop = "激活";
        this.$confirm("此操作将"+ statusop + row.user_name +", 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
            })
            .then(() => {
                //接口
                this.$message({
                    type: "success",
                    message: "修改成功!"
                });
                })
                .catch(() => {
                this.$message({
                    type: "info",
                    message: "已取消修改"
                });
            });
        },
        GetAllCheckBox() {
            var div = document.getElementById("user_table");
            var inputs = div.getElementsByTagName("input");
            //定义复选框数组，用来返回
            var checkboxs = new Array();
            var nIndex = 0;
            for (var i = 0; i < inputs.length; i++) {
                //通过type是否为checkbox来判断复选框
                if (inputs[i].type == "checkbox") {
                checkboxs[nIndex] = inputs[i];
                nIndex++;
                }
            }
            console.log(checkboxs);
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
.dialogform{
    margin-bottom: 18px;
    display: inline-block;
    margin-right: 10px;
    vertical-align: top;
}
</style>
<style>
.el-dialog {
    width: 30%;
}
.el-radio__label {
    font-size: 14px;
    padding-right: 20px;
    padding-left: 10px;
}
.el-form-item__content {
    /* margin-left: 100px!important; */
}
</style>