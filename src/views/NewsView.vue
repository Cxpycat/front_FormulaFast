<template>
  <section class="mb-32">
    <div class="container mx-auto text-center lg:text-left xl:px-8">
      <div class="grid items-center lg:grid-cols-2">
        <div class="mb-12 lg:mb-0">
          <div
              class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
            <h2 class="mb-8 text-3xl font-bold">{{ news.title }}</h2>
            <p class="mb-0 text-neutral-500 dark:text-neutral-300" v-html="news.text">
            </p>
          </div>
        </div>

        <div>
          <img :src="'http://localhost:8876/images/' + news.img"
               class="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/api";
import moment from "moment/moment";

export default {
  name: 'HomeView',
  data() {
    return {
      news: null,
    };
  },
  beforeMount() {
    this.getNews()
  },

  methods: {
    getNews() {
      api.get(`http://localhost:8876/api/v1/news/${this.$route.params.id}`).then(res => {
        this.news = res.data.news
      })
    },
  },
  computed: {
    moment() {
      moment.locale('ru');
      return moment;
    },
  },
};
</script>
