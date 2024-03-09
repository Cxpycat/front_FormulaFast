<template>
  <section class="mb-32 text-center md:text-left">
    <h2 class="mb-12 text-center text-3xl font-bold">Последние новости</h2>

    <template v-if="news" v-for="(element, index) in news">
      <div class=" mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
        <div :class="index % 2 === 0 ? 'mb-6 md:order-2 md:mb-0' : 'mb-6 md:mb-0'">
          <div
              class="h-80 relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
            <img :src="'http://localhost:8876/images/' + element.img" class="w-full" alt="Louvre"/>
            <RouterLink :to="'news/' + element.id">
              <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
              </div>
            </RouterLink>
          </div>
        </div>
        <div>
          <h3 class="mb-3 text-2xl font-bold">{{ element.title }}</h3>
          <p class="mb-6 text-neutral-500 dark:text-neutral-300">
            <small>Опубликовано: {{ moment(element.created_at).format('HH:mm DD.MM') }}</small>
          </p>
          <p class="w-auto pb-4 overflow-hidden text-neutral-500 dark:text-neutral-300"
             v-html="getDescription(element.text)">
          </p>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import api from "@/api";
import moment from "moment/moment";

export default {
  name: 'News',
  data() {
    return {
      news: [],
    };
  },
  beforeMount() {
    this.getNews()
  },

  methods: {
    getNews() {
      api.get('http://localhost:8876/api/v1/news').then(res => {
        this.news = res.data
      })
    },
    getDescription(text) {
      return text.split('<br>')[0];
    }
  },
  computed: {
    moment() {
      moment.locale('ru');
      return moment;
    },
  },
};
</script>
