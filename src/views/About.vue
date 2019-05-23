<template>
  <div class="about">
    <v-container>
      <v-layout>
        <v-toolbar color="#ED1D24">
          <v-img
            class="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png"
          ></v-img>
          <v-spacer></v-spacer>
          <v-btn color="#ED1D24" to="home">Comics</v-btn>
        </v-toolbar>
      </v-layout>

      <v-card>
        <!-- Falta la acabar lo de la prop para imprimir comics por separado -->
        <!-- <v-img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`"/> -->
        <p>donde va la info de cada comic</p>
        <v-btn to="home">Home</v-btn>
      </v-card>

      <v-spacer></v-spacer>
      <!-- // footer -->
      <v-footer color="#ED1D24" class="pa-3">
        <p class="mail">avilacult@gmail.com</p>
        <p class="año">&copy; 2019</p>
      </v-footer>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["comic"],
  computed: {
    comics() {
      return this.$store.getters.dameComics;
    }
  }
};
</script>





<style>
.logo {
  margin-left: 1px;
}
.mail {
  text-align: center;
  padding-right: 145px;
}
.año {
  margin-right: -15px;
}
.about {
  /* background-color: rgba(245, 176, 65, 0.548); */
  background-image: repeating-linear-gradient(
    #ed1d24,
    rgb(193, 178, 156) 10%,
    #ed1d24
  );
}
</style>