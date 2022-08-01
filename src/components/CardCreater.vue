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
    };
  },
  computed: {
    ...mapGetters(["cardsCount", "getNextId"]),
  },
  methods: {
    ...mapActions(['addCard']),
    test(){
      console.log('test pressed')
      console.log(this.getNextId)
    },
    create(){
      let newCard = {
        id: this.getNextId,
        title: this.title,
        body: this.body
      }
      this.addCard(newCard)
    }
  }
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