<template>
  <li @mouseenter="isShow = true" @mouseleave="isShow = false">
    <label>
      <input
        type="checkbox"
        :checked="todo.isChecked"
        @change="handleIptChange"
      />
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteTodo">删除</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    updateTodoIsChecked: {
      type: Function,
      required: true,
    },
    todoItemDelete: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleIptChange() {
      this.updateTodoIsChecked(this.todo.id);
    },
    deleteTodo(){
      if(window.confirm("确认删除吗？"))
      // this.todoItemDelete(this.todo.id);
      this.todoItemDelete(this.index);
    }
  },
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li .btn {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

/* li:hover .btn {
  display: inline-block;
} */

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>