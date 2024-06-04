<template>
  <div>
    ChildComp
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "ChildComp",
  methods: {
    handleClick(){
        //触发自定义事件
        this.$emit('setNum')
    }
  }
};

</script>

<style></style>