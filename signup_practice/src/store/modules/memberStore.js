import { apiSignup } from "../../api/signup";
import router from "../../router";

const memberStore = {
  namespaced: true,
  state: {
    userInfo: {
      userId: null,
      userEmail: null,
      userName: null,
    },
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    setUserInfo(context, param) {
      apiSignup(
        param,
        (response) => {
          if (response.data.status == 200) {
            context.commit("SET_USER_INFO", param);
            alert("회원가입이 완료되었습니다.");
            router.push({ name: "Home" });
          }
        },
        () => {}
      );
    },
  },
};

export default memberStore;
