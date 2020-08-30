<template>
  <div>
    <v-footer class="py-16 px-8" elevation="12" padless color="grey darken-4">
      <div class="d-flex flex-column section-container py-10">
        <h3 class="text-h3">
          Questions?
        </h3>
        <p class="text-h6 font-weight-light text--secondary">
          Do you need more info or want to see some code from a private repo?
          Feel free to email me!
        </p>
        <div class="d-inline-flex">
          <v-btn
            class="text-lowercase"
            max-width="300"
            href="mailto:ahuff1315@gmail.com"
            outlined
          >
            ahuff1315@gmail.com
          </v-btn>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-btn
                class="ml-4"
                @click="copyToClipboard('ahuff1315@gmail.com')"
                icon
                v-on="on"
              >
                <v-icon>
                  mdi-content-copy
                </v-icon>
              </v-btn>
            </template>
            Copy email
          </v-tooltip>
        </div>
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    copyToClipboard(str) {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
  },
};
</script>

<style lang="scss"></style>
