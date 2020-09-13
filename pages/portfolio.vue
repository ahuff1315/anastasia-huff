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
                <v-btn icon>
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </div>
            </template>
            <span>View repo</span>
          </v-tooltip>
        </div>
        <p class="text-body-1 font-weight-light text--secondary pb-16 pt-6">
          This portfolio site is to show some of my projects. Since my main
          project Financially Financed does not have code publicly available,
          you can view the code for this website on github.
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
