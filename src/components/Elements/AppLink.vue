<template>
  <router-link
      :to="to"
      class="flex items-center rounded-lg px-4 py-2"
      :class="[
      active
        ? 'bg-btn-active-bg text-btn-active-text hover:bg-btn-active-bg-hover hover:text-btn-active-text-hover'
        : 'bg-btn-bg text-btn-text hover:bg-btn-bg-hover hover:text-btn-text-hover',
      hasSlotContent() ? 'gap-2' : '',
    ]"
  >
    <div>
      <slot/>
    </div>
    <span class="text-sm font-medium"> {{ title }}</span>
  </router-link>
</template>
<script>
export default {
  props: {
    title: String,
    to: String,
    active: Boolean,
  },
  methods: {
    hasSlotContent() {
      return this.$slots.default;
    },
  },
};
</script>