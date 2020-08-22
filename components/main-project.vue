<template>
  <div class="section-container pt-16">
    <p class="text-overline font-weight-light pt-4 mb-0 text--secondary">
      Current project
    </p>
    <div>
      <h3 class="text-h3 font-weight-regular pb-4 pt-2 text--primary">
        Financially Financed
      </h3>
      <p class="text-subtitle-2 font-weight-light text--secondary">
        Jan 2019 - Present
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
              <v-btn @click="$emit('more-info', 'financially-financed')" icon>
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>
            </div>
          </template>
          <span>More info</span>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<style lang="scss"></style>
