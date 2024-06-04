<template>
  <div>
    App
    <!-- 绑定自定义事件 --- 方式1 -->
    <ChildComp @setNum="handleSet"/>
     <!-- 绑定自定义事件 --- 方式2 -->
    <ChildComp2 ref="child2Ref"/>
    </div>
</template>

<script>
/* 
自定义事件（消息发布订阅机制）
 * 作用：子组件向父组件传输数据
 * 绑定事件：
    - 事件名可以是任意的，主要给子组件绑定自定义事件，才会有实际用途
       - 方式1：@事件名="事件回调函数"
          - step1：给组件绑定自定义事件及事件回调
          - step2：定义事件的回调函数
          - step3：在子组件中触发自定义事件
       - 方式2：ref="事件名xxxRef" （绑定事件-解绑事件-触发事件
          - step1：给组件绑定事件
          - step2：在mounted中，绑定事件
            - this.$refs.事件名xxxRef.$once('yyy',this.xxxx)
            - $on  绑定持续性事件
            - $once  绑定一次性事件
          - step3：在beforeDestroy中，解绑事件
            - $off  解绑事件
          - step4：在子组件中触发自定义事件
 * 触发事件：
    - 手动触发： this.$emit('事件名',...参数)

给组件绑定的事件，默认都是自定义事件（需要手动触发才能触发事件）
给组件绑定原生DOM事件：绑定事件时加上时间修饰符.native


*/
import ChildComp from './views/ChildComp.vue'
import ChildComp2 from './views/ChildComp2.vue'

export default {
  name: "App",
  components: {
    ChildComp,ChildComp2
  },
  methods: {
    handleSet(){
      console.log("handleSet()");
    },
    handleYyy(){
      console.log("handleYyy()");
    }
  },
  mounted() {
    // 绑定自定义事件
    //事件的回调函数一般都写在methods中，方便解绑事件
    //绑定持续性事件
    // this.$refs.child2Ref.$on('yyy',this.handleYyy)
    //绑定一次性事件
    this.$refs.child2Ref.$once('yyy',this.handleYyy)
  },
  beforeDestroy() {
    this.$refs.child2Ref.$off('yyy',this.handleYyy)
  }
};

</script>

<style></style>