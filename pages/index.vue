<template>
  <div class="main-container py-16">
    <div class="main-opacity" :class="[fadeOutStart ? 'fade-out-start' : '']">
      <div class="section-container" style="height: calc(80vh - 128px);">
        <h1 class="text-h1 py-4 text--secondary">
          Hi,
        </h1>
        <h3 class="text-h3 font-weight-light py-4 text--secondary">
          My name is Anastasia Huff.
        </h3>
        <p class="text-h6 font-weight-light text--secondary">
          I'm a
          <span class="text--primary font-weight-regular">
            software engineer
          </span>
          from Phoenix, Arizona. I currently live and work in Austin, Texas.
        </p>
      </div>
      <div class="section-container pt-16">
        <p class="text-overline font-weight-light pt-4 mb-0 text--secondary">
          Current project
        </p>
        <h3 class="text-h3 font-weight-regular py-4 text--primary">
          Financially Financed
        </h3>
        <p class="text-subtitle-2 font-weight-light text--secondary">
          Jan 2019 - Present
        </p>
        <div class="pb-4">
          <v-chip class="ma-2" small color="nuxt" outlined>
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
          <v-chip class="ma-2" small color="chart" outlined>
            Chart.js
          </v-chip>
        </div>
        <p class="text-body-1 font-weight-light text--secondary">
          This web app focuses on personal finance and provides useful tools and
          calculators to users who may have questions about their financial
          situation. These tools give the user a unique look into their finances
          and use various data visualizations to show breakdowns and highlight
          important points.
        </p>
        <div class="d-flex">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div v-on="on">
                <v-btn
                  icon
                  href="https://financiallyfinanced.com/"
                  target="_blank"
                >
                  <v-icon>mdi-launch</v-icon>
                </v-btn>
              </div>
            </template>
            <span>View live site</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div class="ml-4" v-on="on">
                <v-btn disabled icon>
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </div>
            </template>
            <span>Code in private repo</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div class="ml-4" v-on="on">
                <v-btn icon>
                  <v-icon>mdi-information-outline</v-icon>
                </v-btn>
              </div>
            </template>
            <span>More info</span>
          </v-tooltip>
        </div>
      </div>
      <div class="section-container py-16">
        <p class="text-overline font-weight-light pt-4 mb-0 text--secondary">
          Other projects
        </p>
        <h3 class="text-h3 font-weight-regular py-4 text--primary">
          Survey Says
        </h3>
        <p class="text-subtitle-2 font-weight-light text--secondary">
          Jan - June 2018
        </p>
        <div class="pb-4">
          <v-chip class="ma-2" small color="ionic" outlined>
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
          <keep-alive>
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
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fadeOutStart: false,
    };
  },
  components: {},
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
.main-container {
  height: 100%;
}
p {
  max-width: 600px;
}
.section-container {
  max-width: 700px;
  margin: auto;
}
.fade-out-start {
  transition: opacity 0.2s ease-in;
  opacity: 0 !important;
}
.main-opacity {
  animation: fadein ease-in-out 0.2s;
  opacity: 1;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
