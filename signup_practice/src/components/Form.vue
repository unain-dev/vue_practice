<template>
  <div>
    <div><input type="text" placeholder="ID" v-model="userInfo.userId" /></div>
    <div>
      <input type="password" placeholder="PW" v-model="userInfo.userPw" />
    </div>
    <div>
      <input type="text" placeholder="Name" v-model="userInfo.userName" />
    </div>
    <div>
      <input type="email" placeholder="Email" v-model="userInfo.userEmail" />
    </div>
    <button @click="submitSignup">회원가입</button>
  </div>
</template>

<script>
import { apiSignup } from "../api/signup";

export default {
  name: "Form",
  data() {
    return {
      userInfo: {
        userId: null,
        userPw: null,
        userEmail: null,
        userName: null,
      },
    };
  },
  methods: {
    checkFrom() {
      if (this.userInfo.userPw.length >= 8) {
        return true;
      } else {
        return false;
      }
    },
    submitSignup() {
      if (this.checkFrom()) {
        apiSignup(
          this.userInfo,
          (response) => {
            if (response.data.status == 200) {
              alert("회원가입이 완료되었습니다.");
              this.$router.push({ name: "Home" });
            }
          },
          () => {}
        );
      } else {
        alert("비밀번호는 8자 이상이어야합니다.");
      }
    },
  },
};
</script>

<style></style>
