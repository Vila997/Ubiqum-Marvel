<template>
  <div class="background">
    <v-container>
      <p class="text-xs-center" v-if="usuario != null || ''">
        <b>Welcome {{usuario.nombre}}</b>
      </p>
      <div
        class="flip-container"
        v-for="(comic, index) in comics"
        :key="comic.id"
        v-touch="{left: (e) => swipe('Left'),right: (e) => swipe('Right')}"
      >
        <v-card class="flipper" align-center justify-center style="height: 500px">
          <div class="front">
            <v-img class="portada" :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`"></v-img>
          </div>
          <div class="back">
            <h2>{{comic.title}}</h2>
            <p class="desc">{{comic.description}}</p>
            <v-btn color="info" :to="'about/' + comic.id">More info</v-btn>
          </div>
        </v-card>
      </div>
      <div v-if="comics.length == 0">
        <p>NO COMICS FOUND</p>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
/* eslint-disable */
export default {
  computed: {
    comics() {
      return this.$store.getters.dameComics;
    },
    ...mapState(["usuario"])
  },
  data: () => ({
    swipeDirection: "None"
  }),

  /* RICO SWIPE*/

  methods: {
    swipe(direction) {
      this.swipeDirection = direction;
      // event.currentTarget.classList = position;

      if (direction == "Left") {
        if (!event.currentTarget.classList.contains("girado")) {
          event.currentTarget.classList.add("hoverI");
          event.currentTarget.classList.add("girado");
        } else if (event.currentTarget.classList.contains("hoverD")) {
          event.currentTarget.classList.remove("hoverD");
          event.currentTarget.classList.remove("girado");
        }
      }
      if (direction == "Right") {
        if (!event.currentTarget.classList.contains("girado")) {
          event.currentTarget.classList.add("hoverD");
          event.currentTarget.classList.add("girado");
        } else if (event.currentTarget.classList.contains("hoverI")) {
          event.currentTarget.classList.remove("hoverI");
          event.currentTarget.classList.remove("girado");
        }
      }
    }
  }
};
</script>



<style scoped>
.desc {
  padding: 0 20px;
  text-align: justify;
}
.login {
  margin-left: -15px;
  /* background-color: black; */
  /* color: red; */
}
.logo {
  height: 50px;
}

.navbar {
  position: relative;
}
/* // */

/* // */
.mail {
  text-align: center;
  padding-right: 145px;
}
.año {
  margin-right: -15px;
}
/* // */

/* // */

/* // */

.background {
  background-image: repeating-linear-gradient(
    #ed1d24,
    rgb(193, 178, 156) 10%,
    #ed1d24
  );
  height: 100%;
}
/* /uhoiuhgliuhgliuuhluhpuhjooiiuhp/ */
/* /uhoiuhgliuhgliuuhluhpuhjooiiuhp/ */
/* /uhoiuhgliuhgliuuhluhpuhjooiiuhp/ */
/* /uhoiuhgliuhgliuuhluhpuhjooiiuhp/ */
.flip-container {
  perspective: 1000px;
  margin-left: 10px;
}
/* flip the pane when hovered */
.flip-container.hoverD .flipper {
  transform: rotateY(180deg);
}
.flip-container.hoverI .flipper {
  transform: rotateY(-180deg);
}
.back {
  text-align: center;
  padding-left: 1px;
  padding-right: 1px;
}

.flip-container,
.front,
.back {
  width: 320px;
  height: 480px;
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* flip speed goes here */
.flipper {
  transition: 0.6s;
  transform-style: preserve-3d;

  position: relative;
}

/* hide back of pane during swap */
.front,
.back {
  backface-visibility: hidden;

  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0px;
  background-color: #bdbdbd;
}

/* front pane, placed above back */
.front {
  z-index: 2;
  /* for firefox 31 */
  transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
  transform: rotateY(180deg);
}
</style>



