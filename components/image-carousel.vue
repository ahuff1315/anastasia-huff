<template>
  <div>
    <v-carousel height="auto" hide-delimiter-background :show-arrows="false">
      <v-carousel-item v-for="(image, i) in images" :key="i" class="mb-16">
        <v-img :aspect-ratio="19 / 9" :key="i" :src="image.src">
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
          {{ image.detail }}
        </p>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss"></style>
