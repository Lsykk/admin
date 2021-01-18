<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        mounted() {
            // 发ajax请求，用以获取数据，此处地址意思是查询 github中 vue 星数最高的项目
            // const url = 'http://115.159.126.104/user/login?username=%E5%88%98%E4%B8%96%E6%BA%90&password=12345678';
            // this.$http.get(url).then(
            //     response => {
            //       console.log(response)
            //         // const result = response.data.items[0];
            //         // console.log(result)
            //         // this.repositoryUrl = result.html_url;
            //         // this.repositoryName = result.name;
            //     },

            //     response => {
            //         alert('请求失败');
            //     },
            // );
        }
    }
</script>
<style lang="scss">
#app {
}
</style>
