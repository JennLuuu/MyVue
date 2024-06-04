<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model.trim="todoName"  
      @keyup.enter="handleKeyup"
    />
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  props: {
    addTodo: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      //用于管理收集到的数据
      todoName: "",
    };
  },
  methods: {
    handleKeyup() {
      //判断输入的数据为空时，不添加
      if (!this.todoName) {
        return;
      }
      //键盘事件一旦触发，就调用传入的addTodo方法，操作App中的内容
      this.addTodo(this.todoName);
      //添加内容后清空输入框内容
      this.todoName = "";
    },
  },
};
</script>

<style>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>