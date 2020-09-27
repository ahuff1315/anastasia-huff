<template>
  <div class="main-container py-16">
    <div class="main-opacity" :class="[fadeOutStart ? 'fade-out-start' : '']">
      <v-btn class="ml-sm-4 mt-sm-4" fab top left fixed @click="redirect()">
        <v-icon large>
          mdi-chevron-left
        </v-icon>
      </v-btn>
      <div class="section-container">
        <h1 class="text-sm-h1 text-h2 pt-10 pb-6">
          Portfolio Site
        </h1>
        <p class="text-h6 font-weight-light text--secondary">
          Aug 2020 - Present
        </p>
        <div class="d-flex">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div v-on="on">
                <v-btn disabled icon>
                  <v-icon>mdi-launch</v-icon>
                </v-btn>
              </div>
            </template>
            <span>On live site</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div class="ml-4" v-on="on">
                <v-btn
                  href="https://github.com/ahuff1315/anastasia-huff"
                  target="_blank"
                  icon
                >
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </div>
            </template>
            <span>View repo</span>
          </v-tooltip>
        </div>
        <div class="my-10 py-sm-6">
          <v-img
            :aspect-ratio="19 / 9"
            src="https://res.cloudinary.com/dxbppu0tw/image/upload/v1600034903/portfolio/portfolio-main_yblzzo.svg"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </div>
        <h4 class="text-h4 pb-4">
          Technologies
        </h4>
        <tech-chips :technologies="tech" />
        <p class="text-body-1 font-weight-light text--secondary pb-10"></p>
        <h4 class="text-h4 pb-4">
          About This Project
        </h4>
        <p class="text-body-1 font-weight-light text--secondary">
          This portfolio site is to show some of my projects. Since my main
          project Financially Financed does not have code publicly available,
          you can view the code for this website on Github. You can click the
          Github icon at the top of this page to go to the repo.
        </p>
        <h4 class="text-h4 pt-6 pb-4">
          Architecture
        </h4>
        <p class="text-body-1 font-weight-light text--secondary pb-16">
          This site has the same architecture as my main project Financially
          Financed. Click
          <a
            class="d-inline-block"
            href=""
            @click="hrefGoTo($event, 'financially-financed#architecture')"
          >
            here
          </a>
          to learn more about it.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import techChips from '@/components/tech-chips/tech-chips.vue';

export default {
  data() {
    return {
      fadeOutStart: false,
      tech: [
        'JS',
        'Nuxt',
        'Vuetify',
        'Vue',
        'Sass',
        'Node',
        'Docker',
        'Kubernetes',
        'Express.js',
      ],
    };
  },
  head() {
    return {
      title: 'Anastasia Huff - Portfolio Site',
    };
  },
  components: {
    techChips,
  },
  methods: {
    redirect() {
      this.fadeOutStart = true;
      setTimeout(() => {
        this.$router.go(-1);
      }, 200);
    },
    hrefGoTo($event, url) {
      $event.preventDefault();
      this.fadeOutStart = true;
      setTimeout(() => {
        this.$router.push(url);
      }, 200);
    },
  },
};
</script>

<style lang="scss"></style>
