const counterStrore = {
  namespaced: true,
  state: {
    count: 0,
    userid: null,
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
  actions: {
    initializeAction(context) {
      let init = 0; // 비동기통신으로 가져온 값.
      context.commit("initialize", init);
    },
  },
  mutations: {
    addOne(state) {
      state.count += 1;
    },
    initialize(state, payload) {
      return (state.count = payload);
    },
  },
  // state ♡ computed
  // action ♡ dispatch ♡ context ♡ 비동기 통신
  // mutation ♡ commit ♡ state ♡ state 값 세팅

  // 비동기통신으로 가져온 값을 store에 저장 :
  // action을 dispatch -> response를 mutation에 파라미터로 넘겨 값 갱신
};

export default counterStrore;
