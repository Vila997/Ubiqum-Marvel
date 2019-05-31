<template>
  <div class="container">
    <!-- <v-img
      class="background"
      src="https://i.annihil.us/u/prod/marvel/html_pages_assets/mobile-apps-page/terrigen/prod/images/app-comics-0279a1adc3.jpg"
    />-->
    <!-- <v-img
      class="background"
      src="https://imgc.allpostersimages.com/img/print/posters/marvel-comics-retro-pattern-design-featuring-marvel-comics-retro_a-G-13765461-13372584.jpg"
    />-->
    <!-- <div class="container"> -->
    <!-- <img
      class="fondo"
      src="https://i.pinimg.com/originals/1c/6e/51/1c6e514e59b7e887fa695400e72033eb.jpg"
      alt="marvel"
      style="width:100%"
    >-->

    <!-- //////////////////////////////////// -->
    <!-- <v-btn class="btn" to="home">Marvel comics</v-btn> -->
    <!-- /////////////////////////////////////////// -->
    <div class="center">
      <v-btn class="boton" to="home" color="#ED1D24" fab large dark>
        <h1 class="icono">M</h1>
        <!-- <v-icon>alarm</v-icon> -->
        <!-- <v-img src="https://banner2.kisspng.com/20180409/fuw/kisspng-the-infinity-gauntlet-youtube-thanos-t-shirt-glove-infinity-5acbada55eecb0.4757364115232977013888.jpg"></v-img> -->
      </v-btn>
    </div>
    <!-- </div> -->
    <!-- <v-footer color="#ED1D24" class="pa-3">
      <v-spacer></v-spacer>
      <p class="mail">avilacult@gmail.com</p>
      <p class="año">2019;&copy;</p>
    </v-footer>-->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* ///////////////////////////////////// */
/* ////////////////////////////////// */
.container {
  position: relative;
  width: 100%;
  max-width: 400px;
  background-image: url(https://i.pinimg.com/originals/1c/6e/51/1c6e514e59b7e887fa695400e72033eb.jpg);
}

.container img {
  width: 100%;
  height: auto;
}

.container .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #f1f1f1;
  color: black;
  font-size: 16px;
  padding: 16px 30px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.container .btn:hover {
  background-color: black;
  color: white;
}
/* ///////////////////////////// */
/* /////////////////////////////////// */
.background {
  width: 100%;
  height: 100%;
}
.fondo {
  /* background-color: rgba(245, 176, 65, 0.548); */
  /* background-image: linear-gradient(to bottom right, red, yellow); */
  /* ///// */
  /* background-image: linear-gradient(
    to top,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 1)
  ); */
}
.icono {
  font-size: 60px;
}
.boton {
}
.center {
  position: absolute;
  top: 40%;
  left: 40%;
}
/* .boton {
} */
</style>
