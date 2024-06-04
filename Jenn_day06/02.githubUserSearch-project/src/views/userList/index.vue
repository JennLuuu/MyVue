<!--
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-06-04 20:05:36
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-06-04 20:47:53
 * @FilePath: \02.githubUserSearch-project\src\views\userList\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="row">
    <h1 v-show="isloading">Loading~~~</h1>
    <!-- 
        v-for和v-if/show 不建议一起用
        解决方式：
        给元素再套一层外壳，控制外壳的显示和隐藏

     -->
    <div v-show="!isloading">
      <div class="card" v-for="user in users" :key="user.id">
        <!-- 切记：使用data中的数据，切记绑定动态数据 -->
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "userList",
  data() {
    return {
      users: [],
      isloading: false,
    };
  },
  methods: {
    /*  //该地址不存在跨域的问题，所以可以不配置代理服务器
    async getUserList(keyword) {
      //事件调用了，还没发送请求的时候展示loading
      this.isloading = true;
      //发送查询请求：根据传过来的keyword查询
      const res = await axios.get("https://api.github.com/search/users", {
        params: { q: keyword },
      });
      this.users = res.data.items;
      //请求返回来以后，将loading隐藏
      this.isloading = false;
    }, */
    //假设该地址存在跨域问题，要配置代理服务器
    async getUserList(keyword) {
      //事件调用了，还没发送请求的时候展示loading
      this.isloading = true;
      //发送查询请求：根据传过来的keyword查询
      //发送请求要放进trycatch中
      try {
        const res = await axios.get("/api/search/users", {
          params: { q: keyword },
        });
        this.users = res.data.items;
      } catch (error) {
        console.log(error.message);
      } finally {
        //请求返回来以后，将loading隐藏
        this.isloading = false;
      }
    },
  },
  //绑定事件+解绑事件
  mounted() {
    this.$bus.$on("getUserList", this.getUserList);
  },
  beforeDestroy() {
    this.$bus.$off("getUserList", this.getUserList);
  },
};
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>