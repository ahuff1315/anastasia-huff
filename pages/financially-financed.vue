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
          Financially Financed is my main project that I created and continue to
          work on with Steven Cleary. On the website you can find personal
          finance calculators and content.
        </p>
        <p class="text-body-1 font-weight-light text--secondary">
          These calculators show you how different scenarios can affect the end
          result you are looking to reach. Each calculator gives you a unique
          look at your finances through different data visualizations and
          breakdowns.
        </p>
        <h5 class="text-h5 font-weight-light pt-6 pb-4">
          Project Highlights
        </h5>
        <p class="text-body-1 font-weight-light text--secondary">
          We have taken multiple steps to make development easier in this
          project.
        </p>
        <h6 class="text-h6 font-weight-light">
          SEO
        </h6>
        <p class="text-body-1 font-weight-light text--secondary">
          We use Nuxt.js which allows us to server side render and client side
          render content. This improves page load times and UX.
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
          Automating the build process allows us to quickly deploy our updates
          to the live website.
        </p>
        <h6 class="text-h6 font-weight-light">
          Reusable components
        </h6>
        <p class="text-body-1 font-weight-light text--secondary">
          We made reusable components to keep our calculators consistent. An
          example is a layout component for the calculators. It gives us the
          ability to customize the content while maintaining the same layout.
        </p>
        <h5 class="text-h5 font-weight-light pt-6 pb-4">
          Calculator Features
        </h5>
        <p class="text-body-1 font-weight-light text--secondary">
          We added some cool features to our calculators that you can enjoy.
        </p>
        <h6 class="text-h6 font-weight-light">
          Age
        </h6>
        <p class="text-body-1 font-weight-light text--secondary">
          Entering your age in advanced options shows you how old you will be
          when you reach your goal. It also updates the axes on relevant graph
          breakdowns to reflect age at each data point instead of years.
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
          change it in advanced options. This lets you see how different AGRs
          can affect your goal.
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
        <p class="text-body-1 font-weight-light text--secondary pb-16">
          We added a one click copy to clipboard for the unformatted calculator
          results. You can then paste the number into any calculator if you need
          to do more calculations.
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
