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
          Portfolio Site
        </h1>
        <p class="text-h6 font-weight-light text--secondary">
          Aug 2020 - Present
        </p>
        <p class="text-body-1 font-weight-light text--secondary">
          Image carousel here?
        </p>
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
      tech: [
        'JS',
        'Nuxt',
        'Vuetify',
        'Vue',
        'Sass',
        'Node',
        'Docker',
        'Express',
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
