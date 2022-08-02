<template>
  <div class="done__container">
    <div class="done__header">Done</div>
    <div v-for="card in doneCards" :key="card.id">
      <Card :card="card"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "../Card.vue";

export default {
  name: "Done",
  components: {
    Card,
  },
  computed: {
    ...mapGetters({ doneCards: "cards/doneCards" }),
  },
};
</script>

<style>
.done__container {
  border: solid 2px green;
  width: 34%;
}
.done__header {
  padding: 5px;
  font-weight: 700;
  border: solid 2px green;
}
</style>