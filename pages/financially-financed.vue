<template>
  <div class="main-container py-16">
    <div class="main-opacity" :class="[fadeOutStart ? 'fade-out-start' : '']">
      <v-btn class="ml-4 mt-4" fab top left fixed @click="redirect()">
        <v-icon large>
          mdi-chevron-left
        </v-icon>
      </v-btn>
      <div class="section-container">
        <h1 class="text-h1 py-10">
          Financially Financed
        </h1>
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

<style lang="scss">
.main-container {
  height: 100%;
}
p {
  max-width: 600px;
}
.section-container {
  max-width: 700px;
  margin: auto;
}
.fade-out-start {
  transition: opacity 0.2s ease-in;
  opacity: 0 !important;
}
.main-opacity {
  animation: fadein ease-in-out 0.2s;
  opacity: 1;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
