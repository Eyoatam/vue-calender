import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAoVZIvwTNRWEgV_LZUYb68eM8MMjWX1BQ",
  authDomain: "vue-calender-fef6c.firebaseapp.com",
  databaseURL: "https://vue-calender-fef6c.firebaseio.com",
  projectId: "vue-calender-fef6c",
  storageBucket: "vue-calender-fef6c.appspot.com",
  messagingSenderId: "527397560600",
  appId: "1:527397560600:web:4b30132b7b9c6356257e6d",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
