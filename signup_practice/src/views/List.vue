<template>
  <div>
    <h1>List</h1>
    <div v-for="(item, index) in itemList" v-bind:key="index">
      {{ item }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "List",
  created() {
    this.setItemList();
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("itemStore", ["itemList"]),
  },
  methods: {
    ...mapActions("itemStore", ["setItemList"]),
  },
};
</script>

<style></style>
