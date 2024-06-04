/* 
  全局事件总线
    作用：实现任意组件间的通信

    理解：
    本质是通过自定义事件来实现的，自定义事件的一大特征就是“给哪个组件绑定事件，就只有该组件才能触发事件”

    this.__proto__ === VueComponent.prototype
    VueComponent.prototype.__proto__ === Vue.prototype

    1. 为了所有组件都能访问到，就得使用VueComponent.prototype或Vue.prototype，因为VueComponent.prototype无法操作，所以就用Vue.prototype
    2. 添加可以绑定的事件对象
      这个事件对象要有 $on\$once\$off\$emit 这些方法
        Vue.prototype
        vm
        组件实例this
        new Vue()
    3. 实现全局事件总线
      Vue.prototype.$globalEventBus = vm

      其他组件使用时：
      this.$globalEventBus.$on('xxx', xxx)
      this.$globalEventBus.$emit('xxx')

      可简写为：
        Vue.prototype.$bus = vm

        其他组件使用时：
        this.$bus.$on('xxx', xxx)
        this.$bus.$emit('xxx')

    实现：
    step1：创建全局事件总线对象
        * 方式1： 不建议用
            Vue.prototype.$bus = new Vue()
        * 方式2  --- 常用
            beforeCreate(){
              Vue.prototype.$bus = this
            },
    step2：绑定事件
        组件的mounted(){}中
        this.$bus.$on('xxx',this.handleXxx)
    step3：解绑事件
        组件的beforeDestroy(){}中
        this.$bus.$off('xxx',this.handleXxx)
    step4：触发事件
        this.$bus.$emit("setNum");

    谁修改别人，谁触发事件
    谁要数据展示，数据就定义在哪
*/

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//方式1
Vue.prototype.$bus = new Vue()


new Vue({
  //方式2  --- 常用
  //step1：创建全局事件总线对象
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: (h) => h(App),
}).$mount("#app");
