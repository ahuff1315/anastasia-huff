<template>
  <div class="main-container py-16">
    <div class="main-opacity" :class="[fadeOutStart ? 'fade-out-start' : '']">
      <v-btn class="ml-4 mt-4" fab top left fixed @click="redirect()">
        <v-icon large>
          mdi-chevron-left
        </v-icon>
      </v-btn>
      <div class="section-container">
        <h1 class="text-h1 pt-10 pb-6">
          Financially Financed
        </h1>
        <p class="text-h6 font-weight-light text--secondary">
          Jan 2019 - Present
        </p>
        <image-carousel class="my-10 py-6" :images="images" />
        <!-- <p class="text-body-1 font-weight-light text--secondary">
          This web app focuses on personal finance and provides useful tools and
          calculators to users who may have questions about their financial
          situation. These tools give the user a unique look into their finances
          and use various data visualizations to show breakdowns and highlight
          important points.
        </p> -->
        <h3 class="text-h4">
          Technologies
        </h3>
        <tech-chips :technologies="tech" />
        <p class="text-body-1 font-weight-light text--secondary pb-16"></p>
        <h3 class="text-h4">
          About this project
        </h3>
        <p class="text-body-1 font-weight-light text--secondary pb-16"></p>
        <!-- <p class="text-body-1 font-weight-light text--secondary pb-16"></p> -->
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
      tech: [
        'JS',
        'Nuxt',
        'Vuetify',
        'Vue',
        'Sass',
        'Node',
        'Express',
        'Chart.js',
      ],
      images: [
        {
          detail: 'test',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598820969/portfolio/financially-financed-dark-transparent_i2hpna.png',
        },
        {
          detail: 'Compound interest timespan calculator value tab.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598132246/portfolio/financially-financed-dark_tbbuqj.svg',
        },
        {
          detail:
            'The latest post component displaying details about the most recent calculator or post.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598737296/portfolio/financially-financed-latest-post_glzcas.png',
        },
        {
          detail: 'Some of the current posts on the posts page.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598737393/portfolio/financially-financed-posts_hlak7y.png',
        },
        {
          detail: 'The compound interest goal calculator value tab.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598736416/portfolio/financially-financed-ci-goal1_ns3fgf.png',
        },
        {
          detail:
            'The compound interest goal calculator yearly tab and data visualization.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598736423/portfolio/financially-financed-ci-goal2_jjwwcy.png',
        },
        {
          detail:
            'Compound interest goal calculator advanced options with age entered.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598736428/portfolio/financially-financed-ci-goal3_qhqtnj.png',
        },
        {
          detail:
            'Compound interest goal calculator advanced options with investment growth rate adjusted.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598736432/portfolio/financially-financed-ci-goal4_t0ovhe.png',
        },
      ],
    };
  },
  components: {
    imageCarousel,
    techChips,
  },
  computed: {},
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
