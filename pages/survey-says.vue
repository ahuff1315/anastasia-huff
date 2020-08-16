<template>
  <div class="main-container py-16">
    <v-btn @click="$router.go(-1)">
      Back
    </v-btn>
    <div class="section-container" style="height: calc(80vh - 128px);">
      <h1>Survey Says</h1>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
</style>
