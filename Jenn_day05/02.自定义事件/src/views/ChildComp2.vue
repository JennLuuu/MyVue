<template>
  <div>
    ChildComp2
    <button @click="handleYyy">按钮</button>
    </div>
</template>

<script>
export default {
  name: "ChildComp2",
  methods: {
    handleYyy(){
        this.$emit('yyy')
    }
  }
};

</script>

<style></style>