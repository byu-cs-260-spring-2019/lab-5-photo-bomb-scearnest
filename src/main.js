import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')




Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDlB9ximGZvwEYpTpIjRh5qKUXRu2kXzcw",
  authDomain: "cs260test.firebaseapp.com",
  databaseURL: "https://cs260test.firebaseio.com",
  projectId: "cs260test",
  storageBucket: "cs260test.appspot.com",
  messagingSenderId: "783532388172",
  appId: "1:783532388172:web:665ebf0cc359b664"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});
