<!--
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-06-04 10:20:44
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-06-04 15:43:10
 * @FilePath: \Jenn_day06\01.axios\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    App 品牌接口测试
    <br />
    <button @click="getTrademark">GET</button>
    <br />
    <button @click="addTrademark">POST</button>
    <br />
    <button @click="updateTrademark">PUT</button>
    <br />
    <button @click="delTrademark">DELETE</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  methods: {
    async getTrademark() {
      try {
        //请求路径全写形式
        const result = await axios.get(
          "/api/admin/product/baseTrademark/1/1000"
        );
        console.log(result.data.data);
        console.log(result.data.data.records);
      } catch (error) {
        console.log(error.message);
      }
    },
    async addTrademark() {
      try {
        const result = await axios.post(
          "/api/admin/product/baseTrademark/save/",
          {
            logoUrl:
              "https://tse4-mm.cn.bing.net/th/id/OIP-C.HNCroQQ0lGlvJTs4ZELojwAAAA?w=172&h=193&c=7&r=0&o=5&dpr=2&pid=1.7",
            tmName: "dog",
          }
        );
        console.log(result.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async updateTrademark() {
      try {
        const result = await axios.put(
          "/api/admin/product/baseTrademark/update",
          {
            id: "150",
            logoUrl:
              "https://tse4-mm.cn.bing.net/th/id/OIP-C.HNCroQQ0lGlvJTs4ZELojwAAAA?w=172&h=193&c=7&r=0&o=5&dpr=2&pid=1.7",
            tmName: "JJJJJJJJJJJJJEEEEEEEEENNNNNNNNNNNNN",
          }
        );
        console.log(result.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    async delTrademark() {
      try {
        const result = await axios.delete("/api/admin/product/baseTrademark/remove/30");
        console.log(result.data);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>