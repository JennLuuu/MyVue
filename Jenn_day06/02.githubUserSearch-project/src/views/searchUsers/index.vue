<!--
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-06-04 20:05:05
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-06-04 20:22:35
 * @FilePath: \02.githubUserSearch-project\src\views\searchUsers\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;<button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "searchUsers",
  data() {
    return {
        keyword: '',
    }
  },
  methods: {
    search(){
        // console.log(this.keyword);
        //触发事件
        //当输入的内容不为空的时候，才会触发事件发送请求
        if (!this.keyword) return;
        this.$bus.$emit("getUserList",this.keyword)
    }
  }
};
</script>

<style></style>