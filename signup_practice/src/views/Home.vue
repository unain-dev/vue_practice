<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>Welcome, {{ userInfo.userId }}님</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState("memberStore", ["userInfo"]),
  },
};
</script>

