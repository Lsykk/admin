<template>
    <div>
        <div class="search_div">
            <el-input
                clearable
                size="small"
                placeholder="输入部门名称搜索"
                class="filter-user"
                v-model="query.blurry">
            </el-input>
            <div class="block">
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
            <el-button type="success" class="user-op-button" icon="el-icon-search" style="background-color: #13ce66;border-color: #13ce66 ;margin: 10px 10px;">搜索</el-button>
            <el-button type="warning" class="user-op-button" icon="el-icon-refresh-left" style="background-color: #ffba00;border-color: #ffba00;margin: 10px 10px;">重置</el-button>
        </div>
        <div class="operation_div">
            <el-button type="primary" class="user-op-button" icon="el-icon-plus" @click="adduserClick()">新增</el-button>
            <el-button id="modify_bt" type="success" v-bind:disabled="modify_bt" class="user-op-button" icon="el-icon-edit"  @click="GetAllCheckBox()">修改</el-button>
            <el-button id="delete_bt" type="danger" v-bind:disabled="delete_bt" class="user-op-button" icon="el-icon-delete" @click="GetAllCheckBox()">删除</el-button>
            <el-button type="warning" class="user-op-button" icon="el-icon-download" style="background-color: #ffba00;border-color: #ffba00;">导出</el-button>
        </div>
        <div class="form_div"></div>
        <div class="menu_div"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            delete_bt: true,
            query: {
                blurry: '',
                createTime: '',
                enabled: ''
            },
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
            enabledTypeOptions: [
                { key: 'true', display_name: '激活' },
                { key: 'false', display_name: '锁定' }
            ],
        }
    }
}
</script>
<style scoped>
.search_div {
    height: 50px;
    /* background-color: chocolate; */
}
.operation_div {
    height: 50px;
    /* background-color: red; */
}
.form_div {
    width: 70%;
    height: 500px;
    background-color: royalblue;
    float: left;
}
.menu_div {
    width: 30%;
    height: 500px;
    background-color: slateblue;
    float: left;
}
</style>