import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
// import axios from './api';
import VueAxios from 'vue-axios';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import VueCookies from 'vue-cookies';
import AppBtn from './components/Elements/AppBtn.vue';
import AppAlert from './components/Elements/AppAlert.vue';

import './assets/main.css';

library.add(fas);

const app = createApp(App);

app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('app-btn', AppBtn);
app.component('app-alert', AppAlert);
// app.component('app-input', AppInput);

app.use(VueAxios, axios);

app.use(VueCookies);

app.mount('#app');


