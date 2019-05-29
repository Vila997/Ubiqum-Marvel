<template>
  <div class="login">
    <h1 class="titulo">LOGIN</h1>
    <!-- <input type="email">
    <input type="password">-->
    <v-btn block color="error" @click="google()">
      <v-icon left dark>fab fa-google</v-icon>Google
    </v-btn>
    <v-btn class="cerrado" @click="cerrarSesion()">Log out</v-btn>
    <v-btn to="/home">Back to Comics</v-btn>
  </div>
</template>

<script>
import { firebase, auth, db } from "@/firebase";
import { mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      registro: false
    };
  },
  methods: {
    ...mapMutations(["nuevoUsuario"]),
    ...mapActions(["cerrarSesion"]),
    async google() {
      console.log("google");
      const provider = new firebase.auth.GoogleAuthProvider();

      try {
        const result = await firebase.auth().signInWithPopup(provider);
        const user = result.user;
        console.log(user);
        const usuario = {
          nombre: user.displayname,
          email: user.email,
          uid: user.uid,
          foto: user.photoURL
        };

        this.nuevoUsuario(usuario);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.titulo {
  text-align: center;
}
.login {
  background-image: repeating-linear-gradient(
    #ed1d24,
    rgb(193, 178, 156) 10%,
    #ed1d24
  );
  height: 100%;
}
.cerrado {
  align-content: center;
}
</style>
