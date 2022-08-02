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
import { mapActions, mapMutations } from "vuex";
import { Draggable } from "draggable-vue-directive";
//https://www.vuetoolbox.com/projects/draggable-vue-directive

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
    ...mapMutations({
      openEdit: "edit/openEdit",
      setEditId: "edit/setEditId"
      }),
    ...mapActions({deleteCard: "cards/deleteCard"}),
    del() {
      this.deleteCard(this.card.id);
    },
    edit() {
      this.setEditId(this.card.id)
      this.openEdit()
    },
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
  border: solid 1px #42b983;
  border-radius: 10px;
  width: 200px;
  margin: 10px;
  box-shadow: 5px 5px 4px -1px rgba(0, 0, 0, 0.58);
}

.header__card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #42b983;
  color: aliceblue;
  border-radius: 8px 8px 0px 0px;
}

.delete__card {
  cursor: pointer;
}

.edit__card {
  cursor: pointer;
}
</style>