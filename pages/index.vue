<template>
  <div class="main-container py-16">
    <div class="main-opacity" :class="[fadeOutStart ? 'fade-out-start' : '']">
      <div class="section-container">
        <h1 class="text-h1 py-4 text--secondary">
          Hi,
        </h1>
        <h3 class="text-h3 font-weight-light py-4 text--secondary">
          My name is Anastasia Huff.
        </h3>
        <p class="text-h6 font-weight-light text--secondary pb-6">
          I'm a
          <span class="text--primary font-weight-regular">
            software engineer
          </span>
          from Phoenix, Arizona. I currently live and work in Austin, Texas.
        </p>
      </div>
      <v-divider class="mt-16 home-hr"></v-divider>
      <main-project @more-info="redirect($event)" />
      <v-divider class="mt-16 home-hr"></v-divider>
      <div class="section-container pt-16">
        <p class="text-overline font-weight-light pt-4 mb-0 text--secondary">
          Current Project
        </p>
        <h3 class="text-h3 font-weight-regular pb-4 pt-2 text--primary">
          Portfolio Site
        </h3>
        <p class="text-subtitle-2 font-weight-light text--secondary">
          Aug 2020 - Present
        </p>
        <div class="pb-4">
          <v-chip class="ma-2 ml-0" small color="nuxt" outlined>
            <v-icon small left>
              mdi-nuxt
            </v-icon>
            Nuxt.js
          </v-chip>
          <v-chip class="ma-2" small color="vuetify" outlined>
            <v-icon small left>
              mdi-vuetify
            </v-icon>
            Vuetify
          </v-chip>
          <v-chip class="ma-2" small color="vue" outlined>
            <v-icon small left>
              mdi-vuejs
            </v-icon>
            Vue.js
          </v-chip>
          <v-chip class="ma-2" small color="sass" outlined>
            <v-icon small left>
              mdi-sass
            </v-icon>
            Sass
          </v-chip>
          <v-chip class="ma-2" small color="node" outlined>
            <v-icon small left>
              mdi-nodejs
            </v-icon>
            Node.js
          </v-chip>
          <v-chip class="ma-2" small color="express" outlined>
            Express
          </v-chip>
        </div>
        <p class="text-body-1 font-weight-light text--secondary">
          The site you are on right now. This app allows users to create and
          answer surveys that other users have created. These surveys can also
          display different visualizations on the data that has been collected.
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
            <span>No live site</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div class="ml-4" v-on="on">
                <v-btn icon>
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </div>
            </template>
            <span>View repo</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div class="ml-4" v-on="on">
                <v-btn @click="() => redirect('portfolio')" icon>
                  <v-icon>mdi-information-outline</v-icon>
                </v-btn>
              </div>
            </template>
            <span>More info</span>
          </v-tooltip>
        </div>
      </div>
      <div class="section-container pt-16">
        <p class="text-overline font-weight-light pt-4 mb-0 text--secondary">
          Older Project
        </p>
        <h3 class="text-h3 font-weight-regular pb-4 pt-2 text--primary">
          Survey Says
        </h3>
        <p class="text-subtitle-2 font-weight-light text--secondary">
          Jan - June 2018
        </p>
        <div class="pb-4">
          <v-chip class="ma-2 ml-0" small color="ionic" outlined>
            Ionic
          </v-chip>
          <v-chip class="ma-2" small color="django" outlined>
            Django
          </v-chip>
          <v-chip class="ma-2" small color="angular" outlined>
            <v-icon small left>
              mdi-angular
            </v-icon>
            Angular4
          </v-chip>
          <v-chip class="ma-2" small color="bootstrap" outlined>
            <v-icon small left>
              mdi-bootstrap
            </v-icon>
            Bootstrap
          </v-chip>
          <v-chip class="ma-2" small color="graphjs" outlined>
            GraphJS
          </v-chip>
        </div>
        <p class="text-body-1 font-weight-light text--secondary">
          This app allows users to create and answer surveys that other users
          have created. These surveys can also display different visualizations
          on the data that has been collected from users that have completed the
          questionnaire.
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
            <span>No live site</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div class="ml-4" v-on="on">
                <v-btn icon>
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </div>
            </template>
            <span>View repo</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div class="ml-4" v-on="on">
                <v-btn @click="() => redirect('survey-says')" icon>
                  <v-icon>mdi-information-outline</v-icon>
                </v-btn>
              </div>
            </template>
            <span>More info</span>
          </v-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainProject from '@/components/main-project.vue';

export default {
  data() {
    return {
      fadeOutStart: false,
    };
  },
  components: {
    mainProject,
  },
  methods: {
    redirect(url) {
      this.fadeOutStart = true;
      setTimeout(() => {
        this.$router.push(url);
      }, 200);
    },
  },
};
</script>

<style lang="scss">
.home-hr {
  max-width: 700px;
  margin: auto;
}
</style>
