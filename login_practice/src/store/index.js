import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import memberStore from "./memberStore";
import counterStore from "./counterStore";

const store = new Vuex.Store({
  modules: {
    memberStore,
    counterStore,
  },
});

export default store;
