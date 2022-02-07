import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { firestorePlugin } from "vuefire";
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';
import router from './router'
import store from './store';
Vue.use(FlagIcon);
Vue.use(firestorePlugin);




Vue.config.productionTip = false;
var firebaseConfig = {
  apiKey: "AIzaSyD2CMY4KTEel6nzZSy2EG4HhrO9WYQib6g",
  authDomain: "gurumint.com",
  databaseURL: "https://gurumintcom-282c4-default-rtdb.firebaseio.com",
  projectId: "gurumintcom-282c4",
  storageBucket: "gurumintcom-282c4.appspot.com",
  messagingSenderId: "568730566652",
  appId: "1:568730566652:web:925cd099d62e31e87dfc79",
  measurementId: "G-XCLWL9LBHL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
