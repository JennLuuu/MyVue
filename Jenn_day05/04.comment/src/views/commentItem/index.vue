<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="delCommentItem">删除</a>
    </div>
    <p class="user">
      <span>{{ comment.username }} </span>
      <span>说:</span>
    </p>
    <p class="centence">{{ comment.content }}</p>
  </li>
</template>

<script>
export default {
  name: "commentItem",
  props: {
    comment: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    delComment: {
      type: Function,
      required: true,
    },
  },
  methods: {
    delCommentItem() {
      if (window.confirm("确认删除吗？")) this.delComment(this.id);
    },
  },
};
</script>

<style>
/* item */
li {
  transition: 0.5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>
