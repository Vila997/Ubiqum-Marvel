<template>
  <v-app>
    <v-toolbar class="v-toolbar--fixed" color="#ED1D24">
      <v-img
        class="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png"
      ></v-img>
      <v-spacer></v-spacer>
      <v-btn v-if="usuario != ''" color="rgb(231, 105, 105)" to="/chat">Chat</v-btn>
      <v-btn class="login" color="rgb(231, 105, 105)" to="/login">Login</v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="#ED1D24" class="v-footer pa-3 v-footer--fixed">
      <v-spacer></v-spacer>
      <p class="mail">avilacult@gmail.com</p>
      <p class="año">2019&copy;</p>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapState(["usuario"])
  }
};
</script>
<style scoped>
.logo {
  height: 50px;
  padding-left: 95px;
}
.container {
  padding: 0px;
  height: 100%;
}
main {
  padding-top: 50px !important;
}
.mail {
  margin-right: 160px;
}
</style>

