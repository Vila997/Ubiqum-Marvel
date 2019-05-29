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
        </v-toolbar>
      </v-layout>

      <v-card v-if="comics" class="card">
        <h1>{{comics.title}}</h1>
        <v-img class="portada" :src="`${comics.thumbnail.path}.${comics.thumbnail.extension}`"/>
        <p class="descripcion">{{comics.description}}</p>
        <h3>Creators</h3>
        <div class="creadores">
          <p
            v-for="(creator,index) in comics.creators.items"
            :key="creator.name"
          >{{creator.name}}({{creator.role}})</p>
        </div>
        <h3>Dates</h3>
        <p v-for="(date,index) in comics.dates" :key="index">{{date.type}}:{{date.date}}</p>
        <v-btn class="red lighten-2" to="/home">Back to comics</v-btn>
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
      return this.$store.getters.dameComics.find(c => c.id == this.comic);
    }
  }
};
</script>





<style scoped>
/* .creadores {
 display: flex;
} */
.card {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10px;
  background-color: #bdbdbd;
}
/* .descripcion {
  
} */
.portada {
  width: 50%;
  margin-left: 25%;
  margin-top: 10px;
  margin-bottom: 10px;
}
.logo {
  height: 50px;
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