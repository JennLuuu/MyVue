<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" @change="allItemChecked" v-show="isAllChecked"/>
    </label>
    <span> <span>已完成{{ todoItemDone }}</span> / 全部{{ todosLength }} </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  data(){
    return {
      isAllChecked: "checked",
    }
  },
  props: {
    todosLength: {
      type: Number,
      required: true,
    },
    todoItemDone: {
      type: Number,
      required: true,
    },
    setAllTodoChecked: {
      type: Function,
      required: true,
    }
  },
  methods: {
    allItemChecked(){
      this.setAllTodoChecked()
    }
  }
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>