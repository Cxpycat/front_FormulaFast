<template>
  <div class="max-w-[100%]">
    <div class="flex rounded-lg gap-1 my-10 bg-[#2a2a2a] p-[2px] max-w-fit">
      <button
          class="flex items-center text-btn-text hover:bg-btn-bg-hover hover:text-btn-text-hover rounded-lg py-1 px-2"
          :class="{'bg-btn-active-bg': tourney === 'pilot', '': tourney !== 'pilot'}"
          @click.prevent="selectTourney('pilot')"
      >Личный зачет
      </button>
      <button
          class="flex items-center text-btn-text hover:bg-btn-bg-hover hover:text-btn-text-hover rounded-lg py-1 px-2"
          :class="{'bg-btn-active-bg': tourney === 'team', '': tourney !== 'team'}"
          @click.prevent="selectTourney('team')"
      >Командный зачет
      </button>
    </div>

    <PilotTable v-if="tourney === 'pilot'"/>
    <TeamTable v-if="tourney === 'team'"/>

  </div>
</template>

<script>
import PilotRow from '@/components/TourneyView/PilotRow.vue';
import CountryRow from '@/components/TourneyView/CountryRow.vue';
import PodiumPilots from "@/components/TourneyView/PodiumPilots.vue";
import PilotTable from "@/components/TourneyView/PilotTable.vue";
import TeamTable from "@/components/TourneyView/TeamTable.vue";

export default {
  name: 'TourneyView',
  components: {TeamTable, PilotTable, PodiumPilots, CountryRow, PilotRow},
  data() {
    return {
      tourney: 'pilot',
    };
  },
  methods: {
    selectTourney(tourney) {
      this.tourney = tourney;
    },
  },
};
</script>