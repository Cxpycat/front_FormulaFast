<template>
  <div class="shadow-alert"></div>
  <div class="alert-wrapper success" :class="type">
    <slot></slot>
    <div class="actions">
      <app-btn color="dark">Ок</app-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAlert',
  props: {
    alert: null,
    type: {
      type: String,
      default: 'success',
      validator(value) {
        return ['success', 'error', 'warning'];
      },
    },
  },
};
</script>

<style scoped>
.shadow-alert {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #80808040;
  z-index: 22;
}

.alert-wrapper {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 10vh;
  padding: 20px;
  background: var(--bg-primary);
  border-radius: 20px;
  top: 50%;
  left: 50%;
  margin-left: -10vw;
  margin-top: -10vh;
  font-size: 18px;
  font-weight: 700;
  text-transform: capitalize;
  z-index: 33;
}

.actions {
  margin-top: 10px;
}

.warning {background: #ffc107}

.error {background: #dc3545}

.success {
  background: rgba(20, 102, 61);
}
</style>