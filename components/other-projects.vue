<template>
  <div>
    <div class="section-container pt-16">
      <p class="text-overline font-weight-light pt-4 mb-0 text--secondary">
        This Website
      </p>
      <h3
        @click="$emit('more-info', 'portfolio')"
        class="text-h3 font-weight-regular mb-4 pt-2 text--primary clickable-text d-inline-flex"
      >
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
    <v-divider class="mt-16 home-hr"></v-divider>
    <div class="section-container pt-16">
      <p class="text-overline font-weight-light pt-4 mb-0 text--secondary">
        Older Project
      </p>
      <h3
        @click="$emit('more-info', 'survey-says')"
        class="text-h3 font-weight-regular mb-4 pt-2 text--primary clickable-text d-inline-flex"
      >
        Survey Says
      </h3>
      <p class="text-subtitle-2 font-weight-light text--secondary">
        Jan - April 2018
      </p>
      <div class="pb-4">
        <tech-chips :technologies="surveyTech" />
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
        'Docker',
        'Express.js',
      ],
      surveyTech: [
        'TypeScript',
        'Ionic',
        'Django',
        'Python',
        'Angular4',
        'Bootstrap',
        'Chart.js',
      ],
    };
  },
  components: {
    techChips,
  },
  methods: {},
};
</script>

<style lang="scss"></style>
