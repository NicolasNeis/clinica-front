import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import axiosInstance from '@/plugins/axios';

loadFonts();

const app = createApp(App);

app.config.globalProperties.$axios = axiosInstance;

app.use(router);
app.use(store);
app.use(vuetify);

app.mount('#app');
