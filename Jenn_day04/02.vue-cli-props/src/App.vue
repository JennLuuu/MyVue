<!--
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-06-01 11:19:06
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-06-01 11:20:54
 * @FilePath: \02.vue-cli-props\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <button ref="btn">按钮</button>
    <!-- 3. 使用组件 -->
    <!-- 父组件以标签属性的形式给子组件传递数据 -->
    <!-- 传递数据时，要传递动态数据，绑定v-bind： -->
    <MyComponent ref="MyComponent" :num="num" :person="person"/>
  </div>
</template>

<script>
//1. 引入组件
import MyComponent from "./view/MyComponent";

/* 
props：父子组件传递数据（通信）
父组件以标签属性的形式给子组件传递数据

 */

export default {
  //组件名（只有App特殊可以写一个单词，除此之外都必须写两个及以上单词，且是大驼峰形式）
  name: "App",
  data() {
    return {
      num:0,
      person:{
        name:"juccy",
        age:18,
        sex:0
      }
    }
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