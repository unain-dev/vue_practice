import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import memberStroe from "./memberStore";
import counterStore from "./counterStore";

const store = new Vuex.Store({
  modules: {
    memberStroe,
    counterStore,
  },
});

export default store;
