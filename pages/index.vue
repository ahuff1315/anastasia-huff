<template>
  <div class="main-container py-16">
    <div class="main-opacity" :class="[fadeOutStart ? 'fade-out-start' : '']">
      <div class="section-container">
        <h1 class="text-h1 py-4 text--secondary">
          Hi,
        </h1>
        <h3 class="text-h3 font-weight-light py-4 text--secondary">
          My name is Anastasia Huff.
        </h3>
        <p class="text-h6 font-weight-light text--secondary pb-6">
          I'm a
          <span class="text--primary font-weight-regular">
            software engineer
          </span>
          and this is a site to show some of my projects.
        </p>
      </div>
      <v-divider class="mt-16 home-hr"></v-divider>
      <main-project @more-info="redirect($event)" />
      <v-divider class="mt-16 home-hr"></v-divider>
      <other-projects @more-info="redirect($event)" class="pb-10" />
    </div>
  </div>
</template>

<script>
import mainProject from '@/components/main-project/main-project.vue';
import otherProjects from '@/components/other-projects/other-projects.vue';

export default {
  data() {
    return {
      fadeOutStart: false,
    };
  },
  components: {
    mainProject,
    otherProjects,
  },
  methods: {
    redirect(url) {
      this.fadeOutStart = true;
      setTimeout(() => {
        this.$router.push(url);
      }, 200);
    },
  },
};
</script>

<style lang="scss"></style>
