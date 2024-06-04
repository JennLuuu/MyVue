<template>
  <div>
    <button ref="btn">按钮</button>
    <!-- 3. 使用组件 -->
    <MyComponent ref="MyComponent"/>
  </div>
</template>

<script>
//1. 引入组件
import MyComponent from "./view/MyComponent";

/* 
ref: 语法
  功能：
    1. 获取真实DOM元素
    2. 获取组件实例对象
  语法：
    1. 给元素绑定ref属性
    2. 通过this.$refs.xxx 获取真实DOM元素或组件实例对象
 */

export default {
  //组件名（只有App特殊可以写一个单词，除此之外都必须写两个及以上单词，且是大驼峰形式）
  name: "App",
  mounted() {
    console.log("this.$refs.btn",this.$refs.btn);
    console.log("this.$refs.MyComponent",this.$refs.MyComponent);
  },
  //2. 注册组件 --- 局部注册
  components: {
    MyComponent,
  },
};
</script>

<!-- 写css样式 -->
<style>
</style>