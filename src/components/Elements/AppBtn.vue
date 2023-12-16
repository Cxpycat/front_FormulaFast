<template>
  <router-link v-if="type === 'link'" :to="to" class="btn" :class="color">
    <slot></slot>
  </router-link>
  <button v-else class="btn" type="submit" :class="color" @click.prevent="$emit('action')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppBtn',
  emits: ['action', 'to'],
  props: {
    color: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'dark', 'white', 'link-white'].includes(value);
      },
    },
    type: {
      type: String,
      default: 'btn',
      validator(value) {
        return ['btn', 'link'].includes(value);
      },
    },
    to: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: var(--button-bg);
  border: 0;
  border-radius: 8px;
  color: var(--text-color-default);
  cursor: pointer;
  font-family: var(--body-font);
  font-size: 14px;
  padding: 10px 15px;
  text-decoration: none;
}

.dark {
  background: var(--bg-primary);
  border: none;
  border-radius: 5px;
  color: var(--text-color-default);
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  outline: none;
  padding: 8px 15px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
}

.white {
  background: var(--bg-inverse);
  border: none;
  border-radius: 5px;
  color: var(--text-inverse);
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  outline: none;
  padding: 8px 15px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
}

.link-white {
  fill: var(--text-color-default);
  color: var(--text-color-default);
  border: 1px solid var(--text-color-default);
  align-items: center;
  background: transparent;
  border-radius: 3px;
  display: inline-flex;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 15px;
  transition: all .3s ease;
  cursor: pointer;

}

.btn:hover,
.dark:hover,
.white:hover,
.link-white:hover {
  background-color: var(--hover-btn-bg);
}
</style>