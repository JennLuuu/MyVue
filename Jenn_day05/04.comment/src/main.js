import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

/* 
commentFormInfo和commentList两个兄弟组件间想要通信，就需要使用全局事件总线
*/
new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    render: h => h(App)
}).$mount("#app")