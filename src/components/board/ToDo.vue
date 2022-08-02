<template>
  <div class="todo__container">
    <div class="todo__header">ToDo</div>
    <div v-for="card in todoCards" :key="card.id">
      <Card :card="card" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "../Card.vue";

export default {
  name: "ToDo",
  components: {
    Card,
  },
  computed: {
    ...mapGetters({ todoCards: "cards/todoCards" }),
  },
};
</script>

<style>
.todo__container {
  border: solid 2px orange;
  width: 33%;
}

.todo__header {
  padding: 5px;
  font-weight: 700;
  border: solid 2px orange;
}
</style>