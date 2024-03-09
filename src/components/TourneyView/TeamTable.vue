<template>
  <PodiumPilots/>

  <div class="mt-10 overflow-scroll w-[100%]">
    <CountryRow/>

    <PilotRow v-for="i in 10" :key="i"/>
  </div>
</template>

<script>
import PilotRow from "@/components/TourneyView/PilotRow.vue";
import CountryRow from "@/components/TourneyView/CountryRow.vue";
import PodiumPilots from "@/components/TourneyView/PodiumPilots.vue";

export default {
  name: "TeamTable",
  components: {PodiumPilots, CountryRow, PilotRow}
}
</script>

<style scoped>

</style>