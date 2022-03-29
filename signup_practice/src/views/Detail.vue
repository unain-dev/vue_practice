<template>
  <div>
    <h1>상세페이지</h1>
  </div>
</template>

<script>
export default {
  name: "Detail",
  created() {
    console.log(this.$route.params); // 파라미터, 쿼리스트링은 route사용. 이동은 router 사용
  },
};
</script>

<style></style>
