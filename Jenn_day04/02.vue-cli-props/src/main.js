//引入组件
import Vue from "vue";
import App from "./App.vue";

//关闭提示
Vue.config.productionTip = false;


//创建vue实例并挂载容器
new Vue({
  render: (h) => h(App),
}).$mount("#app");
