<template>
  <div class="my-app">
    <v-app dark>
      <nuxt class="main-background" />
      <ana-footer />
    </v-app>
  </div>
</template>

<script>
import anaFooter from '@/components/ana-footer.vue';

export default {
  data() {
    return {};
  },
  components: {
    anaFooter,
  },
};
</script>

<style lang="scss"></style>
