<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <commentFormInfo />
      <commentList />
    </div>
  </div>
</template>

<script>
/* 
step1：拆分组件
step2：静态组件实现
step3：定义数据结构（谁需要数据展示，数据就定义在哪）
step4：数据遍历展示
step5：添加评论
step6：删除评论
*/
import commentFormInfo from "./views/commentFormInfo";
import commentList from "./views/commentList";

export default {
  name: "App",
  components: {
    commentFormInfo,
    commentList,
  },
};
</script>

<style>
</style>