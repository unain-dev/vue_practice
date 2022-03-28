import { signup } from "../api/member";
import router from "../router";

const memberStore = {
  namespaced: true,
  state: {
    memberInfo: {
      userId: null,
      userEmail: null,
    },
  },
  mutations: {
    SIGNUP(state, payload) {
      state.memberInfo.userId = payload.userId;
      state.memberInfo.userEmail = payload.userEmail;
    },
  },
  actions: {
    setSignup(context, param) {
      console.log(param);
      signup(
        param,
        (response) => {
          console.log(response);
          if (response.status === 200) {
            context.commit("SIGNUP", param);
            alert("회원가입이 완료 되었습니다.");
            router.push({ name: "Home" });
          }
        },
        () => {}
      );
    },
  },
};

export default memberStore;
