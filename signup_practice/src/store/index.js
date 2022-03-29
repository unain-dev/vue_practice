import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import memberStore from "./modules/memberStore";
const store = new Vuex.Store({
  modules: {
    memberStore,
  },
});

export default store;
