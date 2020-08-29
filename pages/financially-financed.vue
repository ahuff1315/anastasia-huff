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
        <p class="text-body-1 font-weight-light text--secondary pb-16"></p>
        <h3 class="text-h4">
          Images
        </h3>
        <!-- <p class="text-body-1 font-weight-light text--secondary pb-16"></p> -->
        <v-stepper
          class="d-flex transparent elevation-0 pt-10"
          v-model="step"
          vertical
          non-linear
        >
          <div class="d-inline-flex flex-column">
            <v-stepper-step
              class="pl-4 py-2 pr-1 mb-2 rounded transparent"
              editable
              step="1"
            ></v-stepper-step>
            <v-stepper-step
              class="pl-4 py-2 pr-1 mb-2 rounded"
              editable
              step="2"
            ></v-stepper-step>
            <v-stepper-step
              class="pl-4 py-2 pr-1 mb-2 rounded"
              editable
              step="3"
            ></v-stepper-step>
            <v-stepper-step
              class="pl-4 py-2 pr-1 mb-2 rounded"
              editable
              step="4"
            ></v-stepper-step>
            <v-stepper-step
              class="pl-4 py-2 pr-1 mb-2 rounded"
              editable
              step="5"
            ></v-stepper-step>
            <v-stepper-step
              class="pl-4 py-2 pr-1 mb-2 rounded"
              editable
              step="6"
            ></v-stepper-step>
            <v-stepper-step
              class="pl-4 py-2 pr-1 mb-2 rounded"
              editable
              step="7"
            ></v-stepper-step>
          </div>
          <div class="d-flex flex-column px-6 full-width">
            <v-img :aspect-ratio="19 / 9" :src="imageSrc"></v-img>
          </div>
        </v-stepper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fadeOutStart: false,
      step: 1,
      images: [
        {
          detail: '',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598737296/portfolio/financially-financed-latest-post_glzcas.png',
        },
        {
          detail: '',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598737393/portfolio/financially-financed-posts_hlak7y.png',
        },
        {
          detail: '',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598736416/portfolio/financially-financed-ci-goal1_ns3fgf.png',
        },
        {
          detail: '',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598736423/portfolio/financially-financed-ci-goal2_jjwwcy.png',
        },
        {
          detail: '',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598736428/portfolio/financially-financed-ci-goal3_qhqtnj.png',
        },
        {
          detail: '',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598736432/portfolio/financially-financed-ci-goal4_t0ovhe.png',
        },
        {
          detail: '',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598132246/portfolio/financially-financed-dark_tbbuqj.svg',
        },
      ],
    };
  },
  components: {},
  computed: {
    imageSrc() {
      console.log(this.step);
      return this.images[this.step - 1].src;
    },
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

<style lang="scss">
.no-border {
  border: none;
}
</style>
