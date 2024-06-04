<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo" />
      <TodoList
        :todos="todos"
        :updateTodoIsChecked="updateTodoIsChecked"
        :todoItemDelete="todoItemDelete"
      />
      <TodoFooter
        :todoItemDone="todoItemDone"
        :todosLength="todosLength"
        :setAllTodoChecked="setAllTodoChecked"
      />
    </div>
  </div>
</template>

<script>
/* 
step1: 静态组件拆分
step2：数据遍历展示
step3：添加todo事项
step4：单选todo事项
step5：显示隐藏item上的删除按钮
  * 法一：用CSS样式，:hover
  * 法二：用鼠标移入移出事件，改变v-show绑定的数据的状态
step6：删除单个元素
step7：同步更新全部任务个数
*/

import TodoHeader from "./view/TodoHeader";
import TodoList from "./view/TodoList";
import TodoFooter from "./view/TodoFooter";

export default {
  name: "App",
  //要展示的数据
  data() {
    return {
      todos: [
        { id: 1, name: "玛卡巴卡", isChecked: false },
        { id: 2, name: "唔西迪西", isChecked: false },
        { id: 3, name: "小火车头", isChecked: true },
        { id: 4, name: "小萝卜丁", isChecked: false },
        { id: 5, name: "阿巴阿巴", isChecked: true },
      ],
    };
  },
  computed: {
    //总todo的个数
    todosLength() {
      return this.todos.length;
    },
    //已勾选todo个数
    todoItemDone() {
      const doneItemArr = this.todos.filter((todo) => {
        return todo.isChecked;
      });
      return doneItemArr.length;
    },
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  methods: {
    //新增todo
    addTodo(name) {
      this.todos.push({
        id: Date.now(),
        name,
        isChecked: false, //新增的数据都是默认未完成的，即为false
      });
    },
    //单选todo：修改todo的选中状态
    updateTodoIsChecked(id) {
      //找到点击的item
      const todo = this.todos.find((todo) => todo.id === id);
      //给item修改选中状态
      todo.isChecked = !todo.isChecked;
    },
    //删除单个元素
    todoItemDelete(id) {
      this.todos.forEach((todo, index) => {
        if (todo.id === id) this.todos.splice(index, 1);
      });
    },
    setAllTodoChecked() {
      this.todos.forEach((todo) => {
        if (todo.isChecked) {
          todo.isChecked = false;
        } else {
          todo.isChecked = true;
        }
      });
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>