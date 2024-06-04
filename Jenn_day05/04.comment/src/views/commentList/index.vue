<!--
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-06-03 21:06:11
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-06-04 00:02:19
 * @FilePath: \04.comment\src\views\commentList\commentList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <!-- <h2>暂无评论，点击左侧添加评论！！！</h2> -->
    <ul class="list-group">
      <commentItem
        v-for="comment in commentDetail"
        :key="comment.id"
        :comment="comment"
        :id="id"
        :delComment="delComment"
      />
    </ul>
  </div>
</template>

<script>
import commentItem from "../commentItem";

export default {
  name: "commentList",
  data() {
    return {
      commentDetail: [
        { id: 1, username: "开心超人", content: "开心铁拳" },
        { id: 2, username: "小心超人", content: "小心分身" },
        { id: 3, username: "甜心超人", content: "甜心泡泡" },
        { id: 4, username: "花心超人", content: "花心铁链" },
        { id: 5, username: "粗心超人", content: "粗心飞弹" },
      ],
    };
  },
  methods: {
    addComment(username, content) {
      this.commentDetail.push({
        id: Date.now(),
        username,
        content,
      });
    },
    /* delComment(id) {
      const comment = this.commentDetail.find((comment)=>comment.id === id)

    }, */
  },
  // 数据源在哪，操作数据的方法在哪，自定义事件就在哪定义
  mounted() {
    this.$bus.$on("addComment", this.addComment);
  },
  beforeDestroy() {
    this.$bus.$off("addComment", this.addComment);
  },
  components: {
    commentItem,
  },
};
</script>

<style>
/* list */
.reply {
  margin-top: 0px;
}
</style>