<template>
  <div class="h-[100%] rounded-2xl bg-bg-default text-text-color-default flex flex-row overflow-hidden">
    <SideNavigation/>
    <div class="flex flex-1 flex-col h-full overflow-hidden">
      <div class="flex items-center justify-between p-8 py-4 border-b-2 border-border-color">
        <h1 class="text-4xl font-bold">{{ $route.name }}</h1>
        <div class="flex gap-4">
          <AppLink title="Вход" to="/login" :active="$route.path==='/login'"/>
          <AppLink title="Регистрация" to="/register" :active="$route.path==='/register'"/>
        </div>
      </div>
      <div class="p-8 pt-4 h-[100%] w-[100%] overflow-scroll">
        <RouterView/>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import api from '@/api';
import SideNavigation from '@/components/SideNavigation.vue';
import AppLink from '@/components/Elements/AppLink.vue';

export default {
  components: {AppLink, SideNavigation},
  data() {
    return {
      access_token: '',
      user: null,
    };
  },
  mounted() {
    // this.getUser();
  },
  updated() {
    // this.getUser();
  },
  methods: {
    getUser() {
      this.access_token = localStorage.access_token;
      if (this.access_token && this.user === null) {
        api.post('http://127.0.0.1:8000/api/auth/me').then(res => {
          this.user = res.data;
          // localStorage.access_token = res.data.access_token;
        });
      }
    },
  },
};
</script>

<style scoped>

</style>