<template>
  <div class="background">
    <v-container>
      <!-- <v-toolbar class="navbar" color="#ED1D24">
        <v-img
          class="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png"
        ></v-img>
        <v-spacer></v-spacer>
      </v-toolbar>-->
      <div class="chat">
        <!-- <h3 class="saludo" v-if="usuario != null">Welcome {{usuario.nombre}}</h3> -->
      </div>
      <div class="login">
        <v-card class="card">
          <h1 class="titulo">
            <b>LOGIN</b>
          </h1>
          <p class="aviso">Login to see each comic description and to use the chat.</p>
          <!-- <input type="email">
          <input type="password">-->
          <v-btn block color="error" @click="google()">
            <v-icon left dark>fab fa-google</v-icon>Google
          </v-btn>
          <div class="botones">
            <v-btn color="error" class="cerrado" @click="cerrarSesion()">Log out</v-btn>
            <v-btn color="success" to="/home">Back to Comics</v-btn>
          </div>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import { firebase, auth, db } from "@/firebase";
import { mapMutations, mapActions, mapState } from "vuex";
import router from "@/router";

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
          nombre: user.displayName,
          email: user.email,
          uid: user.uid,
          foto: user.photoURL
        };

        this.nuevoUsuario(usuario);
        router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    ...mapState(["usuario"])
  }
};
</script>

<style scoped>
.card {
  background-color: #bdbdbd;
}
.mail {
  text-align: center;
  padding-right: 100px;
}
.año {
  margin-right: -15px;
}
.botones {
  display: flex;
  justify-content: space-between;
}
.background {
  /* background-image: url("https://www.yojimbocomics.com/wp-content/uploads/2013/11/pp486-marvel.jpg"); */
  background-image: repeating-linear-gradient(
    #ed1d24,
    rgb(193, 178, 156) 10%,
    #ed1d24
  );
  /* height: 100%; */
}
.logo {
  height: 50px;
}
.titulo {
  text-align: center;
}
.login {
  padding-top: 40px;
  padding-left: 15px;
  padding-right: 15px;
}
.cerrado {
  align-content: center;
}
.container {
  padding-bottom: 97%;
}
.aviso {
  text-align: justify;
}
.saludo {
  text-align: center;
}
</style>
