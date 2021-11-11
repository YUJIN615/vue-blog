<template>
  <article class="detail-container">
    <h4 class="title">{{ posts[$route.params.id].title }}</h4>
    <p class="date">{{ posts[$route.params.id].date }}</p>
    <p class="content">{{ posts[$route.params.id].content }}</p>
    <router-view></router-view>
  </article>
</template>

<script>
export default {
  name: 'detailPage',
  props: {
    posts: Array,
  }
}
</script>

<style scoped>
.detail-container {
  padding: 40px 40px;
}
.detail-container .title {
  font-weight: bold;
  margin-bottom: 20px;
}
.detail-container .date {
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
}
.detail-container .content {
  border-top: 1px solid #ddd;
  padding: 30px 0;
}
</style>