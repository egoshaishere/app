<template>
  <div class="inprogress__container">
    <div class="inprogress__header">InProgress</div>
    <div v-for="card in inprogressCards" :key="card.id">
      <Card :card="card" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "../Card.vue";

export default {
  name: "InProgress",
  components: {
    Card,
  },
  computed: {
    ...mapGetters({ inprogressCards: "cards/inprogressCards" }),
  },
};
</script>

<style>
.inprogress__container {
  border: solid 2px red;
  width: 33%;
}
.inprogress__header {
  padding: 5px;
  font-weight: 700;
  border: solid 2px red;
}
</style>