<template>
  <div>
    <div>
      <input type="text" placeholder="ID" v-model="userInfoInput.userId" />
    </div>
    <div>
      <input type="password" placeholder="PW" v-model="userInfoInput.userPw" />
    </div>
    <div>
      <input type="text" placeholder="Name" v-model="userInfoInput.userName" />
    </div>
    <div>
      <input
        type="email"
        placeholder="Email"
        v-model="userInfoInput.userEmail"
      />
    </div>
    <button @click="submitSignup">회원가입</button>
    <div>{{ userInfo.userId }}</div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "Form",
  data() {
    return {
      userInfoInput: {
        userId: null,
        userPw: null,
        userEmail: null,
        userName: null,
      },
    };
  },
  methods: {
    ...mapActions("memberStore", ["setUserInfo"]),
    checkFrom() {
      if (this.userInfoInput.userPw.length >= 8) {
        return true;
      } else {
        return false;
      }
    },
    submitSignup() {
      if (this.checkFrom()) {
        this.setUserInfo(this.userInfoInput);
      } else {
        alert("비밀번호는 8자 이상이어야합니다.");
      }
    },
  },
  computed: {
    ...mapGetters("memberStore", ["getUserInfo"]),
    ...mapState("memberStore", ["userInfo"]),
  },
};
</script>

<style></style>
