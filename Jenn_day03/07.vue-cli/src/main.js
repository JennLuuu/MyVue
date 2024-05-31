/*
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-05-31 14:39:29
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-05-31 20:52:06
 * @FilePath: \vue-text\Jenn_day03\07.vue-cli\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//项目入口文件
//脚手架会以本文件为起点，开始编译打包项目
//将App组件渲染到#app容器中

//引入组件
import Vue from "vue";
import App from "./App.vue";
//引入要全局注册的组件
import NewComponent from "./view/NewComponent";

//关闭提示
Vue.config.productionTip = false;

//全局注册
Vue.component("NewComponent", NewComponent);

//创建vue实例并挂载容器
new Vue({
  render: (h) => h(App),
}).$mount("#app");
