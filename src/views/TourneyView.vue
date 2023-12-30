<template>
  <div class="max-w-[100%]">
    <div class="flex rounded-lg gap-1 my-10 bg-[#2a2a2a] p-[2px] max-w-fit">
      <button class="flex items-center text-btn-text hover:bg-btn-bg-hover hover:text-btn-text-hover rounded-lg py-1 px-2"
              :class="{'bg-btn-active-bg': tourney === 'pilot', '': tourney !== 'pilot'}"
              @click.prevent="selectTourney('pilot')"
      >Личный зачет
      </button>
      <button class="flex items-center text-btn-text hover:bg-btn-bg-hover hover:text-btn-text-hover rounded-lg py-1 px-2"
              :class="{'bg-btn-active-bg': tourney === 'team', '': tourney !== 'team'}"
              @click.prevent="selectTourney('team')"
      >Командный зачет
      </button>
    </div>

    <div class="flex items-end justify-between flex-wrap gap-10">
      <template v-for="i in 3" :key="i">
        <div class="flex-1 mx-auto"
             :class="{'order-1 w-20': i === 2, 'order-2 w-60': i === 1, 'order-3 w-20': i === 3}"
        >
          <div class="rounded-2xl text-right relative">
            <div class="relative flex justify-center"
                 :class="i === 2 ? 'pt-0' : i === 1 ? 'pt-16' : i === 3 ? 'pt-0' : ''"
            >
              <img class="mr-2 relative w-auto z-3"
                   :class="i === 2 ? 'h-40' : i === 1 ? 'h-48' : i === 3 ? 'h-40' : ''"
                   src="images/pilots/Ver.png" alt=""
              >
              <div class="bg-bg-primary-disabled bottom-0 font-bold left-0 tracking-wide absolute right-0 text-center top-0 z-2 rounded-2xl  h-fit w-fit"
                   :class="i === 2 ? 'py-4 px-5' : i === 1 ? 'py-6 px-7 top-12' : i === 3 ? 'py-4 px-5' : ''"
              >
                {{ i }}
              </div>
            </div>
            <div class="bg-bg-primary-disabled text-center flex justify-center items-center rounded-b-2xl rounded-t-lg"
                 :class="i === 2 ? 'h-10' : i === 1 ? 'h-12' : i === 3 ? 'h-10' : ''"
            >
              <img class="rounded-2xl h-6 mr-6 w-auto flex justify-center items-center" src="images/flags/mc.jpg" alt="">
              <span class="rounded-2xl h-6 w-auto flex justify-center items-center">М. Ферстаппен</span>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="mt-10 overflow-scroll w-[100%]">
      <CountryRow/>

      <PilotRow v-for="i in 10" :key="i"/>
    </div>

  </div>
</template>

<script>
import PilotRow from '@/components/TourneyView/PilotRow.vue';
import CountryRow from '@/components/TourneyView/CountryRow.vue';

export default {
  name: 'TourneyView',
  components: {CountryRow, PilotRow},
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

<style scoped>
.top3__row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
}

.top3_1st {
  flex: 0 0 100%
}

@media (min-width: 576px) {
  .top3_1st {
    flex: 0 0 60%;
    order: -1;
    margin: 0 auto
  }
}

@media (min-width: 768px) {
  .top3_1st {
    flex: 0 0 38%;
    order: 0
  }
}

.top3_2nd {
  flex: 0 0 100%;
  padding-top: 0
}

@media (min-width: 576px) {
  .top3_2nd {
    flex: 0 0 49.4%;
    margin-top: 6px
  }
}

@media (min-width: 768px) {
  .top3_2nd {
    flex: 0 0 30%
  }
}

.top3__body {
  position: relative;
  text-align: right;
  background: var(--color-gray-darkest);
  border-radius: 20px
}

.top3__content {
  position: relative
}

.top3__content_1st {
  padding-top: 16px
}

.top3__content_2nd {
  padding-top: 12px
}

.top3__photo {
  position: relative;
  margin-right: 8px;
  width: auto;
  z-index: 3
}

.top3__photo_1st {
  height: 190px
}

.top3__photo_2nd {
  margin-top: 0;
  height: 160px
}

.top3__topper {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 50%;
  margin-left: -30%;
  width: 60%
}

.top3__topper_1st {
  border-radius: 0 0 12px 12px;
  height: 14px
}

.top3__topper_2nd {
  border-radius: 0 0 8px 8px;
  height: 10px
}

.top3__place {
  position: absolute;
  text-align: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #282828;
  font-weight: 900;
  letter-spacing: .02em;
  z-index: 2
}

.top3__place_1st {
  width: 96px;
  height: 96px;
  line-height: 96px;
  font-size: 48px;
  border-radius: 20px;
  margin: auto auto auto 24px
}

.top3__place_2nd {
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  border-radius: 15px;
  margin: auto auto auto 16px
}

.top3__footer {
  background: #282828;
  text-align: center
}

.top3__footer_1st {
  height: 44px;
  border-radius: 10px 10px 20px 20px
}

.top3__footer_2nd {
  height: 34px;
  border-radius: 8px 8px 20px 20px
}

.top3__flag {
  height: 20px;
  width: auto;
  margin-right: 6px;
  border-radius: 5px;
  position: relative;
  top: 6px;
}

.top3__title {
  font-weight: 700;
  letter-spacing: .02em;
  color: #FFFFFF
}

.top3__title_1st {
  font-size: 14px;
  line-height: 44px
}

.top3__title_2nd {
  font-size: 12px;
  line-height: 34px
}

</style>