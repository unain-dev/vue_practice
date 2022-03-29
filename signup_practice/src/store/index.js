import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import memberStore from "./modules/memberStore";
const store = new Vue({
  modules: {
    memberStore,
  },
});

export default store;
