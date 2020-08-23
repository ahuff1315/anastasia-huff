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
        <v-img
          class="rounded my-10 py-6"
          src="https://res.cloudinary.com/dxbppu0tw/image/upload/v1598132246/portfolio/financially-financed-dark_tbbuqj.svg"
        />
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
        <p class="text-body-1 font-weight-light text--secondary pb-16"></p>
        <h3 class="text-h4">
          About this project
        </h3>
        <p class="text-body-1 font-weight-light text--secondary"></p>
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
