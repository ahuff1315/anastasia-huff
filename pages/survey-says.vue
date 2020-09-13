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
          Survey Says
        </h1>
        <p class="text-h6 font-weight-light text--secondary">
          Jan - June 2018
        </p>
        <image-carousel class="my-10 py-6" :images="images" />
        <h4 class="text-h4">
          Technologies
        </h4>
        <tech-chips :technologies="tech" class="pt-4" />
        <p class="text-body-1 font-weight-light text--secondary pb-16"></p>
        <h4 class="text-h4">
          About this project
        </h4>
        <p class="text-body-1 font-weight-light text--secondary pb-16"></p>
      </div>
    </div>
  </div>
</template>

<script>
import imageCarousel from '@/components/image-carousel.vue';
import techChips from '@/components/tech-chips.vue';

export default {
  data() {
    return {
      fadeOutStart: false,
      tech: ['JS', 'Ionic', 'Django', 'Angular4', 'Bootstrap', 'Chart.js'],
      images: [
        {
          detail:
            'Survey says home screen displaying different posts and the ability to answer and view the data visualizations',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599937469/portfolio/survey-says-main_sicd8p.svg',
        },
        {
          detail:
            'Creating a new question and viewing the new question on the home screen',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599940183/portfolio/survey-says-create-question_emgbcp.svg',
        },
        {
          detail: 'Landing screen with navigation options for login and signup',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599941540/portfolio/survey-says-start_qgtucu.svg',
        },
        {
          detail:
            'History screen displaying previously answered questions and the account details screen',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599943586/portfolio/survey-says-history_r2zae8.svg',
        },
        {
          detail:
            'Search screen that allows you to search for specific surveys',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599943631/portfolio/survey-says-search_jv5oez.svg',
        },
      ],
    };
  },
  components: {
    imageCarousel,
    techChips,
  },
  methods: {
    redirect() {
      this.fadeOutStart = true;
      setTimeout(() => {
        this.$router.go(-1);
      }, 200);
    },
  },
};
</script>

<style lang="scss"></style>
