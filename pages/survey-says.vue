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
          Survey Says
        </h1>
        <p class="text-h6 font-weight-light text--secondary">
          Jan - June 2018
        </p>
        <p class="text-body-1 font-weight-light text--secondary">
          This app allows users to create and answer surveys that other users
          have created. These surveys can also display different visualizations
          on the data that has been collected from users that have completed the
          questionnaire.
        </p>
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
