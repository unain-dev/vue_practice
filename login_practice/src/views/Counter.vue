<template>
  <div>
    <div>{{ count }}</div>
    <button @click="addOne">증가</button>
    <button @click="initializeAction">초기화</button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "Counter",
  computed: {
    // count() {
    //   return this.$store.state.count;
    // },
    ...mapState(["count"]),
  },
  methods: {
    // mutation을 그냥 method에 선언해서 사용. -> mapMutation으로 대체.
    // addOne: function () {
    //   this.$store.commit("addOne");
    // },
    // mutation을 mapMutations를 이용해서 사용.
    ...mapMutations({
      addOne: "addOne",
    }),
    // action을 그냥 method에 선언해서 사용.
    // initializeAction: function () {
    //   this.$store.dispatch("initializeAction");
    // },
    ...mapActions(["initializeAction"]),
  },
};
</script>

<style></style>
