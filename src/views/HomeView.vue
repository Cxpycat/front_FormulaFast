<template>
  <News></News>
</template>

<script>
import api from "@/api";
import moment from "moment/moment";
import News from '@/components/HomeView/News.vue';

export default {
  name: 'HomeView',
  components: {News},
  data() {
    return {};
  },
  beforeMount() {

  },

  methods: {},
  computed: {},
};
</script>
