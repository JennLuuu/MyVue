<!--
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-05-31 20:01:33
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-05-31 20:22:12
 * @FilePath: \07.vue-cli\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- 总组件 -->

<!-- 写html结构 -->
<template>
  <div>
    <p class="title">{{ num }}</p>
    <button @click="handleClick">按钮</button>
    <!-- 3. 使用组件 -->
    <MyComponent />
    <NewComponent />
  </div>
</template>

<!-- 写js代码 -->
<script>
//1. 引入组件
import MyComponent from "./view/MyComponent";

export default {
  //组件名（只有App特殊可以写一个单词，除此之外都必须写两个及以上单词，且是大驼峰形式）
  name: "App",
  data() {
    return {
      num: 9,
    };
  },
  methods: {
    handleClick() {
      this.num--;
    },
  },
  //2. 注册组件 --- 局部注册
  components: {
    MyComponent,
  },
};
</script>

<!-- 写css样式 -->
<style>
.title {
  color: rgb(152, 18, 18);
}
</style>