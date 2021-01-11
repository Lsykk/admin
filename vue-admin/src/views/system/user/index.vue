<template>
    <div>
        <div class="left">
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
                    placeholder="输入关键字进行过滤"
                    v-model="filterText">
                </el-input>
            </div>
            <div>用户列表</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
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
            }
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
        // 获取左侧部门数据
        getDeptDatas(node, resolve) {
            // const sort = 'id,desc'
            // const params = { sort: sort }
            // if (typeof node !== 'object') {
            //     if (node) {
            //     params['name'] = node
            //     }
            // } else if (node.level !== 0) {
            //     params['pid'] = node.data.id
            // }
            // setTimeout(() => {
            //     getDepts(params).then(res => {
            //     if (resolve) {
            //         resolve(res.content)
            //     } else {
            //         this.deptDatas = res.content
            //     }
            //     })
            // }, 100)
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
    background-color: red;
    float: right;
}
.head-container {
    height: 50px;
    background-color: #666;
}
.filter-text {
    font-size: small;
    display: inline-block;
    vertical-align: middle;
    margin: 0 3px 10px 0;
    input {
      height: 30.5px;
      line-height: 30.5px;
    }
}
</style>