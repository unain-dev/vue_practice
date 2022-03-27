<template>
  <div>
    <div>
      <label>아이디 : </label>
      <input type="text" required v-model="input.userId" />
    </div>
    <div>
      <label>비밀번호 : </label>
      <input type="password" required v-model="input.userPw" />
    </div>
    <div>
      <label>이름 : </label>
      <input type="text" required v-model="input.userName" />
    </div>
    <div>
      <label>이메일 : </label>
      <input type="email" required v-model="input.userEmail" />
    </div>
    <button type="button" @click="submitSignup">회원가입</button>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      input: {
        userId: null,
        userPw: null,
        userName: null,
        userEmail: null,
      },
    };
  },
  methods: {
    submitSignup() {
      console.log(this.input);
      console.log(this.checkPw(this.input.userPw));
    },
    checkPw(pw) {
      // 8~16자리, 최소 숫자 1개, 특수문자 1개, 영문자 1개
      return /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/.test(pw);
    },
  },
};
</script>

<style></style>
