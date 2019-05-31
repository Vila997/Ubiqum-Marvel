<template>
  <div class="chat">
    <h3 class="saludo">Welcome {{usuario.nombre}}</h3>
    <v-card class="chatField">
      <div class="mensajes" id="patata">
        <div class="mensaje" v-for="(mens, index) in mensajes" :key="index">
          <p class="autor">
            <b>{{mens.nombre}}</b>
          </p>
          <p class="text">
            <b>{{mens.mensaje}}</b>
          </p>
          <p class="date">{{mens.fecha}}</p>
        </div>
      </div>
      <div>
        <v-form @submit.prevent="enviarMensaje()" class="input" xs12 sm6 md3>
          <v-text-field label="mensaje" v-model="mensaje"></v-text-field>
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { db } from "@/firebase";
import moment from "moment";

export default {
  data() {
    return {
      mensaje: "",
      mensajes: []
    };
  },
  computed: { ...mapState(["usuario"]) },
  methods: {
    enviarMensaje() {
      console.log("enviarMensaje", this.mensaje);
      db.collection("chat Marvel").add({
        mensaje: this.mensaje,
        nombre: this.usuario.nombre,
        fecha: Date.now()
      });
      this.mensaje = "";
      document.getElementById("patata").scrollTop = document.getElementById(
        "patata"
      ).scrollHeight;
    }
  },
  created() {
    moment.locale("es");
    let ref = db
      .collection("chat Marvel")
      .orderBy("fecha", "desc")
      .limit(10);
    ref.onSnapshot(querySnapshot => {
      this.mensajes = [];
      querySnapshot.forEach(doc => {
        this.mensajes.unshift({
          nombre: doc.data().nombre,
          mensaje: doc.data().mensaje,
          fecha: moment(doc.data().fecha).format("DD/MM/YY hh:mm:ss")
        });
      });
    });
  }
};
</script>

<style>
.chat {
  background-image: repeating-linear-gradient(
    #ed1d24,
    rgb(193, 178, 156) 10%,
    #ed1d24
  );
  height: 100%;
}
.saludo {
  text-align: center;
  padding: 10px 10px;
}
.input {
  margin: 10px 10px;
}
.chatField {
  margin: 20px 20px;
}
.autor {
  margin: 0 15px;
  padding-top: 10px;
}
.text {
  margin: 0 15px;
  padding: 10px 0;
}
.mensaje {
  background-color: rgb(233, 98, 98);
  margin: 10px 10px;
}
.date {
  text-align: right;
}
</style>
