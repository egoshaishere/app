<template>
  <div class="card_creater__container">
    <div class="card_creater">
      <fieldset>
        <legend>Create Card</legend>
        <fieldset>
          <legend>title</legend>
          <input type="text" v-model="title" />
        </fieldset>

        <fieldset>
          <legend>body</legend>
          <input type="text" v-model="body" />
        </fieldset>

        <fieldset>
          <legend>Выберите статус задачи</legend>
          <div>
            <input
              type="radio"
              id="todo"
              v-bind:value="toDo"
              name="drone"
              v-model="status"
              v-on:input="onInputStatusHandler"
            />
            <label for="todo">ToDo</label>
          </div>

          <div>
            <input
              type="radio"
              id="inprogress"
              v-bind:value="inProgress"
              name="drone"
              v-model="status"
              v-on:input="onInputStatusHandler"
            />
            <label for="inprogress">In Progress</label>
          </div>

          <div>
            <input
              type="radio"
              id="done"
              v-bind:value="done"
              name="drone"
              v-model="status"
              v-on:input="onInputStatusHandler"
            />
            <label for="done">Done</label>
          </div>
        </fieldset>

        <button class="create_button" v-on:click="create">Create</button>
        <button v-on:click="test">getNextId</button>
      </fieldset>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CardCreater",
  data() {
    return {
      title: "",
      body: "",
      status: "",

      selectedStatus: "",
      toDo: "todo",
      inProgress: "inprogress",
      done: "done",
    };
  },
  computed: {
    ...mapGetters({
      cardsCount: "cards/cardsCount",
      getNextId: "cards/getNextId",
    }),
  },
  methods: {
    onInputStatusHandler(e) {
      this.selectedStatus = e.target.value;
    },
    ...mapActions({ addCard: "cards/addCard" }),
    test() {
      console.log("test pressed");
      console.log(this.getNextId);
    },
    create() {
      let newCard = {
        id: this.getNextId,
        title: this.title,
        body: this.body,
        status: this.selectedStatus,
      };
      this.addCard(newCard);
    },
  },
};
</script>

<style>
.card_creater__container {
  margin: 10px;
  height: 200px;
}
.card_creater {
}

.create_button {
  margin: 10px;
}
</style>