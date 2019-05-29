<template>
  <v-app>
    <!-- <v-toolbar class="navbar" color="#ED1D24">
        <v-img
          class="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png"
        ></v-img>
        <v-spacer></v-spacer>

        <v-btn class="login" color="#ED1D24" to="/login">Login</v-btn>
    </v-toolbar>-->
    <router-view></router-view>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>
