<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'PilotRow',
});
</script>

<template>
  <div class="pilot">
    <div class="first">
      <div class="pilot__place">2</div>
      <div class="pilot__team-color" title="Ред Булл"></div>
      <div class="pilot__name">С</div>
    </div>
    <div class="second">
      <div class="pilot__team-name">Red Bull Racing</div>
    </div>
    <div class="third">
      <div class="pilot__points" style="width: 70px; max-width: 70px; min-width: 70px;">285 PTS</div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span style="color: rgb(0, 255, 0);">18</span><small>/2</small></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span style="color: rgb(255, 0, 255);">25</span><small>/1</small></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span>11</span><small>/5</small></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span style="color: rgb(255, 0, 255);">33</span></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span style="color: rgb(0, 255, 0);">18</span><small>/2</small></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span style="color: rgba(255, 255, 255, 0.373);"> - </span></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span>12</span><small>/4</small></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span>9</span><small>/6</small></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span style="color: rgb(0, 255, 0);">22</span></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span>8</span><small>/6</small></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span style="color: rgb(255, 255, 0);">15</span><small>/3</small></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span style="color: rgb(0, 255, 0);">18</span></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span>12</span><small>/4</small></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span style="color: rgb(0, 255, 0);">18</span><small>/2</small></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span>4</span><small>/8</small></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span style="color: rgba(255, 255, 255, 0.373);">-</span></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span>1</span></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span style="color: rgb(0, 255, 0);">16</span></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span style="color: rgba(255, 255, 255, 0.373);">-</span></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span style="color: rgb(0, 255, 0);">18</span></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span style="color: rgb(255, 255, 0);">15</span><small>/3</small></div>
      <div class="pilot__points ms-table_cell ms-table_field--race_points"><span>12</span><small>/4</small></div>
      <div class="pilot__points">285 PTS</div>
    </div>
  </div>
</template>

