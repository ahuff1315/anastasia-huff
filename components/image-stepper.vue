<template>
  <div>
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
      <div class="d-flex flex-column px-4 full-width">
        <v-img :aspect-ratio="19 / 9" :key="imageSrc" :src="imageSrc">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <p class="text-caption mb-0 pa-1">
          {{ imageCaption }}
        </p>
      </div>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      images: [
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
        {
          detail: 'Compound interest timespan calculator value tab.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1598132246/portfolio/financially-financed-dark_tbbuqj.svg',
        },
      ],
    };
  },
  components: {},
  computed: {
    imageSrc() {
      return this.images[this.step - 1].src;
    },
    imageCaption() {
      return this.images[this.step - 1].detail;
    },
  },
  methods: {},
};
</script>

<style lang="scss"></style>
