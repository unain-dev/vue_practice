import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import memberStore from "./modules/memberStore";
import itemStore from "./modules/itemStore";

const store = new Vuex.Store({
  modules: {
    memberStore,
    itemStore,
  },
});

export default store;
