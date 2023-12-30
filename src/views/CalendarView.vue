<template>
  <div v-if="race_week" class="h-full w-full flex flex-row">

    <div class="flex-1 flex flex-col items-center overflow-scroll">
      <div v-for="(element, index) in shedule"
           class="w-[80%] rounded-2xl text-btn-text p-2 cursor-pointer hover:bg-btn-bg-hover hover:text-btn-text-hover"
           @click="selectRace(element.grand_prix.id)"
           :id="`race_${element.id}`"
           :class="{ 'mt-4': index !== 0,
           'bg-btn-active-bg': element.grand_prix.id === race_week.grand_prix.id,
           'bg-btn-bg': element.grand_prix.id !== race_week.grand_prix.id
           }"
      >
        <div class="flex flex-row items-center mx-2 justify-between">
          <div class="flex flex-row items-center">
            <div class="mr-2">
              {{ index + 1 }}
            </div>
            <div class="mr-2 h-5 w-5 flex justify-center items-center">
              <img :src="element.grand_prix.country.img" alt="flag_country">
            </div>
            {{ element.grand_prix.title }}
          </div>
          <div>
            {{ moment(this.getRace(element.events).event_time).format('DD.MM') }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex-1 overflow-scroll">
      <div class="bg-red-300 rounded-2xl overflow-hidden">
        <div class="flex justify-center min-h-[300px]">
          <img :src="race_week.grand_prix.img" alt="track" class="mb-4 h-[35vh] w-full min-h-[300px]"
          >
        </div>
        <div class="p-4">
          <h1 class="text-4xl font-bold">{{ race_week.grand_prix.title }}</h1>
          <div class="flex flex-col gap-2 min-h-[150px] mt-4">
            <template v-for="(event, index) in race_week.events">

              <h3 class="flex text-2xl font-bold capitalize"
                  :class="{'mt-2': index !== 0}"
                  v-if="index === 0 || index === 2 || index === 4">
                {{ moment(event.event_time).format('dddd') }}
              </h3>

              <div class="flex text-xl gap-4">
                <div>{{ event.title }}</div>
                <div>{{ moment(event.event_time).format('HH:mm') }}</div>
              </div>

            </template>

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
import 'moment/dist/locale/ru';

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

      this.shedule = sheduleMock;

      this.shedule.forEach((race) => {
        if (this.isRaceWeek(race)) {
          this.race_week = race;
        }
      });
      // })
    },
    selectRace(id) {
      this.race_week = this.shedule.find((race) => race.grand_prix.id === id);
      console.log(this.race_week);
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
      moment.locale('ru');
      return moment;
    },
  },
};
</script>
