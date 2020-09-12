<template>
  <div>
    <v-chip
      class="ma-2 ml-0"
      v-for="(tech, i) in technologies"
      :key="i"
      :color="techDetails[tech].color"
      small
      outlined
    >
      <v-icon small left>
        {{ techDetails[tech].icon }}
      </v-icon>
      {{ tech }}
    </v-chip>
  </div>
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
        Ionic: {
          icon: 'mdi-atom-variant',
          color: 'ionic',
        },
        Django: {
          icon: 'mdi-alpha-d-circle',
          color: 'django',
        },
        Angular4: {
          icon: 'mdi-angular',
          color: 'angular',
        },
        Bootstrap: {
          icon: 'mdi-bootstrap',
          color: 'bootstrap',
        },
        Docker: {
          icon: 'mdi-docker',
          color: 'docker',
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
