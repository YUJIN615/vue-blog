<template>
  <div class="main-container">
    <main-banner></main-banner>
    <h2>Vue로 만든 블로그입니다.</h2>
    <p>환영합니다.</p>
  </div>
</template>

<script>
import MainBanner from './MainBannerPage.vue'

export default {
  name: 'MainBannerPage',
  components: {
    MainBanner,
  }
}
</script>

<style>
.main-container {
  width: 100%;
  margin-bottom: 50px;
}
.main-container h2 {
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 50px;
  font-size: 1.5rem;
}
.main-container p {
  text-align: center;
  font-size: 1.2rem;    
}
</style>