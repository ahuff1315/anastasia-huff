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
          Survey Says
        </h1>
        <p class="text-h6 font-weight-light text--secondary">
          Jan - April 2018
        </p>
        <div class="d-flex">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div v-on="on">
                <v-btn disabled icon>
                  <v-icon>mdi-launch</v-icon>
                </v-btn>
              </div>
            </template>
            <span>No live site</span>
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
        <image-carousel class="my-10 py-6" :images="images" />
        <h4 class="text-h4 pb-4">
          Technologies
        </h4>
        <tech-chips :technologies="tech" />
        <p class="text-body-1 font-weight-light text--secondary pb-10"></p>
        <h4 class="text-h4 pb-4">
          About This Project
        </h4>
        <p class="text-body-1 font-weight-light text--secondary">
          This app started as a semester long class project. On the app you can
          view, create, and answer polls or questionnaires. I worked mainly on
          polishing the UI and fixing bugs in the frontend and backend. The UI
          was based loosely on Twitter, Facebook, Amazon, and other popular
          sites.
        </p>
        <h6 class="text-h6 font-weight-light">
          Other contributors
        </h6>
        <p class="text-body-1 font-weight-light text--secondary">
          Steven Cleary
        </p>
        <h4 class="text-h4 pt-6 pb-4">
          General Functionality
        </h4>
        <p class="text-body-1 font-weight-light text--secondary">
          You can view and answer any polls that other people have created.
          After casting your vote, see how your answer compares to others
          through the data visualizations that show after you cast your vote.
          You can go to the history tab to see all of the polls you have
          answered.
        </p>
        <p class="text-body-1 font-weight-light text--secondary">
          You can also create your own polls that other users can answer. A new
          poll needs a question and at least two possible choices but more
          choices can be added when you create it. After you finish making your
          poll, you can view it on the home page.
        </p>
        <p class="text-body-1 font-weight-light text--secondary">
          If you have a specific question in mind, you can use the search tab to
          look for it. Polls containing the query will show below the search
          bar.
        </p>
        <h4 class="text-h4 pt-6 pb-4">
          High Level Overview
        </h4>
        <p class="text-body-1 font-weight-light text--secondary">
          We broke the app into three parts:
        </p>
        <ul class="text-body-1 font-weight-light text--secondary pb-4">
          <li>
            The backend, which was written in Python using Django.
          </li>
          <li>
            The frontend, which was written in JavaScript using Angular4.
          </li>
          <li>
            And a very basic data science part to rank the polls and create
            random questions.
          </li>
        </ul>
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
import imageCarousel from '@/components/image-carousel/image-carousel.vue';
import techChips from '@/components/tech-chips.vue';

export default {
  data() {
    return {
      fadeOutStart: false,
      tech: [
        'TypeScript',
        'Ionic',
        'Django',
        'Angular4',
        'Bootstrap',
        'Chart.js',
        'Scikit Learn',
        'NLTK',
      ],
      images: [
        {
          detail:
            'Survey says home screen displaying different posts and the ability to answer and view the data visualizations.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599937469/portfolio/survey-says-main_sicd8p.svg',
        },
        {
          detail:
            'Creating a new question and viewing the new question on the home screen.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599940183/portfolio/survey-says-create-question_emgbcp.svg',
        },
        {
          detail:
            'Landing screen with navigation options for login and signup.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599941540/portfolio/survey-says-start_qgtucu.svg',
        },
        {
          detail:
            'History screen displaying previously answered questions and the account details screen.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599943586/portfolio/survey-says-history_r2zae8.svg',
        },
        {
          detail:
            'Search screen that allows you to search for specific surveys.',
          src:
            'https://res.cloudinary.com/dxbppu0tw/image/upload/v1599943631/portfolio/survey-says-search_jv5oez.svg',
        },
      ],
    };
  },
  head() {
    return {
      title: 'Anastasia Huff - Survey Says',
    };
  },
  components: {
    imageCarousel,
    techChips,
  },
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
