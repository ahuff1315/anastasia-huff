<template>
  <div>
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
        <tech-chips :technologies="portfolioTech" />
      </div>
      <p class="text-body-1 font-weight-light text--secondary">
        This site is for displaying some of my personal projects. My current
        project has a live site that users can visit while the other projects
        have links to Github to view the code. More detailed information can be
        found on the individual project pages.
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
              <v-btn @click="$emit('more-info', 'portfolio')" icon>
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
        <v-chip class="ma-2 ml-0" small color="javascript" outlined>
          <v-icon small left>
            mdi-language-javascript
          </v-icon>
          JS
        </v-chip>
        <v-chip class="ma-2 ml-0" small color="ionic" outlined>
          <v-icon small left>
            mdi-atom-variant
          </v-icon>
          Ionic
        </v-chip>
        <v-chip class="ma-2 ml-0" small color="django" outlined>
          <v-icon small left>
            mdi-alpha-d-circle
          </v-icon>
          Django
        </v-chip>
        <v-chip class="ma-2 ml-0" small color="angular" outlined>
          <v-icon small left>
            mdi-angular
          </v-icon>
          Angular4
        </v-chip>
        <v-chip class="ma-2 ml-0" small color="bootstrap" outlined>
          <v-icon small left>
            mdi-bootstrap
          </v-icon>
          Bootstrap
        </v-chip>
        <v-chip class="ma-2 ml-0" small color="chart" outlined>
          <v-icon small left>
            mdi-chart-areaspline
          </v-icon>
          Chart.js
        </v-chip>
      </div>
      <p class="text-body-1 font-weight-light text--secondary">
        This app allows users to create and answer surveys that other users have
        created. These surveys can also display different visualizations on the
        data that has been collected from users that have completed the
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
              <v-btn @click="$emit('more-info', 'survey-says')" icon>
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
import techChips from '@/components/tech-chips.vue';

export default {
  data() {
    return {
      portfolioTech: [
        'JS',
        'Nuxt',
        'Vuetify',
        'Vue',
        'Sass',
        'Node',
        'Express',
      ],
      surveyTech: [],
    };
  },
  components: {
    techChips,
  },
  methods: {},
};
</script>

<style lang="scss"></style>
