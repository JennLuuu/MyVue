<!--
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-06-03 11:09:17
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-06-03 13:50:10
 * @FilePath: \01.todoList\src\views\TodoFooter\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="todo-footer">
    <label>
      <!-- 实现全选框控制item的isChecked -->
      <!-- 当页面表达式较长时，建议用计算属性做优化，可读可写 -->
      <!-- <input type="checkbox" @change="allItemChecked" :checked="isCheckedAll" /> -->
      <input type="checkbox" v-model="isCheckedAll" />
    </label>
    <span>
      <span>已完成{{ todoItemDone }}</span> / 全部{{ todosLength }}
    </span>
    <button class="btn btn-danger" @click="deleteAllChecked">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  /* data(){
    return {
      isAllChecked: "checked",
    }
  }, */
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
    },
    delAllItemChecked: {
      type: Function,
      required: true,
    },
  },
  computed: {
    isCheckedAll: {
      get() {
        return this.todoItemDone === this.todosLength && this.todosLength;
      },
      set(checked) {
        this.setAllTodoChecked(checked);
      },
    },
  },
  methods: {
    //全选&全不选
    /* allItemChecked(e) {
      this.setAllTodoChecked(e.target.checked);
    }, */
    //清除所有已完成
    deleteAllChecked() {
      if (window.confirm("确认删除")) {
        this.delAllItemChecked();
      }
    },
  },
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