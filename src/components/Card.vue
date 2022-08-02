<template>
  <div v-draggable>
    <div class="card">
      <div class="header__card">
        <div>{{ card.id }}</div>
        <div>{{ card.title }}</div>
        <div class="delete__card" v-on:click="del">&#128465;</div>
        <div class="edit__card" v-on:click="edit">&#x1F589;</div>
      </div>
      <div class="header__body">
        <div>{{ card.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Draggable } from "draggable-vue-directive";

export default {
  name: "Card",
  directives: {
    Draggable,
  },
  props: {
    card: {},
  },
  data() {
    return {
      options: {
        position: {
          right: 120,
          top: 120,
        },
        edgeSpace: [100, 100, 100, 100],
      },
    };
  },
  methods: {
    ...mapActions(["deleteCard"]),
    del() {
      this.deleteCard(this.card.id);
    },
    edit() {},
    start(point) {
      console.log(point);
    },
    move(point) {
      console.log(point);
    },
    end(point) {
      console.log(point);
    },
  },
};
</script>

<style>
.card {
  border: solid 2px black;
  border-radius: 10px;
  width: 200px;
  margin: 10px;
}

.header__card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: black;
  color: aliceblue;
  border-radius: 10px 10px 0px 0px;
}

.delete__card {
  cursor: pointer;
}

.edit__card {
  cursor: pointer;
}
</style>