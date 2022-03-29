import { apiGetList } from "../../api/item";

const itemStore = {
  namespaced: true,
  state: {
    itemList: [],
  },
  mutations: {
    SET_ITEM_LIST(state, payload) {
      state.itemList = payload;
    },
  },
  actions: {
    setItemList(context) {
      apiGetList(
        (response) => {
          context.commit("SET_ITEM_LIST", response.data.data.mostPlayedGenres);
        },
        () => {
          alert("로딩 중 오류가 발생했습니다.");
        }
      );
    },
  },
};

export default itemStore;
