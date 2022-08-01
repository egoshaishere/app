<template>
  <div class="cards__container">
    <div class="cards">
      <div v-for="card in allCards" :key="card.id">
        <Card :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { mapGetters } from "vuex";

export default {
  name: "CardList",
  components: {
    Card,
  },
  computed: {
    ...mapGetters(["allCards"]),
  },
};
</script>

<style>

.cards__container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cards {
}
</style>