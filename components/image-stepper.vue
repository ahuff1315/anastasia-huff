<template>
  <div>
    <v-stepper
      class="d-flex transparent elevation-0 pt-10"
      v-model="currentStep"
      vertical
      non-linear
    >
      <div class="d-inline-flex flex-column">
        <v-stepper-step
          v-for="step in steps"
          :key="step"
          class="pl-4 py-2 pr-1 mb-2 rounded transparent"
          editable
          :step="step"
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
  props: {
    steps: {
      type: Number,
      default: 1,
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentStep: 1,
    };
  },
  components: {},
  computed: {
    imageSrc() {
      return this.images[this.currentStep - 1].src;
    },
    imageCaption() {
      return this.images[this.currentStep - 1].detail;
    },
  },
  methods: {},
};
</script>

<style lang="scss"></style>
