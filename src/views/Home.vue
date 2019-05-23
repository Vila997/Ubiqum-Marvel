<template>
  <div class="background">
    <v-container>
      <v-layout>
        <v-toolbar class="navbar" color="#ED1D24">
          <v-img
            class="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png"
          ></v-img>
          <v-spacer></v-spacer>
          <!-- <v-btn color="#ED1D24" to="/">welcome</v-btn>
          <v-btn color="#ED1D24" to="about">about</v-btn>-->
        </v-toolbar>
      </v-layout>

      <!-- preparando para el swipe -->
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
            <v-btn to="about">More info</v-btn>
          </div>
        </v-card>
      </div>
      <v-footer color="#ED1D24" class="pa-3">
        <v-spacer></v-spacer>
        <p class="mail">avilacult@gmail.com</p>
        <p class="año">2019&copy;</p>
      </v-footer>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  computed: {
    comics() {
      return this.$store.getters.dameComics;
    }
  },
  data: () => ({
    swipeDirection: "None"
  }),

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



<style>
.logo {
  height: 50px;
}
/* .front {
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  height: auto;
  width: auto;
  margin-bottom: 50px;
  margin-top: 50px;
  //
  z-index: 2;
  transform: rotateY(0deg);
  transition: all 0.3s linear;
} */
.navbar {
  position: relative;
}
/* // */
/* .portada {
  height: 100%;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 1000px;
} */
/* // */
.mail {
  text-align: center;
  padding-right: 145px;
}
.año {
  margin-right: -15px;
}
/* // */

/* .back {
  transition: all 0.3s linear;
  transform: rotateY(180deg);
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  height: auto;
  width: auto;
  margin-bottom: 50px;
  margin-top: 50px;
} */
/* // */
/* .container {
  position: relative;
}

.container:hover .front {
  transform: rotateY(180deg);
}

.container:hover .back {
  transform: rotateY(360deg);
} */
/* // */

.background {
  /* background-image: linear-gradient(
    to left,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 1)
  ); */
  background-image: repeating-linear-gradient(
    #ed1d24,
    rgb(193, 178, 156) 10%,
    #ed1d24
  );
}
/* /uhoiuhgliuhgliuuhluhpuhjooiiuhp/ */
/* /uhoiuhgliuhgliuuhluhpuhjooiiuhp/ */
/* /uhoiuhgliuhgliuuhluhpuhjooiiuhp/ */
/* /uhoiuhgliuhgliuuhluhpuhjooiiuhp/ */
.flip-container {
  perspective: 1000px;
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
  margin-top: 10px;
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



