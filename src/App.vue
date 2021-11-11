<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/main">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list">List</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  <!-- <router-link to="/list">리스트페이지</router-link>
  <router-link to="/main">메인페이지</router-link> -->

  <router-view :posts="posts"> 
  </router-view>

</template>

<script>
import postData from './postData'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      posts: postData,
    }
  }
}
</script>

<style>

</style>
