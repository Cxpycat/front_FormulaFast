<template>
  <div v-if="race_week" class="h-full w-full flex flex-row">
    <div class="flex-1 flex flex-col items-center overflow-scroll">
      <div v-for="(element, index) in shedule"
           :class="{
          'w-[80%] rounded-2xl text-btn-text p-2 mb-4 cursor-pointer bg-btn-bg hover:bg-btn-bg-hover': !isRaceWeek(element),
          'w-[80%] rounded-2xl text-btn-text p-2 mb-4 cursor-pointer bg-accent-color hover:bg-btn-bg-hover': isRaceWeek(element),
          }"
           @click="selectRace(element.grand_prix.id)"
           :id="`race_${element.id}`"
      >
        <div class="flex flex-row items-center mx-2 justify-between">
          <div class="flex flex-row items-center">
            <div class="mr-2">
              {{ index + 1 }}
            </div>
            <div class="mr-2 h-5 w-5 flex justify-center items-center">
              <img :src="`http://localhost:8876/storage/${element.grand_prix.country.img}`">
            </div>
            {{ element.grand_prix.title }}
          </div>
          <div>
            {{ moment(this.getRace(element.events).event_time).format('DD.MM') }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="bg-red-300 rounded-2xl overflow-hidden">
        <div class="flex justify-center">
          <img :src="race_week.grand_prix.img" alt="track" class="mb-4 h-[35vh] w-full"
          >
        </div>
        <div class="p-4">
          <h1 class="text-4xl font-bold">{{ race_week.grand_prix.title }}</h1>
          <div>
            <div class="flex flex-col flex-wrap h-[150px] my-4">
              <div class="flex flex-col mb-4 text-xl" v-for="(event, index) in race_week.events">
                <div>{{ event.title }}</div>
                <div>{{ moment(event.event_time).format('HH:mm') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLink from '@/components/Elements/AppLink.vue';
import api from '@/api';
import moment from 'moment';
import logger from '@fortawesome/vue-fontawesome/src/logger';
import sheduleMock from '../../public/mocks/shedule';

export default {
  name: 'CalendarView',
  components: {AppLink},
  data() {
    return {
      shedule: [],
      race_week: null,
    };
  },
  beforeMount() {
    this.getShedule();
  },
  methods: {
    getShedule() {
      // api.get('http://localhost:8876/api/v1/shedule').then(res => {
      //   this.shedule = res.data
      //   console.log(this.shedule)

      this.shedule = sheduleMock;

      this.shedule.forEach((race) => {
        if (this.isRaceWeek(race)) {
          this.race_week = race;
        }
      });
      console.log(this.race_week);
      // })
    },
    selectRace(id) {
      this.race_week = this.shedule.find((race) => race.grand_prix.id === id);
    },
    isRaceWeek(element) {
      return new Date(this.getRace(element.events).event_time) < new Date();
    },
    getRace(events) {
      return events[events.length - 1];
    },
  },
  computed: {
    moment() {
      return moment;
    },
  },
};
</script>
