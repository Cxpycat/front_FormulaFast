<template>
  <input class="input-form-item"
         :type="type"
         :placeholder="placeholder"
         v-model="model">
  <select name="select">
    <option :v-for="listEl" value="value1">Значение 1</option>
  </select>
</template>

<script>
export default {
  name: 'AppInput',
  emits: [],
  props: {
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['button', 'checkbox', 'file', 'hidden', 'image', 'password', 'radio', 'reset', 'submit', 'text', 'email'].includes(value);
      },
    },
    placeholder: {
      type: String,
      default: '',
    },
    model: null,
    listEl: null

  },
};
</script>

<style scoped>

</style>