<style scoped>
.pilot {
  background: #282828;
  min-height: 50px;
  margin-top: 6px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.image-gallery-slide-wrapper {
  z-index: 99;
}

.pilot:hover {
  background: #1E1E1E !important;
}

.Toastify__toast-container {
  z-index: 9999999999 !important;
}

@media screen and (max-width: 767px) {
  .ant-layout-content {
    padding-top: 120px;
  }
}

.pilot:nth-child(1) {
  margin-top: 0;
}

.pilot__place {
  margin-left: 6px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #000000;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #FFB524;
}

.pilot__team-color {
  margin-left: 12px;
  flex: 0 0 15px;
  height: 15px;
  flex-shrink: 0;
  border-radius: 5px;
}

.color-ferrari {
  background-color: #E11E1E;
}

.color-redbull {
  background-color: #1E55E1;
}

.color-mercedes {
  background-color: #1EE1CA;
}

.color-alpine {
  background-color: #1E8FE1;
}

.color-haas {
  background-color: #AEB3B7;
}

.color-alfaromeo {
  background-color: #8C0808;
}

.color-mclaren {
  background-color: #E1641E;
}

.pilot__name {
  margin-left: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #FFFFFF;
}

.pilot__name .pilot__name-second {
  text-transform: uppercase;
}

.pilot__team-name {
  font-size: 10px;
  font-weight: 700;
  color: #AEB3B7;
}

.pilot__team-name img {
  width: 100px;
}

.pilot {
  &.cleared {
    background: transparent !important;
    .pilot__place {
      background: transparent !important;
    }
    .pilot__points {
      background: transparent !important;
      img {
        width: 22px;
        position: relative;
        top: 6px;
      }
    }
  }
}

.text-fiol {
  color: #FF00FF !important;
}

.text-green {
  color: #00FF00 !important;
}

.text-yellow {
  color: #FFFF00 !important;
}

.text-red {
  color: red !important;
}

.pilot__points {
  height: 26px;
  font-size: 12px;
  font-weight: 600;
  line-height: 26px;
  flex: 0 0 auto;
  padding: 0 6px;
  color: #FFFFFF;
  background: #282828;
  border-radius: 5px;
  margin-left: 12px;
  width: 40px;
  min-width: 40px;
  max-width: 40px;
  text-align: center;
  &:last-child {
    width: 70px;
    min-width: 70px;
    max-width: 70px;
  }
}

.pilot__readmore {
  margin-right: 8px;
  font-size: 8px;
  font-weight: 500;
  line-height: 1;
  color: #AEB3B7;
}

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

.top3__title_lastname {
  text-transform: uppercase;
  letter-spacing: .06em
}

.pilots__wrap {
  margin-top: 48px;
  padding-bottom: 24px
}

.pilots {
  margin-top: 32px
}

.pilot > .first,
.pilot > .second,
.pilot > .third {
  display: flex;
  align-items: center
}

.pilots {
  width: 100%;
  margin: 0 auto
}

.pilot > .first {
  flex: 0 0 170px
}

.pilot > .second {
  flex: 1 1 auto
}

.pilot > .third {
  flex: 0 0 auto;
  margin-right: 12px
}

.pilot__place {
  flex: 0 0 20px
}

@media (min-width: 360px) {
  .pilots {
    width: 100%;
    margin: 0 auto
  }
  .pilot > .first {
    flex: 0 0 186px
  }
  .pilot > .second {
    flex: 1 1 auto
  }
  .pilot > .third {
    flex: 0 0 auto;
    margin-right: 12px
  }
  .pilot__place {
    flex: 0 0 30px
  }
}
@media (min-width: 1024px) {
  .m-lg-0 {
    margin: 0 !important;
  }
  .mt-lg-0,
  .my-lg-0 {
    margin-top: 0 !important;
  }
  .mr-lg-0,
  .mx-lg-0 {
    margin-right: 0 !important;
  }
  .mb-lg-0,
  .my-lg-0 {
    margin-bottom: 0 !important;
  }
  .ml-lg-0,
  .mx-lg-0 {
    margin-left: 0 !important;
  }
  .m-lg-1 {
    margin: 0.25rem !important;
  }
  .mt-lg-1,
  .my-lg-1 {
    margin-top: 0.25rem !important;
  }
  .mr-lg-1,
  .mx-lg-1 {
    margin-right: 0.25rem !important;
  }
  .mb-lg-1,
  .my-lg-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-lg-1,
  .mx-lg-1 {
    margin-left: 0.25rem !important;
  }
  .m-lg-2 {
    margin: 0.5rem !important;
  }
  .mt-lg-2,
  .my-lg-2 {
    margin-top: 0.5rem !important;
  }
  .mr-lg-2,
  .mx-lg-2 {
    margin-right: 0.5rem !important;
  }
  .mb-lg-2,
  .my-lg-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-lg-2,
  .mx-lg-2 {
    margin-left: 0.5rem !important;
  }
  .m-lg-3 {
    margin: 1rem !important;
  }
  .mt-lg-3,
  .my-lg-3 {
    margin-top: 1rem !important;
  }
  .mr-lg-3,
  .mx-lg-3 {
    margin-right: 1rem !important;
  }
  .mb-lg-3,
  .my-lg-3 {
    margin-bottom: 1rem !important;
  }
  .ml-lg-3,
  .mx-lg-3 {
    margin-left: 1rem !important;
  }
  .m-lg-4 {
    margin: 1.5rem !important;
  }
  .mt-lg-4,
  .my-lg-4 {
    margin-top: 1.5rem !important;
  }
  .mr-lg-4,
  .mx-lg-4 {
    margin-right: 1.5rem !important;
  }
  .mb-lg-4,
  .my-lg-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-lg-4,
  .mx-lg-4 {
    margin-left: 1.5rem !important;
  }
  .m-lg-5 {
    margin: 3rem !important;
  }
  .mt-lg-5,
  .my-lg-5 {
    margin-top: 3rem !important;
  }
  .mr-lg-5,
  .mx-lg-5 {
    margin-right: 3rem !important;
  }
  .mb-lg-5,
  .my-lg-5 {
    margin-bottom: 3rem !important;
  }
  .ml-lg-5,
  .mx-lg-5 {
    margin-left: 3rem !important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .pt-lg-0,
  .py-lg-0 {
    padding-top: 0 !important;
  }
  .pr-lg-0,
  .px-lg-0 {
    padding-right: 0 !important;
  }
  .pb-lg-0,
  .py-lg-0 {
    padding-bottom: 0 !important;
  }
  .pl-lg-0,
  .px-lg-0 {
    padding-left: 0 !important;
  }
  .p-lg-1 {
    padding: 0.25rem !important;
  }
  .pt-lg-1,
  .py-lg-1 {
    padding-top: 0.25rem !important;
  }
  .pr-lg-1,
  .px-lg-1 {
    padding-right: 0.25rem !important;
  }
  .pb-lg-1,
  .py-lg-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-lg-1,
  .px-lg-1 {
    padding-left: 0.25rem !important;
  }
  .p-lg-2 {
    padding: 0.5rem !important;
  }
  .pt-lg-2,
  .py-lg-2 {
    padding-top: 0.5rem !important;
  }
  .pr-lg-2,
  .px-lg-2 {
    padding-right: 0.5rem !important;
  }
  .pb-lg-2,
  .py-lg-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-lg-2,
  .px-lg-2 {
    padding-left: 0.5rem !important;
  }
  .p-lg-3 {
    padding: 1rem !important;
  }
  .pt-lg-3,
  .py-lg-3 {
    padding-top: 1rem !important;
  }
  .pr-lg-3,
  .px-lg-3 {
    padding-right: 1rem !important;
  }
  .pb-lg-3,
  .py-lg-3 {
    padding-bottom: 1rem !important;
  }
  .pl-lg-3,
  .px-lg-3 {
    padding-left: 1rem !important;
  }
  .p-lg-4 {
    padding: 1.5rem !important;
  }
  .pt-lg-4,
  .py-lg-4 {
    padding-top: 1.5rem !important;
  }
  .pr-lg-4,
  .px-lg-4 {
    padding-right: 1.5rem !important;
  }
  .pb-lg-4,
  .py-lg-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-lg-4,
  .px-lg-4 {
    padding-left: 1.5rem !important;
  }
  .p-lg-5 {
    padding: 3rem !important;
  }
  .pt-lg-5,
  .py-lg-5 {
    padding-top: 3rem !important;
  }
  .pr-lg-5,
  .px-lg-5 {
    padding-right: 3rem !important;
  }
  .pb-lg-5,
  .py-lg-5 {
    padding-bottom: 3rem !important;
  }
  .pl-lg-5,
  .px-lg-5 {
    padding-left: 3rem !important;
  }
  .m-lg-n1 {
    margin: -0.25rem !important;
  }
  .mt-lg-n1,
  .my-lg-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-lg-n1,
  .mx-lg-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-lg-n1,
  .my-lg-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-lg-n1,
  .mx-lg-n1 {
    margin-left: -0.25rem !important;
  }
  .m-lg-n2 {
    margin: -0.5rem !important;
  }
  .mt-lg-n2,
  .my-lg-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-lg-n2,
  .mx-lg-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-lg-n2,
  .my-lg-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-lg-n2,
  .mx-lg-n2 {
    margin-left: -0.5rem !important;
  }
  .m-lg-n3 {
    margin: -1rem !important;
  }
  .mt-lg-n3,
  .my-lg-n3 {
    margin-top: -1rem !important;
  }
  .mr-lg-n3,
  .mx-lg-n3 {
    margin-right: -1rem !important;
  }
  .mb-lg-n3,
  .my-lg-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-lg-n3,
  .mx-lg-n3 {
    margin-left: -1rem !important;
  }
  .m-lg-n4 {
    margin: -1.5rem !important;
  }
  .mt-lg-n4,
  .my-lg-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-lg-n4,
  .mx-lg-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-lg-n4,
  .my-lg-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-lg-n4,
  .mx-lg-n4 {
    margin-left: -1.5rem !important;
  }
  .m-lg-n5 {
    margin: -3rem !important;
  }
  .mt-lg-n5,
  .my-lg-n5 {
    margin-top: -3rem !important;
  }
  .mr-lg-n5,
  .mx-lg-n5 {
    margin-right: -3rem !important;
  }
  .mb-lg-n5,
  .my-lg-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-lg-n5,
  .mx-lg-n5 {
    margin-left: -3rem !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mt-lg-auto,
  .my-lg-auto {
    margin-top: auto !important;
  }
  .mr-lg-auto,
  .mx-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-auto,
  .my-lg-auto {
    margin-bottom: auto !important;
  }
  .ml-lg-auto,
  .mx-lg-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 1200px) {
  .m-xl-0 {
    margin: 0 !important;
  }
  .mt-xl-0,
  .my-xl-0 {
    margin-top: 0 !important;
  }
  .mr-xl-0,
  .mx-xl-0 {
    margin-right: 0 !important;
  }
  .mb-xl-0,
  .my-xl-0 {
    margin-bottom: 0 !important;
  }
  .ml-xl-0,
  .mx-xl-0 {
    margin-left: 0 !important;
  }
  .m-xl-1 {
    margin: 0.25rem !important;
  }
  .mt-xl-1,
  .my-xl-1 {
    margin-top: 0.25rem !important;
  }
  .mr-xl-1,
  .mx-xl-1 {
    margin-right: 0.25rem !important;
  }
  .mb-xl-1,
  .my-xl-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-xl-1,
  .mx-xl-1 {
    margin-left: 0.25rem !important;
  }
  .m-xl-2 {
    margin: 0.5rem !important;
  }
  .mt-xl-2,
  .my-xl-2 {
    margin-top: 0.5rem !important;
  }
  .mr-xl-2,
  .mx-xl-2 {
    margin-right: 0.5rem !important;
  }
  .mb-xl-2,
  .my-xl-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-xl-2,
  .mx-xl-2 {
    margin-left: 0.5rem !important;
  }
  .m-xl-3 {
    margin: 1rem !important;
  }
  .mt-xl-3,
  .my-xl-3 {
    margin-top: 1rem !important;
  }
  .mr-xl-3,
  .mx-xl-3 {
    margin-right: 1rem !important;
  }
  .mb-xl-3,
  .my-xl-3 {
    margin-bottom: 1rem !important;
  }
  .ml-xl-3,
  .mx-xl-3 {
    margin-left: 1rem !important;
  }
  .m-xl-4 {
    margin: 1.5rem !important;
  }
  .mt-xl-4,
  .my-xl-4 {
    margin-top: 1.5rem !important;
  }
  .mr-xl-4,
  .mx-xl-4 {
    margin-right: 1.5rem !important;
  }
  .mb-xl-4,
  .my-xl-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-xl-4,
  .mx-xl-4 {
    margin-left: 1.5rem !important;
  }
  .m-xl-5 {
    margin: 3rem !important;
  }
  .mt-xl-5,
  .my-xl-5 {
    margin-top: 3rem !important;
  }
  .mr-xl-5,
  .mx-xl-5 {
    margin-right: 3rem !important;
  }
  .mb-xl-5,
  .my-xl-5 {
    margin-bottom: 3rem !important;
  }
  .ml-xl-5,
  .mx-xl-5 {
    margin-left: 3rem !important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .pt-xl-0,
  .py-xl-0 {
    padding-top: 0 !important;
  }
  .pr-xl-0,
  .px-xl-0 {
    padding-right: 0 !important;
  }
  .pb-xl-0,
  .py-xl-0 {
    padding-bottom: 0 !important;
  }
  .pl-xl-0,
  .px-xl-0 {
    padding-left: 0 !important;
  }
  .p-xl-1 {
    padding: 0.25rem !important;
  }
  .pt-xl-1,
  .py-xl-1 {
    padding-top: 0.25rem !important;
  }
  .pr-xl-1,
  .px-xl-1 {
    padding-right: 0.25rem !important;
  }
  .pb-xl-1,
  .py-xl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-xl-1,
  .px-xl-1 {
    padding-left: 0.25rem !important;
  }
  .p-xl-2 {
    padding: 0.5rem !important;
  }
  .pt-xl-2,
  .py-xl-2 {
    padding-top: 0.5rem !important;
  }
  .pr-xl-2,
  .px-xl-2 {
    padding-right: 0.5rem !important;
  }
  .pb-xl-2,
  .py-xl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-xl-2,
  .px-xl-2 {
    padding-left: 0.5rem !important;
  }
  .p-xl-3 {
    padding: 1rem !important;
  }
  .pt-xl-3,
  .py-xl-3 {
    padding-top: 1rem !important;
  }
  .pr-xl-3,
  .px-xl-3 {
    padding-right: 1rem !important;
  }
  .pb-xl-3,
  .py-xl-3 {
    padding-bottom: 1rem !important;
  }
  .pl-xl-3,
  .px-xl-3 {
    padding-left: 1rem !important;
  }
  .p-xl-4 {
    padding: 1.5rem !important;
  }
  .pt-xl-4,
  .py-xl-4 {
    padding-top: 1.5rem !important;
  }
  .pr-xl-4,
  .px-xl-4 {
    padding-right: 1.5rem !important;
  }
  .pb-xl-4,
  .py-xl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-xl-4,
  .px-xl-4 {
    padding-left: 1.5rem !important;
  }
  .p-xl-5 {
    padding: 3rem !important;
  }
  .pt-xl-5,
  .py-xl-5 {
    padding-top: 3rem !important;
  }
  .pr-xl-5,
  .px-xl-5 {
    padding-right: 3rem !important;
  }
  .pb-xl-5,
  .py-xl-5 {
    padding-bottom: 3rem !important;
  }
  .pl-xl-5,
  .px-xl-5 {
    padding-left: 3rem !important;
  }
  .m-xl-n1 {
    margin: -0.25rem !important;
  }
  .mt-xl-n1,
  .my-xl-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-xl-n1,
  .mx-xl-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-xl-n1,
  .my-xl-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-xl-n1,
  .mx-xl-n1 {
    margin-left: -0.25rem !important;
  }
  .m-xl-n2 {
    margin: -0.5rem !important;
  }
  .mt-xl-n2,
  .my-xl-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-xl-n2,
  .mx-xl-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-xl-n2,
  .my-xl-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-xl-n2,
  .mx-xl-n2 {
    margin-left: -0.5rem !important;
  }
  .m-xl-n3 {
    margin: -1rem !important;
  }
  .mt-xl-n3,
  .my-xl-n3 {
    margin-top: -1rem !important;
  }
  .mr-xl-n3,
  .mx-xl-n3 {
    margin-right: -1rem !important;
  }
  .mb-xl-n3,
  .my-xl-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-xl-n3,
  .mx-xl-n3 {
    margin-left: -1rem !important;
  }
  .m-xl-n4 {
    margin: -1.5rem !important;
  }
  .mt-xl-n4,
  .my-xl-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-xl-n4,
  .mx-xl-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-xl-n4,
  .my-xl-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-xl-n4,
  .mx-xl-n4 {
    margin-left: -1.5rem !important;
  }
  .m-xl-n5 {
    margin: -3rem !important;
  }
  .mt-xl-n5,
  .my-xl-n5 {
    margin-top: -3rem !important;
  }
  .mr-xl-n5,
  .mx-xl-n5 {
    margin-right: -3rem !important;
  }
  .mb-xl-n5,
  .my-xl-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-xl-n5,
  .mx-xl-n5 {
    margin-left: -3rem !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mt-xl-auto,
  .my-xl-auto {
    margin-top: auto !important;
  }
  .mr-xl-auto,
  .mx-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-auto,
  .my-xl-auto {
    margin-bottom: auto !important;
  }
  .ml-xl-auto,
  .mx-xl-auto {
    margin-left: auto !important;
  }
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

body {
  font-family: "Montserrat", sans-serif;
  position: relative;
  background: #000000;
}

.ant-layout {
  background: #111111 !important;
  color: #FFFFFF !important;
}

.flex-col-end {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}


/** Pilots table
************************************************* */

.pilots__wrap {
  margin-top: 48px;
  padding-bottom: 24px;
}

.pilots {
  margin-top: 32px;
}

.pilot > .first,
.pilot > .second,
.pilot > .third {
  display: flex;
  align-items: center;
}

.pilots {
  width: 100%;
  /* min 290 px */
  margin: 0 auto;
}

.pilot > .first {
  flex: 0 0 170px;
}

.pilot > .second {
  flex: 1 1 auto;
}

.pilot {
  .second {
    min-width: 60px;
    width: 60px;
    max-width: 110px;
  }
}

.pilot > .third {
  flex: 0 0 auto;
  margin-right: 12px;
}

.pilot__place {
  flex: 0 0 20px;
}

@media (min-width: 360px) {
  .pilots {
    width: 100%;
    /* min 330 px */
    margin: 0 auto;
  }
  .pilot > .first {
    flex: 0 0 210px;
  }
  .pilot > .second {
    flex: 1 1 auto;
  }
  .pilot > .third {
    flex: 0 0 auto;
    margin-right: 12px;
  }
  .pilot__place {
    flex: 0 0 30px;
  }
}

@media (min-width: 576px) {
  .pilots {
    width: 100%;
    /* min 510 px */
    margin: 0 auto;
  }
  .pilot > .first {
    flex: 0 0 290px;
  }
  .pilot > .third {
    margin-right: 24px;
  }
  .pilot__place {
    flex: 0 0 60px;
  }
}

@media (min-width: 768px) {
  .pilots {
    width: 690px;
    margin: 0 auto;
  }
  .pilot > .first {
    flex: 0 0 360px;
  }
}

@media (min-width: 992px) {
  .pilots {
    width: 760px;
    margin: 0 auto;
  }
}

.pilot {
  background: #282828;
  min-height: 50px;
  margin-top: 6px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.image-gallery-slide-wrapper {
  z-index: 99;
}

.pilot:hover {
  background: #1E1E1E !important;
}

.Toastify__toast-container {
  z-index: 9999999999 !important;
}

@media screen and (max-width: 767px) {
  .ant-layout-content {
    padding-top: 120px;
  }
}

.pilot:nth-child(1) {
  margin-top: 0;
}

.pilot__place {
  margin-left: 6px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #000000;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #FFB524;
}

.pilot__team-color {
  margin-left: 12px;
  flex: 0 0 15px;
  height: 15px;
  flex-shrink: 0;
  border-radius: 5px;
}

.color-ferrari {
  background-color: #E11E1E;
}

.color-redbull {
  background-color: #1E55E1;
}

.color-mercedes {
  background-color: #1EE1CA;
}

.color-alpine {
  background-color: #1E8FE1;
}

.color-haas {
  background-color: #AEB3B7;
}

.color-alfaromeo {
  background-color: #8C0808;
}

.color-mclaren {
  background-color: #E1641E;
}

.pilot__name {
  margin-left: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #FFFFFF;
}

.pilot__name .pilot__name-second {
  text-transform: uppercase;
}

.pilot__team-name {
  font-size: 10px;
  font-weight: 700;
  color: #AEB3B7;
}

.pilot__team-name img {
  width: 100px;
}

.pilot {
  &.cleared {
    background: transparent !important;
    .pilot__place {
      background: transparent !important;
    }
    .pilot__points {
      background: transparent !important;
      img {
        width: 22px;
        position: relative;
        top: 6px;
      }
    }
  }
}

.text-fiol {
  color: #FF00FF !important;
}

.text-green {
  color: #00FF00 !important;
}

.text-yellow {
  color: #FFFF00 !important;
}

.text-red {
  color: red !important;
}

.pilot__points {
  height: 26px;
  font-size: 12px;
  font-weight: 600;
  line-height: 26px;
  flex: 0 0 auto;
  padding: 0 6px;
  color: #FFFFFF;
  background: #282828;
  border-radius: 5px;
  margin-left: 12px;
  width: 40px;
  min-width: 40px;
  max-width: 40px;
  text-align: center;
  &:last-child {
    width: 70px;
    min-width: 70px;
    max-width: 70px;
  }
}

.pilot__readmore {
  margin-right: 8px;
  font-size: 8px;
  font-weight: 500;
  line-height: 1;
  color: #AEB3B7;
}

.top3__row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 32px
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

.top3__title_lastname {
  text-transform: uppercase;
  letter-spacing: .06em
}

.pilots__wrap {
  margin-top: 48px;
  padding-bottom: 24px
}

.pilots {
  margin-top: 32px
}

.pilot > .first,
.pilot > .second,
.pilot > .third {
  display: flex;
  align-items: center
}

.pilots {
  width: 100%;
  margin: 0 auto
}

.pilot > .first {
  flex: 0 0 170px
}

.pilot > .second {
  flex: 1 1 auto
}

.pilot > .third {
  flex: 0 0 auto;
  margin-right: 12px
}

.pilot__place {
  flex: 0 0 20px
}

@media (min-width: 360px) {
  .pilots {
    width: 100%;
    margin: 0 auto
  }
  .pilot > .first {
    flex: 0 0 186px
  }
  .pilot > .second {
    flex: 1 1 auto
  }
  .pilot > .third {
    flex: 0 0 auto;
    margin-right: 12px
  }
  .pilot__place {
    flex: 0 0 30px
  }
}

@media screen and (max-width: 768px) {
  .pilot__name {
    font-size: 12px !important;
    min-width: fit-content;
  }
}

@media (min-width: 576px) {
  .pilots {
    width: 100%;
    margin: 0 auto
  }
  .pilot > .first {
    flex: 0 0 290px
  }
  .pilot > .third {
    margin-right: 24px
  }
  .pilot__place {
    flex: 0 0 60px
  }
}

@media (min-width: 768px) {
  .pilots {
    width: 100%;
    margin: 0 auto
  }
  .pilot > .first {
    flex: 0 0 290px
  }
}

@media (min-width: 992px) {
  .pilots {
    width: 100%;
    margin: 0 auto
  }
}

.pilot {
  background: #282828;
  min-height: 36px;
  margin-top: 6px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  width: 1668px;
}

.pilot:hover {
  background: #1E1E1E;
}

.pilot:nth-child(1) {
  margin-top: 0
}

.pilot__place {
  margin-left: 6px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  background: #000000;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #FFB524;
}

.pilot__team-color {
  margin-left: 12px;
  flex: 0 0 15px;
  height: 15px;
  flex-shrink: 0;
  border-radius: 5px
}

.color-ferrari {
  background-color: #E11E1E
}

.color-redbull {
  background-color: #1E55E1
}

.color-mercedes {
  background-color: #1EE1CA
}

.color-alpine {
  background-color: #1E8FE1
}

.color-haas {
  background-color: #AEB3B7
}

.color-alfaromeo {
  background-color: #8C0808
}

.color-mclaren {
  background-color: #E1641E
}

.pilot__name {
  margin-left: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF
}

.pilot__name .pilot__name-second {
  text-transform: uppercase
}

.pilot__team-name {
  font-size: 10px;
  font-weight: 700;
  color: #AEB3B7
}

.pilot__points {
  height: 26px;
  font-size: 12px;
  font-weight: 600;
  line-height: 26px;
  flex: 0 0 auto;
  padding: 0 6px;
  color: #FFFFFF;
  background: #282828;
  border-radius: 5px;
  small {
    opacity: 0.5;
  }
}

.pilot__readmore {
  margin-right: 8px;
  font-size: 8px;
  font-weight: 500;
  line-height: 1;
  color: #AEB3B7
}

.player__text,
.player__share {
  flex: 0 0 50%;
  max-width: 50%
}

.player__share {
  display: flex;
  justify-content: space-around;
  align-items: center
}

.country {
  display: flex;
  align-items: center
}

.country__flag {
  width: 30px;
  height: auto;
  margin-right: 6px;
  border-radius: 5px
}

.country__name {
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 500;
  line-height: 1
}

.player__title {
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  margin-top: 6px
}

.player__info {
  color: #AEB3B7;
  font-size: 12px;
  font-weight: 500;
  margin-top: 3px
}

.player__data {
  margin-top: 32px
}

.pilot__name,
.top3__title,
.pilot__team-name {
  font-weight: normal;
}

.pilot__name .pilot__name-second,
.top3__title_lastname {
  font-weight: 600;
}

.pilot__team-color {
  flex: 0 0 5px;
}

.slider_showcase {
  height: 520px;
}

.not_auth {
  width: 100%;
  text-align: center;
  height: 100%;
  min-height: 220px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.not_auth .not_auth__icon {
  font-size: 54px;
  opacity: 0.5;
}

.not_auth .not_auth__title {
  font-size: 24px;
  font-weight: 700;
}

.not_auth .not_auth__desc {
  margin: 10px auto 24px;
  padding: 0 12px;
  font-size: 16px;
  width: 350px;
}

.not_auth .not_auth__action {
}

.not_auth .not_auth__body {
  width: 100%;
}

.ant-layout {
  min-height: 100vh;
}

.not_auth .not_auth__action button {
  border: none;
  outline: none;
  background-color: #FFFFFF2B;
  color: #C8C8C8;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.not_auth .not_auth__action button:hover {
  background-color: red;
  color: #FFFFFF;
}

@media screen and (max-width: 767px) {
  .not_auth .not_auth__action button {
    font-size: 12px;
  }
  .not_auth .not_auth__desc {
    font-size: 14px;
    width: 100% !important;
    color: rgba(255, 255, 255, 0.6) !important;
  }
  .not_auth .not_auth__title {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8) !important;
  }
  .not_auth .not_auth__icon {
    font-size: 24px;
  }
}

.ribanimtop {
}

.ribanimtop .ant-ribbon-wrapper .ant-ribbon {
  transform: scale(0.94);
  box-shadow: 0 2px 4px;
  transition: all 0.3s ease;
  animation: liveIndic 1.3s infinite ease-in-out;
}

.golded {
  color: gold;
  position: relative;
  top: 2px;
}

.ngolded {
  position: relative;
  top: 2px;
}

@keyframes liveIndic {
  0% {
    transform: scale(0.94);
    box-shadow: 0 2px 4px;
  }
  50% {
    transform: scale(1);
    box-shadow: 0 3px 18px;
  }
  100% {
    transform: scale(0.94);
    box-shadow: 0 2px 4px;
  }
}

.vjs-control-bar {
  background-color: transparent !important;
  box-shadow: inset 0 -6px 12px rgba(0, 0, 0, .24) !important;
  padding: 0 6px !important;
  height: 48px !important;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
}

.vjs-button > .vjs-icon-placeholder:before {
  font-size: 2.9em !important;
}

.video-js .vjs-volume-bar {
  margin: 2.31em 0.45em !important;
}

.video-js {
  border-radius: 14px;
  width: 100%;
  height: 100%;
  min-height: 486px;
}

.vjs-big-play-button {
  left: calc(50% - 1em) !important;
  top: calc(50% - 1em) !important;
  margin-top: unset !important;
  margin-left: unset !important;
}

@media screen and (max-width: 960px) {
  .video-js {
    min-height: 194px !important;
  }
}

.vjs-menu-button-popup .vjs-menu .vjs-menu-content {
  background-color: rgb(41 41 41);
  border-radius: 8px;
}

.vjs-menu li.vjs-selected,
.vjs-menu li.vjs-selected:focus,
.vjs-menu li.vjs-selected:hover,
.js-focus-visible .vjs-menu li.vjs-selected:hover {
  background-color: #F70000;
  color: #FFFFFF;
  font-weight: 600;
}

.vjs-menu-item {
  font-size: 14px !important;
}

.vjs-menu-title {
  font-size: 14px !important;
}

.vjs-quality-selector {
  width: 6em !important;
  .vjs-menu-button {
    .vjs-icon-placeholder {
      font-family: inherit !important;
      text-align: right;
      &::before {
        font-family: "VideoJS" !important;
        left: -12px !important;
        top: 2px;
        font-size: 26px !important;
      }
    }
  }
}

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");
* {
  outline: none;
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
}

:root {
  --body-font: "Inter", sans-serif;
  --theme-bg: #1C1C1C;
  --body-color: #808191;
  --button-bg: #252525;
  --border-color: rgb(128 129 145 / 24%);
  --video-bg: #252525;
}

body {
  font-family: var(--body-font);
  color: var(--body-color);
  background-image: url("../public/assets/images/main_bg_2.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(18, 21, 39, 0.86);
  padding: 1em 2em;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(163deg, rgba(31, 29, 43, 1) 21%, rgba(31, 29, 43, 0.3113620448179272) 64%);
    opacity: 0.4;
    content: "";
  }
}

.video-js .vjs-tech {
  border-radius: 14px;
}

.video-js .vjs-big-play-button {
  width: 2em !important;
  height: 2em !important;
  border-radius: 100px !important;
  background-color: rgb(247 0 0 / 59%) !important;
  font-size: 52px !important;
  line-height: 2.0em !important;
  border: none !important;
}

.vjs-live .vjs-progress-control {
  display: block !important;
}

.vjs-picture-in-picture-control {
  display: none !important;
}

.vjs-remaining-time {
  display: none !important;
}

.pilots_power {
  width: 100%;
  max-height: 483px;
  overflow-y: scroll;
  margin-top: 27px;
  .title {
    font-size: 14px;
    font-weight: 600;
    margin-top: 0px;
    margin-bottom: 6px;
    text-transform: uppercase;
  }
  .pilot {
    margin-top: 3px;
    min-height: 24px;
    .first {
      flex: 0 0 210px;
      .pilot__place {
        height: 18px;
        line-height: 17px;
      }
    }
    .second {
      .pilot__team-name {
        img {
          width: 60px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .pilots_power {
    max-height: 158px !important;
  }
}

@media screen and (min-width: 1700px) {
  .pilots_power {
    max-height: 542px !important;
  }
}

@media screen and (min-width: 1800px) {
  .pilots_power {
    max-height: 587px !important;
  }
}

@media screen and (min-width: 1920px) {
  .pilots_power {
    max-height: 637px !important;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");
* {
  outline: none;
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
}

:root {
  --body-font: "Inter", sans-serif;
  --theme-bg: #1C1C1C;
  --body-color: #808191;
  --button-bg: #252525;
  --border-color: rgb(128 129 145 / 24%);
  --video-bg: #252525;
}

body {
  font-family: var(--body-font);
  color: var(--body-color);
  background-image: url("../public/assets/images/main_bg_2.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(18, 21, 39, 0.86);
  padding: 1em 2em;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(163deg, rgba(31, 29, 43, 1) 21%, rgba(31, 29, 43, 0.3113620448179272) 64%);
    opacity: 0.4;
    content: "";
  }
}

.main-header {
  z-index: 91199999;
}

@media screen and (max-width: 960px) {
  .main-header {
    font-size: 18px !important;
  }
}

.container_global {
  background-color: var(--theme-bg);
  max-width: 1228px;
  max-height: 100%;
  height: calc(100vh - 40px);
  display: flex;
  width: 100%;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}

@media screen and (min-width: 1500px) {
  .container_global {
    max-width: 1440px;
  }
}

@media screen and (max-width: 768px) {
  .sidebar {
    .logo {
      padding-left: 10px !important;
    }
  }
}
</style>