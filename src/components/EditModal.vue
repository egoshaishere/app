<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">Редактирование карточки №{{ idCard }}</div>

          <div class="modal-body">
            <div>{{ cardOld.title }}</div>
            <input type="text" v-model="newCardData.title" />

            <div>{{ cardOld.body }}</div>
            <input type="text" v-model="newCardData.body" />

            <div>{{ cardOld.status }}</div>
            <input type="text" v-model="newCardData.status" />
          </div>

          <div class="modal-footer">
            <div name="footer">
              <button class="modal-default-button" v-on:click="save">
                Сохранить
              </button>
              <button class="modal-default-button" v-on:click="close">
                Отменить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "EditModal",
  data() {
    return {
      newCardData: {
        title: "",
        body: "",
        status: "",
      },
    };
  },
  methods: {
    ...mapActions({
      editCard: "cards/editCard",
    }),
    ...mapMutations({
      closeEdit: "edit/closeEdit",
    }),
    close() {
      this.closeEdit();
    },
    save() {
      let resultObject = {
        id: this.idCard,
        title: this.newCardData.title,
        body: this.newCardData.body,
        status: this.newCardData.status
      };
      this.editCard(resultObject);
      this.closeEdit();
    },
    ...mapGetters({
      getEditId: "edit/getEditId",
    }),
    returnId() {
      return this.idCard;
    },
  },
  computed: {
    ...mapGetters({
      getCard: "cards/getCardById",
    }),
    idCard: function () {
      return this.getEditId();
    },
    cardOld: function () {
      return this.getCard(this.idCard);
    },
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;

  display: flex;
  flex-direction: column;
}

.modal-header {
  font-weight: 700;
  margin-top: 0;
  color: #ffffff;
  border-radius: 8px 8px 0px 0px;
  background-color: #42b983;
}

.modal-body {
  margin: 10px;
}

.modal-footer {
  margin: 10px;
}

.modal-default-button {
  /* float: right; */
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
