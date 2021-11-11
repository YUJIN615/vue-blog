<template>
  <div
    class="post-list"
    v-for="(post, i) in posts" :key="i"
    @click="$router.push('/detail/'+i)"
  >
    <h5 class="title">{{ posts[i].title }}</h5>
    <p class="date">{{ posts[i].date }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    posts: Object,
  }
}
</script>

<style scoped>
.post-list {
  width: 96%;
  margin: 0 auto;
  padding: 30px 20px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}
.post-list .title {
  font-weight: bold;
}
.post-list .date {
  margin: 0;
  color: #999;
  font-size: 16px;
}
</style>