<template>
  <div class="col-md-4">
    <form class="form-horizontal" @submit.prevent="submitComment">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="commentFormInfo.username"/>
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="评论内容"
          v-model="commentFormInfo.content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default pull-right">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "commentFormInfo",
  data() {
    return {
      commentFormInfo: {
        username: '',
        content: '',
      }
    }
  },
  methods: {
    submitComment(){
      const {username,content} = this.commentFormInfo
      if(!username || !content){
        alert("输入内容不能为空")
        return;
      }
      //全局事件总线上触发添加评论事件
      this.$bus.$emit("addComment", username, content)
      this.commentFormData.username = "";
      this.commentFormData.content = "";
    }
  }
};
</script>

<style></style>