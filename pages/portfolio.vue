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
          This site is for displaying some of my personal projects. Financially
          Financed has a live site that users can visit while the other projects
          have links to Github to view the code. More detailed information can
          found on the individual project pages.
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
