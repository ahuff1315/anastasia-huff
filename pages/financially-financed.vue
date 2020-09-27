<template>
  <div class="main-container py-16">
    <div class="main-opacity" :class="[fadeOutStart ? 'fade-out-start' : '']">
      <v-btn class="ml-sm-4 mt-sm-4" fab top left fixed @click="redirect()">
        <v-icon large>
          mdi-chevron-left
        </v-icon>
      </v-btn>
      <div class="section-container">
        <h1 class="text-sm-h1 text-h2 pt-10 pb-6">
          Financially Financed
        </h1>
        <p class="text-h6 font-weight-light text--secondary">
          Jan 2019 - Present
        </p>
        <div class="d-flex">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div v-on="on">
                <v-btn
                  icon
                  href="https://financiallyfinanced.com/"
                  target="_blank"
                >
                  <v-icon>
                    mdi-launch
                  </v-icon>
                </v-btn>
              </div>
            </template>
            <span>View live site</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div class="ml-4" v-on="on">
                <v-btn disabled icon>
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </div>
            </template>
            <span>Code in private repo</span>
          </v-tooltip>
        </div>
        <image-carousel class="my-10 py-sm-6" :images="images" />
        <h4 class="text-h4 pb-4">
          Technologies
        </h4>
        <tech-chips :technologies="tech" />
        <p class="text-body-1 font-weight-light text--secondary pb-10"></p>
        <h4 class="text-h4 pb-4">
          About This Project
        </h4>
        <p class="text-body-1 font-weight-light text--secondary">
          Financially Financed is my main project. On the website you can find a
          collection of personal finance content and calculators. You can go the
          the site by clicking the open icon at the top of this page. If you do
          decide to visit, you can use the calculators to run through some
          financial scenarios.
        </p>
        <p class="text-body-1 font-weight-light text--secondary">
          On the home page you will find the Compound Interest Timespan
          calculator.
        </p>
        <p class="text-body-1 font-weight-light text--secondary">
          Now let me show you an example of how to use it. Lets say you have a
          goal of saving $500k. And you want to contribute $2k each month to
          reach that goal.
        </p>
        <p class="text-body-1 font-weight-light text--secondary">
          How long will it take you to reach your goal?
        </p>
        <p class="text-body-1 font-weight-light text--secondary">
          In the target value field, enter 500k. In the monthly contributions
          field, enter 2k.
        </p>
        <p class="text-body-1 font-weight-light text--secondary">
          You should see that it will take you 13 years to reach $500k investing
          $2k each month.
        </p>
        <h6 class="text-h6 font-weight-light">
          Other contributors
        </h6>
        <p class="text-body-1 font-weight-light text--secondary">
          Steven Cleary
        </p>
        <h4 id="architecture" class="text-h4 pt-6 pb-4">
          Architecture
        </h4>
        <p class="text-body-1 font-weight-light text--secondary">
          Our apps run on GKE (Google's Kubernetes Engine) and use one cluster
          with one node pool. The node pool contains three ephemeral nodes of
          the g1-small machine type, which is the smallest you can run on GKE.
          We chose this setup to reduce cost. Lastly we use an external load
          balancer with an ingress to direct traffic to our sites.
        </p>
        <div class="d-flex justify-center">
          <v-img
            class="mx-4 mt-4 mb-8"
            src="https://res.cloudinary.com/dxbppu0tw/image/upload/v1601240311/portfolio/architecture-dark_u8mwr8.svg"
            max-width="500"
            width="95%"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </div>
        <p class="text-body-1 font-weight-light text--secondary">
          We also host other sites in the same cluster as Financially Financed.
          There are more pods that aren't shown in the diagram indicated by the
          ... .
        </p>
        <h4 class="text-h4 pt-6 pb-4">
          Development Features
        </h4>
        <p class="text-body-1 font-weight-light text--secondary">
          We work on this project a lot so we wanted to make development a bit
          easier.
        </p>
        <h6 class="text-h6 font-weight-light">
          SEO
        </h6>
        <p class="text-body-1 font-weight-light text--secondary">
          We built the app using Nuxt.js which allows us to server side render
          (SSR) and client side render (CSR) content. We use SSR by defaut which
          improves page load times and UX. When we need to use CSR we use Nuxt's
          &lt;client-only&gt; tag.
        </p>
        <h6 class="text-h6 font-weight-light">
          Material UI
        </h6>
        <p class="text-body-1 font-weight-light text--secondary">
          Using Vuetify's UI components gives users a smooth experience while
          following Material UI guidlines.
        </p>
        <h6 class="text-h6 font-weight-light">
          Build automation
        </h6>
        <p class="text-body-1 font-weight-light text--secondary">
          Automating the build process allows us to quickly build and deploy our
          updates to the live website.
        </p>
        <h6 class="text-h6 font-weight-light">
          Reusable components
        </h6>
        <p class="text-body-1 font-weight-light text--secondary">
          We made reusable components to keep everything consistent. An example
          is a layout component for our calculators. Using it lets us customize
          the content while keeping the same layout.
        </p>
        <h4 class="text-h4 font-weight-light pt-6 pb-4">
          Calculator Features
        </h4>
        <p class="text-body-1 font-weight-light text--secondary">
          We added some cool features to our calculators that you can enjoy.
        </p>
        <h6 class="text-h6 font-weight-light">
          Age
        </h6>
        <p class="text-body-1 font-weight-light text--secondary">
          Entering your age in advanced options shows you how old you will be
          when you reach your goal. It also updates the graph breakdowns to
          reflect age at each data point instead of years or months.
        </p>
        <h6 class="text-h6 font-weight-light">
          Yearly toggle
        </h6>
        <p class="text-body-1 font-weight-light text--secondary">
          When making contributions you can use the yearly toggle. In the off
          position you will be making monthly contributions. In the on position
          you will be making yearly contributions. Using the toggle will change
          the calculator text and your end results.
        </p>
        <h6 class="text-h6 font-weight-light">
          AGR
        </h6>
        <p class="text-body-1 font-weight-light text--secondary">
          When the calculator uses an annualized growth rate (AGR), you can
          change it in advanced options. You can use it to see how different
          AGRs will affect your goal.
        </p>
        <h6 class="text-h6 font-weight-light">
          Currency format
        </h6>
        <p class="text-body-1 font-weight-light text--secondary">
          In all currency fields, you can enter the characters k, m, and b to
          your number to represent thousand, million, and billion. This saves
          you time typing out a bunch of zeros. An example is if you wanted to
          enter 200,000,000. All you need to enter into the currency field is
          200m.
        </p>
        <h6 class="text-h6 font-weight-light">
          Copy result
        </h6>
        <p class="text-body-1 font-weight-light text--secondary">
          We added a one click copy to clipboard for the unformatted calculator
          results. You can then paste the number into any calculator if you need
          to do more calculations.
        </p>
        <h4 class="text-h4 pt-6 pb-4">
          Code
        </h4>
        <p class="text-body-1 font-weight-light text--secondary pb-16">
          The code is in a private repo but you can email me at the address in
          the footer if you want to see a snippet.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import imageCarousel from '@/components/image-carousel.vue';
import techChips from '@/components/tech-chips.vue';

export default {
  data() {
    return {
      fadeOutStart: false,
      tech: [
        'JS',
        'Nuxt',
        'Vuetify',
        'Vue',
        'Sass',
        'Node',
        'Docker',
        'Kubernetes',
        'Express.js',
        'Chart.js',
      ],
      images: [
        {
          detail: 'Compound interest timespan calculator value tab.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599933202/portfolio/financially-financed-transparent_kjc80x.svg',
        },
        {
          detail:
            'The latest post component displaying details about the most recent calculator or post.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599933211/portfolio/financially-financed-latest-post_g3cmsv.svg',
        },
        {
          detail: 'Some of the current posts on the posts page.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599933678/portfolio/financially-financed-posts_wpv37u.svg',
        },
        {
          detail: 'The compound interest goal calculator value tab.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599934838/portfolio/financially-financed-ci-goal1_callgq.svg',
        },
        {
          detail:
            'The compound interest goal calculator yearly tab and data visualization.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599935176/portfolio/financially-financed-ci-goal2_uk2bdq.svg',
        },
        {
          detail:
            'Compound interest goal calculator advanced options with age entered.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599935509/portfolio/financially-financed-ci-goal3_tvjhsb.svg',
        },
        {
          detail:
            'Compound interest goal calculator advanced options with investment growth rate adjusted.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599936329/portfolio/financially-financed-ci-goal4_zbofy4.svg',
        },
      ],
    };
  },
  head() {
    return {
      title: 'Anastasia Huff - Financially Financed',
    };
  },
  components: {
    imageCarousel,
    techChips,
  },
  computed: {},
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

<style lang="scss"></style>
