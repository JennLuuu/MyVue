<!--
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-06-04 10:20:44
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-06-04 11:22:21
 * @FilePath: \Jenn_day06\01.axios\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    App
    <br />
    <button @click="getPosts">GET</button>
    <br />
    <button @click="postPost">POST</button>
    <br />
    <button @click="putPost">PUT</button>
    <br />
    <button @click="patchPost">PATCH</button>
    <br />
    <button @click="delPost">DELETE</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  methods: {
    async getPosts() {
      try {
        const result = await axios.get("http://localhost:3000/posts");
        console.log(result.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async postPost(){
      try {
        const result = await axios.post("http://localhost:3000/posts",{
            //id:Date.now(),  //一般都是由服务器生成的，前端不用管
            title:"jjjjjjjjjjjjjj",
            content:"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
        })
        console.log(result.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async putPost(){
      try {
        const result = await axios.put("http://localhost:3000/posts/1",{
            title:"66666666666666666666",
            content:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        })
        console.log(result.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async patchPost(){
      try {
        const result = await axios.patch("http://localhost:3000/posts/3",{
            title:"66666666666666666666",
        })
        console.log(result.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async delPost(){
      try {
        const result = await axios.delete("http://localhost:3000/posts/2")
        console.log(result.data);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>