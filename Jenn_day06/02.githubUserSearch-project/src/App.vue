<template>
  <div class="container">
    <searchUsers />
    <userList />
    </div>
</template>

<script>
import searchUsers from './views/searchUsers'
import userList from './views/userList'

export default {
  name: "App",
  components: {
    searchUsers,userList
  }
};

</script>

<style>
</style>