<template>
  <div class="main-banner"></div>
</template>

<script>
export default {
  name: 'MainBanner',
  // mounted() {
  //   const mainBanner = document.querySelector('.main-banner');
  //   const url = `https://api.unsplash.com/photos/random/?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM`;

  //   const randomImg = () => {
  //     fetch(url)
  //     .then(response => response.json())
  //     .then((jsonData) => {
  //       let imgUrl = jsonData.urls.regular;
  //       mainBanner.style.background = `url('${imgUrl}') no-repeat center/cover`;

  //     })
  //     .catch(error => console.log(`Error: ${error}`));
  //   };
  //   randomImg();
  // }
}
</script>

<style>
.main-banner {
  width: 100%;
  height: 20vw;
  min-height: 150px;
  background: #ddd;
  background: url('../assets/bg2.jpg') center / cover;
}
</style>