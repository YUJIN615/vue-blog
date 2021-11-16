<template>
  <main-banner></main-banner>
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
import MainBanner from './MainBannerPage.vue'

export default {
  name: 'PostList',
  components: {
    MainBanner,
  },
  props: {
    posts: Object,
  }
}
</script>

<style scoped>
.post-list {
  width: 96%;
  margin: 0 auto;
  padding: 30px 15px;
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