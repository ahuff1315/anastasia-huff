<template>
  <div></div>
</template>

<script>
export default {
  props: {
    technologies: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      techDetails: {
        JS: {
          icon: 'mdi-language-javascript',
          color: 'javascript',
        },
        Nuxt: {
          icon: 'mdi-nuxt',
          color: 'nuxt',
        },
        Vuetify: {
          icon: 'mdi-vuetify',
          color: 'vuetify',
        },
        Vue: {
          icon: 'mdi-vuejs',
          color: 'vue',
        },
        Sass: {
          icon: 'mdi-sass',
          color: 'sass',
        },
        Node: {
          icon: 'mdi-nodejs',
          color: 'node',
        },
        Express: {
          icon: 'mdi-alpha-e-circle',
          color: 'express',
        },
        'Chart.js': {
          icon: 'mdi-chart-areaspline',
          color: 'chart',
        },
      },
    };
  },
  components: {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss"></style>
